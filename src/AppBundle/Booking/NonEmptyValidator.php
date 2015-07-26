<?php
/**
 * Created by PhpStorm.
 * User: breathbath
 * Date: 26.07.15
 * Time: 2:03
 */

namespace AppBundle\Booking;

class NonEmptyValidator implements Validator
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
        if (false === $value || (empty($value) && '0' != $value)) {
            return false;
        }

        return true;
    }

    /**
     * @return string
     */
    public function getErrorText()
    {
        return 'This value should not be blank.';
    }

}