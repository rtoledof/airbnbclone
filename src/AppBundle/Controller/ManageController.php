<?php

namespace AppBundle\Controller;

use AppBundle\Entity\ImagesGenerator;
use AppBundle\Entity\ImageFactory;
use AppBundle\Entity\Pages;
use AppBundle\Entity\RequestUrl;
use AppBundle\Parser\HtmlParser;
use AppBundle\Parser\RemoteDataCollector;
use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Route;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Template;
use Symfony\Component\Validator\Constraints as Assert;
use Symfony\Component\HttpFoundation\Request;

class ManageController extends Controller
{
    /**
     * @Route("/manage/add", name="addPage")
     * @Template()
     * @param Request $request
     * @throws \Exception
     * @return \Symfony\Component\HttpFoundation\Response
     */
    public function addAction(Request $request)
    {
        $page = new Pages();
        $page->setVersion('1.0');
        $page->setDate(new \DateTime());
        $form = $this
            ->createFormBuilder($page, array('attr' => array('id' => 'searchbar-form'), 'method' => 'POST'))
            ->add('sourceUrl', 'text', array(
                    'attr' =>
                        array(
                            'class' => 'menu-autocomplete-input form-inline location input-large input-contrast',
                            'placeholder' => 'Please enter a source url',
                            'id' => 'url',
                            'autocomplete' => 'off',
                        ),
                    'required' => true
                )
            )
            ->add(
                'submit_location',
                'submit',
                array(
                    'attr' => array(
                        'class' => 'searchbar__submit btn btn-primary btn-large'
                    ),
                    'label' => 'Save'
                )
            )
            ->getForm();
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

}
