<?php

namespace AppBundle\Controller;

use AppBundle\Entity\ImagesGenerator;
use AppBundle\Entity\Pages;
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
        $ds = DIRECTORY_SEPARATOR;
        $em = $this->getDoctrine()->getManager();
        $uploadPath = $this->get('kernel')->getRootDir() . $ds . '..' . $ds . 'web' . $ds . 'uploads' . $ds;
        $page = new Pages();
        $page->setRawdata('{}');
        $page->setVersion('1.0');
        $page->setDate(new \DateTime());
        $em->persist($page);
        $em->flush();
        $generator = new ImagesGenerator($em, $uploadPath);
        $url = 'https://a1.muscache.com/ac/pictures/88395446/56626934_original.jpg?interpolation=lanczos-none&size=x_large&output-format=progressive-jpeg&output-quality=70';
        $generator->generateFromRemote($url, 'app', $page);

        return $this->render('default/index.html.twig');
    }
}
