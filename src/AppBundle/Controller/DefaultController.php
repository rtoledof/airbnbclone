<?php

namespace AppBundle\Controller;

use AppBundle\Entity\Document;
use Exception;
use GuzzleHttp\Client;
use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Symfony\Component\Filesystem\Filesystem;

class DefaultController extends Controller
{
    /**
     * @Route("/", name="homepage")
     */
    public function indexAction()
    {
        $document = new Document();
        $document->setPath('');
        $document->setName('lala');
        $em = $this->getDoctrine()->getManager();
        $em->persist($document);
        $em->flush();
        $documentId = $document->getId();

        $remotePath = 'https://a2.muscache.com/ac/pictures/77268228/6bb9d0aa_original.jpg?interpolation=lanczos-none&size=xx_large&output-format=jpg&output-quality=70';
        $client = new Client();
        $urlParts = parse_url($remotePath);
        if(empty($urlParts['path'])){
            throw new Exception('Invalid url');
        }
        $pathParts = pathinfo($urlParts['path']);
        if(empty($pathParts['extension'])){
            throw new Exception ('Remote path is not pointing to a file');
        }
        $ds = DIRECTORY_SEPARATOR;

        $tempDestination = sys_get_temp_dir() . $ds . $pathParts['basename'];
        $response = $client->get($remotePath, ['save_to' => $tempDestination]);
        if($response->getStatusCode() !=200){
            throw new Exception('Cannot receive the remote file');
        }

        $isImage = getimagesize($tempDestination);
        if(!$isImage){
            throw new Exception('File is not an image');
        }

        $uploadPath = $this->get('kernel')->getRootDir() . $ds . '..' . $ds . 'web' . $ds . 'uploads' . $ds;
        $relativePath = $documentId . $ds . $pathParts['basename'];

        $fileManager = new Filesystem();
        $fileManager->mkdir($uploadPath . $ds . $documentId);
        $fileManager->rename($tempDestination, $uploadPath . $relativePath);

        $document->setPath($relativePath);
        $em->persist($document);
        $em->flush();


        return $this->render('default/index.html.twig');
    }
}
