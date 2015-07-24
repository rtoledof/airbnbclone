<?php

namespace AppBundle\Controller;

use AppBundle\Booking\Calculator;
use AppBundle\Entity\CalculationContext;
use AppBundle\Entity\ImagesGenerator;
use AppBundle\Entity\ImagesViewCollector;
use AppBundle\Entity\Pages;
use AppBundle\Parser\DataContainer;
use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Route;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Template;

class DefaultController extends Controller
{
    /**
     * @Route("/", name="homepage")
     */
    public function indexAction()
    {
        return $this->render('default/index.html.twig');
    }

    /**
     * @Route("/page/{id}", name="page page")
     */
    public function pageAction($id)
    {
        if ($id == 'random') {
            $page = $this->getDoctrine()
                ->getRepository('AppBundle:Pages')->getRandomPage();
        } else {
            $page = $this->getDoctrine()
                ->getRepository('AppBundle:Pages')
                ->find($id);

        }
        if (!$page) {
            throw $this->createNotFoundException(
                'No page found for request param ' . $id
            );
        }
        $imagesCollector = new ImagesViewCollector();

        $calculator = new Calculator();
        $context = new CalculationContext();
        $container = new DataContainer($page->getRawdata());
        $context->setPricePerNight($container->get('priceNight'));
        $now = new \DateTime();
        $context->setCheckInDate($now->format('Y-m-d'));
        $context->setCheckOutDate($now->modify('+1 day')->format('Y-m-d'));


        return $this->render('default/index.html.twig', array(
            'page' => $page,
            'container' => $container,
            'images' => $imagesCollector->collect($page),
            'bookingCalc' => $calculator->calculate($context)
        ));
    }
}
