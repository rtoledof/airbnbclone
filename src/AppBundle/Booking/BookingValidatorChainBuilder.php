<?php

namespace AppBundle\Booking;

class BookingValidatorChainBuilder
{
    public function buildChain()
    {
        $chain = new ValidatorChain();

        $dateTimeValidator = new DateTimeValidator();

        $notEmptyValidator = new NonEmptyValidator();

        $integerValidator = new IntegerValidator();

        $chain->addValidators(
            'checkinDate',
            array(
                $dateTimeValidator,
                $notEmptyValidator,
                new ActualDateTieValidator()
            )
        );
        $chain->addValidators('checkoutDate', array(
            $dateTimeValidator,
            $notEmptyValidator,
            new DateIntervalValidator('checkinDate', 'checkoutDate')
        ));
        $chain->addValidator('guestsCount', $integerValidator);
        $chain->addValidators('priceString', array(
            $notEmptyValidator,
            new PriceValidator()
        ));

        $chain->addRequiredFields(array(
            'checkinDate', 'guestsCount', 'checkoutDate', 'priceString', 'pageId'
        ));

        return $chain;
    }
} 