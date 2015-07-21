<?php

namespace AppBundle\Entity;

use Doctrine\ORM\EntityManager;
use GuzzleHttp\Client;
use Symfony\Component\Filesystem\Filesystem;

class ImagesGenerator
{

    /**
     * @var EntityManager
     */
    private $entityManager;

    /**
     * @var string
     */
    private $uploadPath;

    /**
     * @param EntityManager $entityManager
     * @param string $uploadPath
     */
    public function __construct(EntityManager $entityManager, $uploadPath)
    {
        $this->entityManager = $entityManager;
        $this->uploadPath = $uploadPath;
    }

    /**
     * @param string $url
     * @param Images $image
     * @return Images
     * @throws \Exception
     */
    public function generateFromRemote($url, Images $image)
    {
        $client = new Client();
        $urlParts = parse_url($url);
        if(empty($urlParts['path'])){
            throw new \Exception('Invalid url');
        }
        $pathParts = pathinfo($urlParts['path']);
        if(empty($pathParts['extension'])){
            throw new \Exception ('Remote path is not pointing to a file');
        }

        $imageId = $image->getId();
        $ds = DIRECTORY_SEPARATOR;

        $tempDestination = sys_get_temp_dir() . $ds . $pathParts['basename'];
        $response = $client->get($url, ['save_to' => $tempDestination]);
        if($response->getStatusCode() !=200){
            throw new \Exception('Cannot receive the remote file');
        }

        $isImage = getimagesize($tempDestination);
        if(!$isImage){
            throw new \Exception('File is not an image');
        }


        $relativePath = $imageId . $ds . $pathParts['basename'];

        $fileManager = new Filesystem();
        $fileManager->mkdir($this->uploadPath . $ds . $imageId);
        $fileManager->rename($tempDestination, $this->uploadPath . $relativePath);

        $image->setPath($relativePath);
        $this->entityManager->persist($image);
        $this->entityManager->flush();

        return $image;
    }
}
