<?php

namespace AppBundle\Entity;

use AppBundle\Entity\Booking;
use AppBundle\Entity\Images;
use AppBundle\Parser\DataContainer;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;
use Symfony\Bridge\Doctrine\Validator\Constraints\UniqueEntity;
use Symfony\Component\Validator\Constraints as Assert;

/**
 * Pages
 *
 * @ORM\Table(name="pages")
 * @ORM\Entity
 * @UniqueEntity(fields={"sourceUrl"}, message="This url was already processed")
 * @ORM\Entity(repositoryClass="AppBundle\Entity\PageRepository")
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
     * @ORM\Column(name="source_url", type="string", length=255, unique=true)
     * @Assert\NotBlank()
     * @Assert\Url()
     */
    private $sourceUrl;

    /**
     * @ORM\OneToMany(targetEntity="Booking", mappedBy="page")
     * @var ArrayCollection
     */
    protected $bookings;

    /**
     * @var string
     * @ORM\Column(name="price", type="string", length=255, unique=false)
     */
    private $price;

    /**
     * @var DataContainer
     */
    private $rawContainer;


    public function __construct()
    {
        $this->images = new ArrayCollection();
        $this->bookings = new ArrayCollection();
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
     * @return Images[]
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

    /**
     * Set price
     *
     * @param string $price
     * @return Pages
     */
    public function setPrice($price)
    {
        $this->price = $price;

        return $this;
    }

    /**
     * Get price
     *
     * @return string 
     */
    public function getPrice()
    {
        return $this->price;
    }

    /**
     * Add bookings
     *
     * @param Booking $bookings
     * @return Pages
     */
    public function addBooking(Booking $bookings)
    {
        $this->bookings[] = $bookings;

        return $this;
    }

    /**
     * Remove bookings
     *
     * @param Booking $bookings
     */
    public function removeBooking(Booking $bookings)
    {
        $this->bookings->removeElement($bookings);
    }

    /**
     * Get bookings
     *
     * @return \Doctrine\Common\Collections\Collection
     */
    public function getBookings()
    {
        return $this->bookings;
    }

    /**
     * @param string $key
     * @param null|mixed $default
     * @return mixed
     * @throws \Exception
     */
    public function getRawValue($key, $default = null){
        if(!$this->rawContainer){
            $rawData = $this->getRawdata();
            if(is_string($rawData)){
                $rawData = json_decode($rawData, true);
            }
            $this->rawContainer = new DataContainer($rawData);
        }
        return $this->rawContainer->get($key, $default);
    }

    /**
     * @return string
     */
    public function __toString()
    {
        return $this->sourceUrl;
    }


}
