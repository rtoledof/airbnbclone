<?php
/**
 * Created by PhpStorm.
 * User: breathbath
 * Date: 25.07.15
 * Time: 22:58
 */

namespace AppBundle\Booking;

class ValidatorChain
{
    /**
     * @var Validator[][]
     */
    private $validators = array();

    /**
     * @var string[]
     */
    private $errors = array();

    /**
     * @var string[]
     */
    private $requiredFields = array();

    /**
     * @param string $fieldName
     * @param Validator $validator
     */
    public function addValidator($fieldName, Validator $validator)
    {
        $this->validators[$fieldName][] = $validator;
    }

    /**
     * @param array $fields
     */
    public function addRequiredFields(array $fields)
    {
        $this->requiredFields = array_merge($this->requiredFields, $fields);
    }

    /**
     * @param string $fieldName
     * @param array $validators
     */
    public function addValidators($fieldName, array $validators)
    {
        if (empty($this->validators[$fieldName])) {
            $this->validators[$fieldName] = array();
        }

        $this->validators[$fieldName] = array_merge($this->validators[$fieldName], $validators);
    }

    /**
     * @param array $context
     * @return String[]|null
     */
    public function validateContext(array $context)
    {
        foreach ($this->requiredFields as $fieldName) {
            if (!isset($context[$fieldName])) {
                $this->errors[$fieldName][] = 'Field is required and cannot be empty';
            }
        }
        foreach ($context as $fieldName => $value) {
            if (isset($this->validators[$fieldName])) {
                foreach ($this->validators[$fieldName] as $validator) {
                    if (!$validator->validate($value, $context)) {
                        $this->errors[$fieldName][] = $validator->getErrorText();
                    }
                }
            }
        }
        return (!empty($this->errors)) ? $this->errors : null;
    }

    /**
     * @return \string[]
     */
    public function getFlatenErrors()
    {
        if (!empty($this->errors)) {
            $func = function ($value) {
                return implode(', ', $value);
            };
            $this->errors = array_map($func, $this->errors);
        }
        return $this->errors;
    }
} 