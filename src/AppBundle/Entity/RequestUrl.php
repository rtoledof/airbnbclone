<?php

namespace AppBundle\Entity;

use Doctrine\ORM\Mapping as ORM;
use Symfony\Component\Validator\Constraints as Assert;

/**
 * RequestUrl
 *
 */
class RequestUrl
{

    /**
     * @var string
     * @Assert\NotBlank()
     * @Assert\Url()
     */
    private $url;

    /**
     * Set url
     *
     * @param string $url
     * @return RequestUrl
     */
    public function setUrl($url)
    {
        $this->url = $url;

        return $this;
    }

    /**
     * Get url
     *
     * @return string
     */
    public function getUrl()
    {
        return $this->url;
    }
}
