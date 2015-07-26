<?php

namespace AppBundle\Booking;

use AppBundle\Entity\CalculationContext;
use AppBundle\Parser\Currency;

class Calculator
{
    /**
     * @param CalculationContext $context
     * @return array
     */
    public function calculate(CalculationContext $context)
    {
        $errors = array();
        if (!$checkInDate = $this->createDateTime($context->getCheckInDate())) {
            $errors[] = 'Wrong format of check in date';
        }
        if (!$checkOutDate = $this->createDateTime($context->getCheckOutDate())) {
            $errors[] = 'Wrong format of check out date';
        }

        $price = new Currency();
        $priceValidator = new PriceValidator($price);
        if (!$priceValidator->validate($context->getPricePerNight(), array())) {
            $errors[] = $priceValidator->getErrorText();
        }
        $price->fromString($context->getPricePerNight());
        $number = (int)$price->getNumber();
        if (!empty($errors)) {
            return array('errors' => $errors);
        }

        if ($checkOutDate <= $checkInDate) {
            return array('errors' => array('Negative days count between ' . $context->getCheckInDate() .
                ' and ' . $context->getCheckOutDate()));
        }
        $nightsCount = (int)$checkOutDate->diff($checkInDate)->days;
        $price->setNumber($number * $nightsCount);
        return array(
            'nightsCount' => $nightsCount,
            'total' => $price->__toString(),
            'pricePerNight' => $context->getPricePerNight(),
            'checkinDate' => $context->getCheckInDate(),
            'checkoutDate' => $context->getCheckOutDate(),
            "guestsCount" => $context->getGuestsCount(),
        );
    }

    /**
     * @param $inputDate
     * @return null|\DateTime
     */
    private function createDateTime($inputDate)
    {
        $validator = new DateTimeValidator();
        if(!$validator->validate($inputDate, array())){
            return null;
        }

        return $validator->getDate();
    }
}
