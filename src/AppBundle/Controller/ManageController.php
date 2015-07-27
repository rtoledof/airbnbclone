<?php

namespace AppBundle\Controller;

use AppBundle\Entity\ImagesGenerator;
use AppBundle\Entity\ImageFactory;
use AppBundle\Entity\Pages;
use AppBundle\Entity\Paginator;
use AppBundle\Entity\RequestUrl;
use AppBundle\Form\AddForm;
use AppBundle\Parser\HtmlParser;
use AppBundle\Parser\RemoteDataCollector;
use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Route;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Template;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\HttpFoundation\StreamedResponse;
use Symfony\Component\Validator\Constraints as Assert;
use Symfony\Component\HttpFoundation\Request;

class ManageController extends Controller
{
    /**
     * @Route("/manage/add", name="addPage")
     * @Template()
     * @param Request $request
     * @throws \Exception
     * @return Response
     */
    public function addAction(Request $request)
    {
        $page = new Pages();
        $page->setVersion('1.0');
        $page->setDate(new \DateTime());

        $form = $this->createForm(new AddForm(), $page);
        $form->handleRequest($request);
        $resultUl = null;
        if ($form->isSubmitted() && $form->isValid()) {
            $collector = new RemoteDataCollector($page->getSourceUrl());
            $response = $collector->collect();
            $parser = new HtmlParser();
            $response = $parser->parse($response);
            $page->setRawdata($response);
            $page->setPrice($response['priceNight']);
            $em = $this->getDoctrine()->getManager();
            $ds = DIRECTORY_SEPARATOR;
            $uploadPath = $this->get('kernel')->getRootDir() . $ds . '..' . $ds . 'web' . $ds . 'uploads' . $ds;
            $em->persist($page);
            $em->flush();
            $imagesFactory = new ImageFactory($em, $uploadPath);
            $imagesFactory->processImages($page);
            $resultUl = '/rooms/' . $page->getId();
        }

        return $this->render('manage/add-new.html.twig', array(
            'form' => $form->createView(),
            'url' => $resultUl
        ));
    }

    /**
     * @Route("/manage/bookings/{currentPage}", name="listBookings", defaults={"currentPage" = 1})
     * @param int $currentPage
     * @return Response
     */
    public function bookingListAction($currentPage)
    {
        $entityManager = $this->getDoctrine()->getManager();
        $query = $entityManager->getRepository('AppBundle:Booking')->getExportQuery();
        $paginator = new Paginator($query, 20, $currentPage);
        $paginator->setUrl('/manage/bookings');

        return $this->render('manage/list-bookings.html.twig', array('bookings' => $paginator));
    }

    /**
     * @Route("/manage/pages/{currentPage}", name="listPages", defaults={"currentPage" = 1})
     * @param int $currentPage
     * @return Response
     */
    public function pagesListAction($currentPage)
    {
        $entityManager = $this->getDoctrine()->getManager();
        $query = $entityManager->createQuery("SELECT p FROM AppBundle:Pages p ORDER BY p.date DESC");
        $paginator = new Paginator($query, 20, $currentPage);
        $paginator->setUrl('/manage/pages');

        return $this->render('manage/list-pages.html.twig', array('pages' => $paginator));
    }

    /**
     * @Route("/manage/export-bookings", name="exportBookings")
     * @return Response
     */
    public function exportBookingsAction()
    {
        $container = $this->container;
        $response = new StreamedResponse(function () use ($container) {
            $em = $container->get('doctrine')->getManager();
            $results = $em->getRepository('AppBundle:Booking')->getExportQuery()->iterate();
            $handle = fopen('php://output', 'r+');
            $noFirstRow = true;
            while (false !== ($row = $results->next())) {
                if($noFirstRow){
$headers = array_keys($row[0]->toArray());
fputcsv($handle, $headers);
$noFirstRow = false;
}
                $row[0]->setHost($this->get('request')->getSchemeAndHttpHost());
                fputcsv($handle, $row[0]->toArray());
                $em->detach($row[0]);
            }
            fclose($handle);
        });

        $response->headers->set('Content-Type', 'application/force-download');
        $response->headers->set('Content-Disposition', 'attachment; filename="export.csv"');

        return $response;
    }

}
