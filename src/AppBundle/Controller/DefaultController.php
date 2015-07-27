<?php

namespace AppBundle\Controller;

use AppBundle\Booking\BookingValidatorChainBuilder;
use AppBundle\Booking\Calculator;
use AppBundle\Booking\PriceValidator;
use AppBundle\Entity\Booking;
use AppBundle\Entity\CalculationContext;
use AppBundle\Entity\ImagesViewCollector;
use AppBundle\Entity\Pages;
use AppBundle\Form\BookingForm;
use AppBundle\Parser\Currency;
use AppBundle\Parser\DataContainer;
use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Route;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Template;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Method;
use Symfony\Component\Form\Form;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Validator\Constraints\DateTime;

class DefaultController extends Controller
{
    /**
     * @Route("/", name="homepage")
     */
    public function indexAction()
    {
        return $this->redirectToRoute('addPage');
    }

    /**
     * @Route("/rooms/{id}", name="showRoom")
     * @param string $id
     * @param Request $request
     * @throws \Exception
     * @return \Symfony\Component\HttpFoundation\Response
     */
    public function roomsAction($id, Request $request)
    {
        if ($id == 'random') {
            $page = $this->getDoctrine()
                ->getRepository('AppBundle:Pages')->getRandomPage();
            if(!$page) {
                return $this->render('default/empty.html.twig');
            }
        } else {
            $page = $this->getDoctrine()
                ->getRepository('AppBundle:Pages')
                ->find($id);
            if (!$page) {
                throw $this->createNotFoundException(
                    'No page found for request param ' . $id
                );
            }
        }
        $imagesCollector = new ImagesViewCollector();

        $bookingEntity = new Booking();
        $calculator = new Calculator();
        $context = new CalculationContext();
        $context->setPricePerNight($page->getRawValue('priceNight'));
        $now = new \DateTime();
        $context->setCheckInDate($now->format('Y-m-d'));
        $context->setCheckOutDate($now->modify('+1 day')->format('Y-m-d'));

        $calcResult = $calculator->calculate($context);
        $bookingEntity->setGuestsCount($calcResult['guestsCount']);
        $bookingEntity->setPriceString($calcResult['pricePerNight']);
        $bookingEntity->setCheckinDate($calcResult['checkinDate']);
        $bookingEntity->setCheckoutDate($calcResult['checkoutDate']);
        $bookingEntity->setPage($page);
        $bookingEntity->setPageId($page->getId());
        $form = $this->createForm(new BookingForm('/add-booking/' . $page->getId()), $bookingEntity);
        $form->handleRequest($request);

        return $this->render('default/index.html.twig', array(
            'page' => $page,
            'images' => $imagesCollector->collect($page),
            'bookingCalc' => $calcResult,
            'form' => $form->createView(),
        ));
    }

    /**
     * @Route("/calculate/{guests}/{checkin}/{checkout}/{price}")
     * @Method("GET")
     * @param string $guests
     * @param string $checkin
     * @param string $checkout
     * @param string $price
     * @return JsonResponse
     */
    public function calculateAction($guests, $checkin, $checkout, $price)
    {
        $calculator = new Calculator();
        $context = new CalculationContext();
        $context->setPricePerNight($price);
        $context->setCheckInDate($checkin);
        $context->setCheckOutDate($checkout);
        $context->setGuestsCount($guests);
        $response = new JsonResponse();
        $response->setData($calculator->calculate($context));

        return $response;
    }

    /**
     * @Route("/add-booking/{pageId}")
     * @Method("POST")
     * @param Request $request
     * @throws \Exception
     * @return JsonResponse
     */
    public function addBookingAction($pageId, Request $request)
    {
        /**
         * @var Pages $page
         */
        $page = $this->getDoctrine()
            ->getRepository('AppBundle:Pages')
            ->find($pageId);

        if (!$page) {
            throw $this->createNotFoundException(
                'No page found for request param ' . $pageId
            );
        }

        $response = new JsonResponse();
        $bookingEntity = new Booking();
        $bookingEntity->setPage($page);

        $form = $this->createForm(new BookingForm('/add-booking/' . $page->getId()), $bookingEntity);
        $form->handleRequest($request);

        $validatorBuilder = new BookingValidatorChainBuilder();
        $validatorChain = $validatorBuilder->buildChain();

        $values = $request->request->all();
        $bookingEntity->setPriceString($page->getPrice());
        if (isset($values['appbundle_booking'])) {
            $values = $values['appbundle_booking'];
        } else {
            $values = array();
        }
        $values['priceString'] = $page->getPrice();
        if ($validatorChain->validateContext($values) === null) {
            $calculator = new Calculator();
            $calcRequest = new CalculationContext();
            $calcRequest->setPricePerNight($values['priceString']);
            $calcRequest->setGuestsCount($values['guestsCount']);
            $calcRequest->setCheckOutDate($values['checkoutDate']);
            $calcRequest->setCheckInDate($values['checkinDate']);
            $calcResult = $calculator->calculate($calcRequest);
            $bookingEntity->setNightsCount($calcResult['nightsCount']);
            $bookingEntity->setTotal($calcResult['total']);
            $em = $this->getDoctrine()->getManager();
            $em->persist($bookingEntity);
            $em->flush();
            try{
                $this->sendBookingEmail($bookingEntity);
            }
            catch (\Exception $e){

            }
            $response->setData(array('success' => true));
        } else {
            $response->setData(array('errors' => $validatorChain->getFlatenErrors()));
        }

        return $response;
    }

    /**
     * @param Booking $bookingEntity
     * @return mixed
     */
    private function sendBookingEmail(Booking $bookingEntity)
    {
        $defaultFrom = $this->container->getParameter('mailer_default_from_email');
        $message = \Swift_Message::newInstance()
            ->setFrom($defaultFrom)
            ->setSubject('New booking on ' . $this->get('request')->getSchemeAndHttpHost())
            ->setBody(
                $this->renderView(
                    'email/booking.html.twig',
                    array('booking' => $bookingEntity)
                ),
                'text/html'
            )
            ->addPart(
                $this->renderView(
                    'email/booking.txt.twig',
                    array('booking' => $bookingEntity)
                ),
                'text/plain'
            );

        return $this->get('mailer')->send($message);
    }

    /**
     * @Route("/preview-booking/{bookingid}/{format}", defaults={"format" = "html"})
     * @Method("GET")
     * @param int $bookingid
     * @param string $format
     * @internal param Request $request
     * @return JsonResponse
     */
    public function previewEmailAction($bookingid, $format){
        $booking = $this->getDoctrine()
                   ->getRepository('AppBundle:Booking')
                   ->find($bookingid);

        return $this->render('email/booking.' . $format . '.twig', array('booking' => $booking));
    }
}
