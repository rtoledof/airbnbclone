<?php
namespace AppBundle\Booking;

class ActualDateTieValidator implements Validator
{
    /**
     * @param mixed $value
     * @param array $allValuesContext
     * @return bool
     */
    public function validate($value, array $allValuesContext)
    {
        $now = new \DateTime();
        if ($value instanceof \DateTime) {
            return true;
        } else {
            $value = \DateTime::createFromFormat('Y-m-d', $value);
            if (!$value) {
                return true;
            }
        }

        return $now <= $value;
    }

    /**
     * @return string
     */
    public function getErrorText()
    {
        return 'The booking date cannot be in the past';
    }

} 