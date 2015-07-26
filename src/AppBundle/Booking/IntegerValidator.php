<?php

namespace AppBundle\Booking;

class IntegerValidator implements Validator
{
    /**
     * @var string
     */
    private $errorText;

    /**
     * @param mixed $value
     * @param array $allValuesContext
     * @return bool
     */
    public function validate($value, array $allValuesContext)
    {
        $value = str_replace(array(',', '.'), '|', $value);

        return is_numeric($value);
    }

    /**
     * @return string
     */
    public function getErrorText()
    {
        return 'Is not a valid integer value';
    }

}