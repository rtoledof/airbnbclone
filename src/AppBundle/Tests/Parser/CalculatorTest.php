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
            ->setPricePerNight('$50');

    }

    public function testNightsCount()
    {
        $result = $this->calculator->calculate($this->context);
        $this->assertNotEmpty($result['nightsCount']);
        $this->assertEquals(1, $result['nightsCount']);

        $this->context->setCheckOutDate('2001-01-03');
        $result = $this->calculator->calculate($this->context);
        $this->assertEquals(2, $result['nightsCount']);
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

        foreach ($testSet as $expectedTotal => $inputContext) {
            $this->context->setCheckInDate($inputContext[0]);
            $this->context->setCheckOutDate($inputContext[1]);
            $this->context->setPricePerNight($inputContext[2]);
            $result = $this->calculator->calculate($this->context);
            $this->assertEquals($expectedTotal, $result['total']);
        }
    }

    public function testWrongDateFormat()
    {
        $wrongFormats = array(
            array('1111', 'lalal'),
            array('2011', '08.03.2012'),
            array('18:30', '20001-01-01'),
            array('1999-01-40', '1999-13-01'),
            array('0000-00-00', '2013-02-29'),
        );
        foreach ($wrongFormats as $format) {
            $this->context->setCheckInDate($format[0]);
            $this->context->setCheckOutDate($format[1]);
            $result = $this->calculator->calculate($this->context);
            $this->assertTrue(isset($result['errors']), 'No format failure for values ' . $format[0] . '/' . $format[1]);
            $this->assertNotEmpty($result['errors'], 'No format failure for values ' . $format[0] . '/' . $format[1]);
            $this->assertCount(2, $result['errors']);
        }
    }

    public function testWrongInterval()
    {
        $wrongIntervals = array(
            array('2012-01-01', '2011-01-01'),
            array('2012-03-01', '2012-02-01'),
            array('2012-03-11', '2012-03-10'),
            array('2012-03-10', '2012-03-10'),
        );
        foreach ($wrongIntervals as $format) {
            $this->context->setCheckInDate($format[0]);
            $this->context->setCheckOutDate($format[1]);
            $result = $this->calculator->calculate($this->context);
            $this->assertTrue(isset($result['errors']), 'No interval failure for values ' . $format[0] . '/' . $format[1]);
            $this->assertNotEmpty($result['errors'], 'No interval failure for values ' . $format[0] . '/' . $format[1]);
            $this->assertCount(1, $result['errors']);
        }
    }

    public function testWrongCurrency()
    {
        $wrongFormats = array(
            'lalla',
            '0000',
            '0',
            '',
            null,
            '----',
        );

        foreach ($wrongFormats as $value)
        {
            $this->context->setPricePerNight($value);
            $result = $this->calculator->calculate($this->context);
            $this->assertTrue(isset($result['errors']), 'No price format failure ' . $value);
            $this->assertNotEmpty($result['errors']);
            $this->assertCount(1, $result['errors']);

        }
    }
}
