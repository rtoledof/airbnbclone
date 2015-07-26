<?php
namespace AppBundle\Booking;

class DateTimeValidator implements Validator
{
    /**
     * @var string
     */
    private $errorText;

    /**
     * @var \DateTime
     */
    private $date;

    /**
     * @param mixed $value
     * @param array $allValuesContext
     * @return bool
     */
    public function validate($value, array $allValuesContext)
    {
        if($value instanceof \DateTime){
            return true;
        }
        $errors = array();
        if(is_string($value)){
            $value = \DateTime::createFromFormat('Y-m-d', $value);
            $errors = \DateTime::getLastErrors();
        }
        if (!$value || !empty($errors['warning_count'])) {
            $this->errorText = 'Wrong date format Y-m-d';
            return false;
        }
        $this->date = $value;
        return true;
    }

    /**
     * @return string
     */
    public function getErrorText()
    {
        return $this->errorText;
    }

    /**
     * @return \DateTime
     */
    public function getDate()
    {
        return $this->date;
    }

} 