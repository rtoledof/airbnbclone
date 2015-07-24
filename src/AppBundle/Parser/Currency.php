<?php

namespace AppBundle\Parser;

class Currency
{

    /**
     * @var string
     */
    private $suffixSymbol = '';

    /**
     * @var string
     */
    private $prefixSymbol = '';

    /**
     * @var number
     */
    private $number;

    /**
     * @param string $moneyString
     */
    public function fromString($moneyString)
    {
        preg_match("/([\D]+)?(\d+)(\D+)?/", $moneyString, $matches);
        $this->prefixSymbol = (!empty($matches[1])) ? trim($matches[1]) : '';
        $this->number = (!empty($matches[2])) ? trim($matches[2]) : null;
        $this->suffixSymbol = (!empty($matches[3])) ? trim($matches[3]) : '';
    }

    /**
     * @return string
     */
    public function __toString()
    {
        return $this->prefixSymbol . $this->number . $this->suffixSymbol;
    }

    /**
     * @param number $number
     */
    public function setNumber($number)
    {
        $this->number = $number;
    }

    /**
     * @return number
     */
    public function getNumber()
    {
        return $this->number;
    }

    /**
     * @return string
     */
    public function getSuffixSymbol()
    {
        return $this->suffixSymbol;
    }

    /**
     * @return string
     */
    public function getPrefixSymbol()
    {
        return $this->prefixSymbol;
    }
} 
