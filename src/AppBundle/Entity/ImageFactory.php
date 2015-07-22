<?php

namespace AppBundle\Entity;

use Doctrine\ORM\EntityManager;
use GuzzleHttp\Client;
use Symfony\Component\Filesystem\Filesystem;

class ImageFactory
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
     * @param Pages $page
     * @return Pages
     * @throws \Exception
     */
    public function processImages(Pages $page)
    {
        if (!$page->getSourceUrl() || !$page->getRawdata()) {
            throw new \Exception('Wrong page context');
        }

        $parsedData = $page->getRawdata();
        if (!empty($parsedData['gallery'])) {
            foreach ($parsedData['gallery'] as $imgData) {
                if (empty($imgData['url'])) {
                    continue;
                }
                $title = !empty($imgData['caption']) ? $imgData['caption'] : '';
                $image = $this->createImage(Images::GALLERY_TYPE, $page, $imgData['url'], $title);
                $this->performFsOperations($page, $image, $imgData['url']);
            }
        }

        if (!empty($parsedData['emotional-img'])) {
            $image = $this->createImage(Images::BACKGROUND_TYPE, $page, $parsedData['emotional-img']);
            $this->performFsOperations($page, $image, $parsedData['emotional-img']);
        }
        if (!empty($parsedData['user-img'])) {
            $image = $this->createImage(Images::USER_TYPE, $page, $parsedData['user-img']);
            $this->performFsOperations($page, $image, $parsedData['user-img']);
        }

        return $page;
    }

    /**
     * @param string $type
     * @param Pages $page
     * @param string $url
     * @param string $title
     * @return Images
     */
    private function createImage($type, Pages $page, $url, $title = '')
    {
        $image = new Images();
        $image->setPath('');
        $image->setType($type);
        $image->setPage($page);
        $image->setPath($url);
        $this->entityManager->persist($image);
        $this->entityManager->flush();
        $image->setTitle($title);
        return $image;
    }

    /**
     * @param Pages $page
     * @param Images $image
     * @param string $url
     */
    private function performFsOperations(Pages $page, Images $image, $url)
    {
        try {
            $image = $this->generateFromRemote($url, $image);
            $page->addImage($image);
        } catch (\Exception $e) {
            $this->entityManager->remove($image);
        }
    }

    /**
     * @param string $url
     * @param Images $image
     * @return Images
     * @throws \Exception
     */
    private function generateFromRemote($url, Images $image)
    {
        $client = new Client();
        $urlParts = parse_url($url);
        if (empty($urlParts['path'])) {
            throw new \Exception('Invalid url');
        }
        $pathParts = pathinfo($urlParts['path']);
        if (empty($pathParts['extension'])) {
            throw new \Exception ('Remote path is not pointing to a file');
        }

        $imageId = $image->getId();
        $ds = DIRECTORY_SEPARATOR;

        $tempDestination = sys_get_temp_dir() . $ds . $pathParts['basename'];
        $response = $client->get($url, ['save_to' => $tempDestination]);
        if ($response->getStatusCode() != 200) {
            throw new \Exception('Cannot receive the remote file');
        }

        $isImage = getimagesize($tempDestination);
        if (!$isImage) {
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
