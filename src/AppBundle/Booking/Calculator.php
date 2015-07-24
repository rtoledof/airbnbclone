<?php

namespace AppBundle\Booking;

use AppBundle\Entity\CalculationContext;
use AppBundle\Parser\Currency;

class Calculator
{
    public function calculate(CalculationContext $context)
    {
        $checkInDate = \DateTime::createFromFormat('Y-m-d', $context->getCheckInDate());
        $checkOutDate = \DateTime::createFromFormat('Y-m-d', $context->getCheckOutDate());
        $nightsCount = (int) $checkOutDate->diff($checkInDate)->days;
        $price = new Currency();
        $price->fromString($context->getPricePerNight());
        $number = (int) $price->getNumber();
        $price->setNumber($number * $nightsCount);

        return array('nights_count' => $nightsCount, 'total' => $price->__toString());
    }
}
