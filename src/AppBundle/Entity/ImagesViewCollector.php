<?php

namespace AppBundle\Entity;

use Doctrine\ORM\PersistentCollection;

class ImagesViewCollector
{
    /**
     * @param Pages $pageEntity
     * @return Images[]
     */
    public function collect(Pages $pageEntity)
    {
        $images = $pageEntity->getImages();
        $result = array();
        /**
         * @var PersistentCollection $images
         * @var Images $image
         */
        $i = 0;
        $gallery = array();
        foreach ($images->getIterator() as $image) {
            if($image->getType() == 'gallery'){
                if($i < 2){
                    $gallery['featured'][] = $image;
                }
                elseif($i<4){
                    $gallery['supporting'][] = $image;
                }
                elseif($i == 5){
                    $gallery['last'] = $image;
                }
                else{
                    $gallery['other'][] = $image;
                }
                $i++;
            }
            else{
                $result[$image->getType()][] = $image;
            }
        }
        $gallery['count'] = $i;
        $result['gallery'] = $gallery;

        return $result;
    }
}
