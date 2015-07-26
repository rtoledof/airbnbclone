<?php

namespace AppBundle\Booking;

interface Validator {

    /**
     * @param mixed $value
     * @param array $allValuesContext
     * @return bool
     */
    public function validate($value, array $allValuesContext);

    /**
     * @return string
     */
    public function getErrorText();
} 