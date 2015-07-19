<?php

namespace AppBundle\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Route;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Template;

class ManageController extends Controller
{
    /**
     * @Route("/manage/add")
     * @Template()
     */
    public function addAction()
    {
        return $this->render('manage/add-new.html.twig');
    }

}
