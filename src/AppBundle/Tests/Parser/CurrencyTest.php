<?php
namespace AppBundle\Tests\Parser;

use AppBundle\Parser\Currency;

class CurrencyTest extends \PHPUnit_Framework_TestCase
{
    public function testConversion()
    {
        $cases = array(
            '$3668ARS' => '$1000ARS',
            'Kč10037' => 'Kč1000',
            'Лв726' => 'Лв1000',
            'R$ 1281' => 'R$1000',
            '$521CAD' => '$1000CAD',
            '386 CHF' => '1000CHF',
            '¥2453' => '¥1000',
            '₡209220' => '₡1000',
            '2768 KrDKK' => '1000KrDKK',
            '€371' => '€1000',
            '£250' => '£1000',
            'Ft114656' => 'Ft1000',
            '₪ 1530' => '₪1000',
            '₹25414' => '₹1000',
            '¥ 49848' => '¥1000',
            '₩462229' => '₩1000',
            'MAD3980' => 'MAD1000',
            '3285 KrNOK' => '1000KrNOK',
            'S/.1278' => 'S/.1000',
            '₱17642' => '₱1000',
            '123123 ZL' => '1000ZL',
            'Lei1639' => 'Lei1000',
            '22882р' => '1000р',
            '฿13754' => '฿1000',
            '₴9028' => '₴1000',
            '$402' => '$1000',
            '₫8763269' => '₫1000'
        );

        $currencyConverter = new Currency();
        foreach ($cases as $input => $expected) {
            $currencyConverter->fromString($input);
            $currencyConverter->setNumber(1000);
            $this->assertEquals($expected, $currencyConverter->__toString());
        }
    }
} 