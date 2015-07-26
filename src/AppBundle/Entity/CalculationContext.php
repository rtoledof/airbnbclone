<?php

namespace AppBundle\Entity;

class CalculationContext
{
    /**
     * @var string
     */
    private $pricePerNight;

    /**
     * @var string
     */
    private $checkInDate;

    /**
     * @var string
     */
    private $checkOutDate;

    /**
     * @var int
     */
    private $guestsCount = 1;

    /**
     * @return mixed
     */
    public function getPricePerNight()
    {
        return $this->pricePerNight;
    }

    /**
     * @param string $pricePerNight
     * @return $this
     */
    public function setPricePerNight($pricePerNight)
    {
        $this->pricePerNight = $pricePerNight;

        return $this;
    }

    /**
     * @return mixed
     */
    public function getCheckInDate()
    {
        return $this->checkInDate;
    }

    /**
     * @param string $checkInDate
     * @return $this
     */
    public function setCheckInDate($checkInDate)
    {
        $this->checkInDate = $checkInDate;

        return $this;
    }

    /**
     * @return mixed
     */
    public function getCheckOutDate()
    {
        return $this->checkOutDate;
    }

    /**
     * @param string $checkOutDate
     * @return $this
     */
    public function setCheckOutDate($checkOutDate)
    {
        $this->checkOutDate = $checkOutDate;

        return $this;
    }

    /**
     * @return int
     */
    public function getGuestsCount()
    {
        return $this->guestsCount;
    }

    /**
     * @param int $guestsCount
     * @return $this
     */
    public function setGuestsCount($guestsCount)
    {
        $this->guestsCount = $guestsCount;
        return $this;
    }

    /**
     * @param Booking $bookingEntity
     */
    public function setFromBookingEntity(Booking $bookingEntity)
    {
        $checkinDate = $bookingEntity->getCheckinDate();
        if ($checkinDate instanceof \DateTime) {
            $checkintDate = $checkinDate->format('Y-m-d');
            $this->setCheckInDate($checkintDate);
        }
        $checkoutDate = $bookingEntity->getCheckoutDate();
        if ($checkoutDate instanceof \DateTime) {
            $checkoutDate = $checkoutDate->format('Y-m-d');
            $this->setCheckOutDate($checkoutDate);
        }
        $this->setGuestsCount($bookingEntity->getGuestsCount());
        $this->setPricePerNight($bookingEntity->getPriceString());
    }

}
