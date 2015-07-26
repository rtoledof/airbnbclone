<?php

namespace AppBundle\Booking;

use AppBundle\Parser\Currency;

class PriceValidator implements Validator
{
    public function __construct(Currency $converter = null)
    {
        if (!$converter) {
            $converter = new Currency();
        }
        $this->currencyConverter = $converter;
    }

    /**
     * @param mixed $value
     * @param array $allValuesContext
     * @return bool
     */
    public function validate($value, array $allValuesContext)
    {
        $this->currencyConverter->fromString($value);

        return $this->currencyConverter->getNumber() !== null;
    }

    /**
     * @return string
     */
    public function getErrorText()
    {
        return 'Invalid price value';
    }
}