<?php

namespace AppBundle\Entity;

use AppBundle\Entity\Pages;
use AppBundle\Parser\Currency;
use Doctrine\ORM\Mapping as ORM;
use Symfony\Component\Validator\Constraints as Assert;

/**
 * Booking
 *
 * @ORM\Table()
 * @ORM\Entity(repositoryClass="AppBundle\Entity\BookingRepository")
 * @ORM\HasLifecycleCallbacks()
 */
class Booking
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
     * @ORM\Column(name="checkin_date", type="datetime")
     */
    private $checkinDate;

    /**
     * @var \DateTime
     *
     * @ORM\Column(name="checkout_date", type="datetime")
     */
    private $checkoutDate;

    /**
     * @var integer
     *
     * @ORM\Column(name="guests_count", type="integer")
     */
    private $guestsCount;

    /**
     * @var string
     *
     * @ORM\Column(name="price_string", type="string", length=255)
     */
    private $priceString;

    /**
     * @var integer
     *
     * @ORM\Column(name="price", type="integer")
     */
    private $price;

    /**
     * @var integer
     *
     * @ORM\Column(name="nights_count", type="integer")
     */
    private $nightsCount;

    /**
     * @var integer
     *
     * @ORM\Column(name="total", type="string", length=255, nullable=false)
     */
    private $total;

    /**
     * @var string
     *
     * @ORM\Column(name="first_name", type="string", length=255, nullable=true)
     */
    private $firstName;

    /**
     * @var string
     *
     * @ORM\Column(name="last_name", type="string", length=255, nullable=true)
     */
    private $lastName;

    /**
     * @var string
     *
     * @ORM\Column(name="email", type="string", length=255, nullable=true)
     */
    private $email;

    /**
     * @var string
     *
     * @ORM\Column(name="address", type="string", length=255, nullable=true)
     */
    private $address;

    /**
     * @var string
     *
     * @ORM\Column(name="city", type="string", length=255, nullable=true)
     */
    private $city;

    /**
     * @var string
     *
     * @ORM\Column(name="zip", type="string", length=255, nullable=true)
     */
    private $zip;

    /**
     * @var string
     *
     * @ORM\Column(name="country", type="string", length=255, nullable=true)
     */
    private $country;

    /**
     * @var string
     *
     * @ORM\Column(name="phone", type="string", length=255, nullable=true)
     */
    private $phone;

    /**
     * @var integer
     *
     * @ORM\Column(name="page_id", type="integer")
     */
    private $pageId;

    /**
     * @ORM\ManyToOne(targetEntity="Pages", inversedBy="bookings")
     * @ORM\JoinColumn(name="page_id", referencedColumnName="id")
     */
    protected $page;

    /**
     * @var string
     */
    private $host;

    /**
     * @ORM\Column(type="datetime", nullable=true)
     * @var \DateTime
     */
    private $created_at;

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
     * Set checkinDate
     *
     * @param \DateTime $checkinDate
     * @return Booking
     */
    public function setCheckinDate($checkinDate)
    {
        if (is_string($checkinDate)) {
            $dateTime = \DateTime::createFromFormat('Y-m-d', $checkinDate);
        } else {
            $dateTime = $checkinDate;
        }
        $this->checkinDate = $dateTime;

        return $this;
    }

    /**
     * Get checkinDate
     *
     * @return \DateTime
     */
    public function getCheckinDate()
    {
        return $this->checkinDate;
    }

    /**
     * Set checkoutDate
     *
     * @param \DateTime $checkoutDate
     * @return Booking
     */
    public function setCheckoutDate($checkoutDate)
    {
        if (is_string($checkoutDate)) {
            $dateTime = \DateTime::createFromFormat('Y-m-d', $checkoutDate);
        } else {
            $dateTime = $checkoutDate;
        }
        $this->checkoutDate = $dateTime;

        return $this;
    }

    /**
     * Get checkoutDate
     *
     * @return \DateTime
     */
    public function getCheckoutDate()
    {
        return $this->checkoutDate;
    }

    /**
     * Set guestsCount
     *
     * @param integer $guestsCount
     * @return Booking
     */
    public function setGuestsCount($guestsCount)
    {
        $this->guestsCount = $guestsCount;

        return $this;
    }

    /**
     * Get guestsCount
     *
     * @return integer
     */
    public function getGuestsCount()
    {
        return $this->guestsCount;
    }

    /**
     * Set priceString
     *
     * @param string $priceString
     * @return Booking
     */
    public function setPriceString($priceString)
    {
        $this->priceString = $priceString;
        $currency = new Currency();
        $currency->fromString($priceString);
        $this->setPrice($currency->getNumber());

        return $this;
    }

    /**
     * Get priceString
     *
     * @return string
     */
    public function getPriceString()
    {
        return $this->priceString;
    }

    /**
     * Set price
     *
     * @param integer $price
     * @return Booking
     */
    public function setPrice($price)
    {
        $this->price = $price;

        return $this;
    }

    /**
     * Get price
     *
     * @return integer
     */
    public function getPrice()
    {
        return $this->price;
    }

    /**
     * Set nightsCount
     *
     * @param integer $nightsCount
     * @return Booking
     */
    public function setNightsCount($nightsCount)
    {
        $this->nightsCount = $nightsCount;

        return $this;
    }

    /**
     * Get nightsCount
     *
     * @return integer
     */
    public function getNightsCount()
    {
        return $this->nightsCount;
    }

    /**
     * Set total
     *
     * @param string $total
     * @return Booking
     */
    public function setTotal($total)
    {
        $this->total = $total;

        return $this;
    }

    /**
     * Get total
     *
     * @return string
     */
    public function getTotal()
    {
        return $this->total;
    }

    /**
     * Set firstName
     *
     * @param string $firstName
     * @return Booking
     */
    public function setFirstName($firstName)
    {
        $this->firstName = $firstName;

        return $this;
    }

    /**
     * Get firstName
     *
     * @return string
     */
    public function getFirstName()
    {
        return $this->firstName;
    }

    /**
     * Set lastName
     *
     * @param string $lastName
     * @return Booking
     */
    public function setLastName($lastName)
    {
        $this->lastName = $lastName;

        return $this;
    }

    /**
     * Get lastName
     *
     * @return string
     */
    public function getLastName()
    {
        return $this->lastName;
    }

    /**
     * Set email
     *
     * @param string $email
     * @return Booking
     */
    public function setEmail($email)
    {
        $this->email = $email;

        return $this;
    }

    /**
     * Get email
     *
     * @return string
     */
    public function getEmail()
    {
        return $this->email;
    }

    /**
     * Set address
     *
     * @param string $address
     * @return Booking
     */
    public function setAddress($address)
    {
        $this->address = $address;

        return $this;
    }

    /**
     * Get address
     *
     * @return string
     */
    public function getAddress()
    {
        return $this->address;
    }

    /**
     * Set city
     *
     * @param string $city
     * @return Booking
     */
    public function setCity($city)
    {
        $this->city = $city;

        return $this;
    }

    /**
     * Get city
     *
     * @return string
     */
    public function getCity()
    {
        return $this->city;
    }

    /**
     * Set zip
     *
     * @param string $zip
     * @return Booking
     */
    public function setZip($zip)
    {
        $this->zip = $zip;

        return $this;
    }

    /**
     * Get zip
     *
     * @return string
     */
    public function getZip()
    {
        return $this->zip;
    }

    /**
     * Set country
     *
     * @param string $country
     * @return Booking
     */
    public function setCountry($country)
    {
        $this->country = $country;

        return $this;
    }

    /**
     * Get country
     *
     * @return string
     */
    public function getCountry()
    {
        return $this->country;
    }

    /**
     * Set phone
     *
     * @param string $phone
     * @return Booking
     */
    public function setPhone($phone)
    {
        $this->phone = $phone;

        return $this;
    }

    /**
     * Get phone
     *
     * @return string
     */
    public function getPhone()
    {
        return $this->phone;
    }

    /**
     * Set pageId
     *
     * @param integer $pageId
     * @return Booking
     */
    public function setPageId($pageId)
    {
        $this->pageId = $pageId;

        return $this;
    }

    /**
     * Get pageId
     *
     * @return integer
     */
    public function getPageId()
    {
        return $this->pageId;
    }

    /**
     * Set page
     *
     * @param Pages $page
     * @return Booking
     */
    public function setPage(Pages $page = null)
    {
        $this->page = $page;

        return $this;
    }

    /**
     * Get page
     *
     * @return Pages
     */
    public function getPage()
    {
        return $this->page;
    }

    /**
     * @return string
     */
    public function getUserDataAsString()
    {
        return $this->getFirstName() . ' ' . $this->getLastName() . ', ' . $this->getEmail() . ' ' .
        $this->getPhone() . ' ' . $this->getAddress() . ' ' . $this->getCity() . ' ' . $this->getZip() . ' ' .
        $this->getCountry();
    }

    /**
     * @return array
     */
    public function toArray()
    {
        return array(
            'checkin_date' => $this->getCheckinDate()->format('Y-m-d'),
            'checkout_date' => $this->getCheckoutDate()->format('Y-m-d'),
            'guests_count' => $this->getGuestsCount(),
            'price' => $this->getPriceString(),
            'nights_count' => $this->getNightsCount(),
            'total' => $this->getTotal(),
            'first_name' => $this->getFirstName(),
            'last_name' => $this->getLastName(),
            'email' => $this->getEmail(),
            'phone' => $this->getPhone(),
            'address' => $this->getAddress(),
            'city' => $this->getCity(),
            'zip' => $this->getZip(),
            'country' => $this->getCountry(),
            'page_url' => $this->getHost() . '/rooms/' . $this->getPageId()
        );
    }

    /**
     * @return string
     */
    public function getHost()
    {
        return $this->host;
    }

    /**
     * @param string $host
     */
    public function setHost($host)
    {
        $this->host = $host;
    }

    /**
     * Set created_at
     *
     * @param \DateTime $createdAt
     * @return Booking
     */
    public function setCreatedAt($createdAt)
    {
        $this->created_at = $createdAt;

        return $this;
    }

    /**
     * Get created_at
     *
     * @return \DateTime
     */
    public function getCreatedAt()
    {
        return $this->created_at;
    }

    /**
     *
     * @ORM\PrePersist
     * @ORM\PreUpdate
     */
    public function updatedTimestamps()
    {
        if ($this->getCreatedAt() == null) {
            $this->setCreatedAt(new \DateTime());
        }
    }
}
