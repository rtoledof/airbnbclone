<?php
namespace AppBundle\Booking;

class DateIntervalValidator implements Validator
{
    /**
     * @var string
     */
    private $errorText;

    /**
     * @var string
     */
    private $lessValueField;

    /**
     * @var string
     */
    private $moreValueField;

    /**
     * @param string $lessValueField
     * @param string $moreValueField
     */
    public function __construct($lessValueField, $moreValueField)
    {
        $this->lessValueField = $lessValueField;
        $this->moreValueField = $moreValueField;
    }

    /**
     * @param mixed $value
     * @param array $allValuesContext
     * @return bool
     */
    public function validate($value, array $allValuesContext)
    {
        if (!isset($allValuesContext[$this->lessValueField]) || !isset($allValuesContext[$this->moreValueField])) {
            return true;
        }

        $lessValueString = $allValuesContext[$this->lessValueField];
        $moreValueString = $allValuesContext[$this->moreValueField];

        $lessDateTime = $this->getValidDateTime($lessValueString, $allValuesContext);
        if (!$lessDateTime) {
            return true;
        }
        $moreDateTime = $this->getValidDateTime($moreValueString, $allValuesContext);
        if (!$moreDateTime) {
            return true;
        }
        if ($moreDateTime > $lessDateTime) {
            return true;
        }

        $this->errorText = 'Date ' . $moreValueString . ' should be more than ' . $lessValueString . ' but it is not';

        return false;
    }

    /**
     * @return string
     */
    public function getErrorText()
    {
        return $this->errorText;
    }

    /**
     * @param string $value
     * @param array $allValuesContext
     * @return \DateTime|null
     */
    private function getValidDateTime($value, array $allValuesContext)
    {
        $validator = new DateTimeValidator();
        if (!$validator->validate($value, $allValuesContext)) {
            return null;
        }

        return $validator->getDate();
    }
}