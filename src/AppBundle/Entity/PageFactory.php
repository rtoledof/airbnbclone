<?php

namespace AppBundle\Entity;

use Doctrine\ORM\EntityManager;

class PageFactory
{
    /**
     * @var EntityManager
     */
    private $entityManager;

    /**
     * @var ImagesGenerator
     */
    private $imagesGenerator;

    public function __construct(EntityManager $entityManager, ImagesGenerator $imagesGenerator)
    {
        $this->entityManager = $entityManager;
        $this->imagesGenerator = $imagesGenerator;
    }


    public function createPage($url, $parsedData)
    {
        $page = new Pages();
        $page->setRawdata(json_encode($parsedData));
        $page->setSourceUrl($url);
        $page->setVersion('1.0');
        $page->setDate(new \DateTime());
        $this->entityManager->persist($page);
        $this->entityManager->flush();

        if(!empty($parsedData['gallery'])){
            foreach ($parsedData['gallery'] as $imgData){
                if(empty($imgData['url'])){
                    continue;
                }
                $title = !empty($imgData['caption'])?$imgData['caption']:'';
                $image = $this->createImage(Images::GALLERY_TYPE, $page, $imgData['url'], $title);
                $this->performFsOperations($page, $image, $imgData['url']);
            }
        }

        if(!empty($parsedData['emotional-img'])){
            $image = $this->createImage(Images::BACKGROUND_TYPE, $page, $parsedData['emotional-img']);
            $this->performFsOperations($page, $image, $parsedData['emotional-img']);
        }
        if(!empty($parsedData['user-img'])){
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
    private function createImage($type, Pages $page, $url, $title = ''){
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
    private function performFsOperations(Pages $page, Images $image, $url){
        try{
            $image = $this->imagesGenerator->generateFromRemote($url, $image);
            $page->addImage($image);
        }
        catch(\Exception $e){
            $this->entityManager->remove($image);
        }
    }
}
