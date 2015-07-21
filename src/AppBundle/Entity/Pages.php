<?php

namespace AppBundle\Entity;

use AppBundle\Entity\Images;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\ORM\Mapping as ORM;

/**
 * Pages
 *
 * @ORM\Table(name="pages")
 * @ORM\Entity
 */
class Pages
{
    /**
     * @var integer
     *
     * @ORM\Column(name="id", type="integer")
     * @ORM\Id
     * @ORM\GeneratedValue(strategy="AUTO")
     */
    private $id;

    /**
     * @var \DateTime
     *
     * @ORM\Column(name="date", type="datetimetz")
     */
    private $date;

    /**
     * @var array
     *
     * @ORM\Column(name="rawdata", type="json_array")
     */
    private $rawdata;

    /**
     * @var string
     *
     * @ORM\Column(name="version", type="string", length=255)
     */
    private $version;

    /**
     * @ORM\OneToMany(targetEntity="Images", mappedBy="page")
     * @var ArrayCollection
     */
    protected $images;

    /**
     * @var string
     * @ORM\Column(name="source_url", type="string", length=255)
     */
    private $sourceUrl;

    public function __construct()
    {
        $this->images = new ArrayCollection();
    }

    /**
     * Get id
     *
     * @return integer 
     */
    public function getId()
    {
        return $this->id;
    }

    /**
     * Set date
     *
     * @param \DateTime $date
     * @return Pages
     */
    public function setDate($date)
    {
        $this->date = $date;

        return $this;
    }

    /**
     * Get date
     *
     * @return \DateTime 
     */
    public function getDate()
    {
        return $this->date;
    }

    /**
     * Set rawdata
     *
     * @param array $rawdata
     * @return Pages
     */
    public function setRawdata($rawdata)
    {
        $this->rawdata = $rawdata;

        return $this;
    }

    /**
     * Get rawdata
     *
     * @return array 
     */
    public function getRawdata()
    {
        return $this->rawdata;
    }

    /**
     * Set version
     *
     * @param string $version
     * @return Pages
     */
    public function setVersion($version)
    {
        $this->version = $version;

        return $this;
    }

    /**
     * Get version
     *
     * @return string 
     */
    public function getVersion()
    {
        return $this->version;
    }

    /**
     * Add images
     *
     * @param Images $images
     * @return Pages
     */
    public function addImage(Images $images)
    {
        $this->images[] = $images;

        return $this;
    }

    /**
     * Remove images
     *
     * @param Images $images
     */
    public function removeImage(Images $images)
    {
        $this->images->removeElement($images);
    }

    /**
     * Get images
     *
     * @return \Doctrine\Common\Collections\Collection 
     */
    public function getImages()
    {
        return $this->images;
    }

    /**
     * Set sourceUrl
     *
     * @param string $sourceUrl
     * @return Pages
     */
    public function setSourceUrl($sourceUrl)
    {
        $this->sourceUrl = $sourceUrl;

        return $this;
    }

    /**
     * Get sourceUrl
     *
     * @return string 
     */
    public function getSourceUrl()
    {
        return $this->sourceUrl;
    }
}