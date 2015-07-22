<?php

namespace AppBundle\Controller;

use AppBundle\Entity\ImagesGenerator;
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
            $em = $this->getDoctrine()->getManager();
            $max = $em->createQuery('
                        SELECT MAX(p.id) FROM AppBundle:Pages p
                        ')
                ->getSingleScalarResult();
            $page = $em->createQuery('
                        SELECT p FROM AppBundle:Pages p
                        WHERE p.id >= :rand
                        ORDER BY p.id ASC
                        ')
                ->setParameter('rand', rand(0, $max))
                ->setMaxResults(1)
                ->getSingleResult();
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
        return $this->render('default/index.html.twig', array(
            'page' => $page,
            'raw' => $page->getRawdata(),
            'container' => new DataContainer($page->getRawdata())
        ));
    }
}
