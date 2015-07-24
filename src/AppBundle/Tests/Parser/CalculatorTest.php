<?php

namespace AppBundle\Tests\Parser;

use AppBundle\Booking\Calculator;
use AppBundle\Entity\CalculationContext;

class CalculatorTest extends \PHPUnit_Framework_TestCase
{
    /**
     * @var Calculator
     */
    private $calculator;

    /**
     * @var CalculationContext
     */
    private $context;

    public function setUp()
    {
        $this->calculator = new Calculator();
        $this->context = new CalculationContext();
        $this->context
            ->setCheckInDate('2001-01-01')
            ->setCheckOutDate('2001-01-02')
            ->setGuestsCount(1)
            ->setPricePerNight('$50')
        ;

    }

    public function testNightsCount()
    {
        $result = $this->calculator->calculate($this->context);
        $this->assertNotEmpty($result['nights_count']);
        $this->assertEquals(1, $result['nights_count']);

        $this->context->setCheckOutDate('2001-01-03');
        $result = $this->calculator->calculate($this->context);
        $this->assertEquals(2, $result['nights_count']);
    }

    public function testPriceCalculation()
    {
        $testSet = array(
            '6200CHF' => array('2013-12-31', '2014-03-03', '100 CHF'),
            '$10' => array('2001-01-01', '2001-01-02', '$10'),
            '£2000' => array('2001-01-31', '2001-02-02', '£1000'),
            '₹200' => array('2001-12-31', '2002-01-02', '₹100'),
            '1600р' => array('2012-02-28', '2012-03-01', '800р'),
            '150р' => array('2013-02-28', '2013-03-01', '150 р'),
        );

        foreach ($testSet as $expectedTotal => $inputContext){
            $this->context->setCheckInDate($inputContext[0]);
            $this->context->setCheckOutDate($inputContext[1]);
            $this->context->setPricePerNight($inputContext[2]);
            $result = $this->calculator->calculate($this->context);
            $this->assertEquals($expectedTotal, $result['total']);
        }
    }
}
