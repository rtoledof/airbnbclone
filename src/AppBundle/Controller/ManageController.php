<?php

namespace AppBundle\Controller;

use AppBundle\Entity\ImagesGenerator;
use AppBundle\Entity\PageFactory;
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
     * @Route("/manage/add")
     * @Template()
     * @param Request $request
     * @throws \Exception
     * @return \Symfony\Component\HttpFoundation\Response
     */
    public function addAction(Request $request)
    {
        $urlEntity = new RequestUrl();
        $form = $this
            ->createFormBuilder($urlEntity, array('attr' => array('id' => 'searchbar-form'), 'method' => 'POST'))
            ->add('url', 'text', array(
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
        $response = null;
        if ($form->isSubmitted() && $form->isValid()) {
            $collector = new RemoteDataCollector($urlEntity->getUrl());
            $response = $collector->collect();
            $parser = new HtmlParser();
            $response = $parser->parse($response);

            $em = $this->getDoctrine()->getManager();
            $ds = DIRECTORY_SEPARATOR;
            $uploadPath = $this->get('kernel')->getRootDir() . $ds . '..' . $ds . 'web' . $ds . 'uploads' . $ds;
            $generator = new ImagesGenerator($em, $uploadPath);
            $pageFactory = new PageFactory($em, $generator);
            $page = $pageFactory->createPage($urlEntity->getUrl(), $response);
        }
        return $this->render('manage/add-new.html.twig', array(
            'form' => $form->createView(),
            'response' => $response
        ));
    }

}
