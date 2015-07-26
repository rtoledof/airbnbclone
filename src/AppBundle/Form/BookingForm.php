<?php

namespace AppBundle\Form;

use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolverInterface;

class BookingForm extends AbstractType
{
    /**
     * @var string
     */
    private $action;

    /**
     * @param string $action
     */
    public function __construct($action)
    {
        $this->action = $action;
    }


    /**
     * @param FormBuilderInterface $builder
     * @param array $options
     */
    public function buildForm(FormBuilderInterface $builder, array $options)
    {
        $builder
            ->setMethod('POST')
            ->setAction($this->action);
        $builder
            ->add(
                $builder->create('checkinDate', 'hidden', array(
                    'attr' => array(
                        'id' => 'booking-checkin-date'
                    ),
                ))->addViewTransformer(new DateTimeToStringTransformer())
            )
            ->add(
                $builder->create('checkoutDate', 'hidden', array(
                    'attr' => array(
                        'id' => 'booking-checkout-date'
                    ),
                ))->addViewTransformer(new DateTimeToStringTransformer())
            )
            ->add(
                'guestsCount',
                'hidden',
                array(
                    'attr' => array(
                        'id' => 'booking-checkout-date'
                    )
                )
            )
            ->add(
                'pageId',
                'hidden'
            )
            ->add(

                'priceString',
                'hidden',
                array(
                    'attr' => array(
                        'id' => 'booking-price'
                    )
                )
            )
            ->add(
                'firstName',
                'text',
                array(
                    'attr' => array(
                        'placeholder' => "First name",
                        'class' => "decorative-input inspectletIgnore"
                    ),
                    'required' => false,
                    'label' => false
                )
            )
            ->add(
                'lastName',
                'text',
                array(
                    'attr' => array(
                        'placeholder' => "Last name",
                        'class' => "decorative-input inspectletIgnore"
                    ),
                    'required' => false,
                    'label' => false
                )
            )
            ->add(
                'email',
                'email',
                array(
                    'attr' => array(
                        'placeholder' => "Email address",
                        'class' => "decorative-input inspectletIgnore"
                    ),
                    'required' => false,
                    'label' => false
                )
            )
            ->add(
                'address',
                'text',
                array(
                    'attr' => array(
                        'placeholder' => "Address",
                        'class' => "decorative-input inspectletIgnore"
                    ),
                    'required' => false,
                    'label' => false
                )
            )
            ->add(
                'city',
                'text',
                array(
                    'attr' => array(
                        'placeholder' => "City",
                        'class' => "decorative-input inspectletIgnore"
                    ),
                    'required' => false,
                    'label' => false
                )
            )
            ->add(

                'zip',
                'text',
                array(
                    'attr' => array(
                        'placeholder' => "Postal code",
                        'class' => "decorative-input inspectletIgnore"
                    ),
                    'required' => false,
                    'label' => false
                )
            )
            ->add(
                'country',
                'text',
                array(
                    'attr' => array(
                        'placeholder' => "Country",
                        'class' => "decorative-input inspectletIgnore"
                    ),
                    'required' => false,
                    'label' => false
                )
            )
            ->add(
                'phone',
                'text',
                array(
                    'attr' => array(
                        'placeholder' => "Phone number",
                        'class' => "decorative-input inspectletIgnore"
                    ),
                    'required' => false,
                    'label' => false
                )
            )
            ->add(
                'submit',
                'submit',
                array(
                    'attr' => array(
                        'class' => 'btn btn-primary btn-block btn-large'
                    ),
                    'label' => 'Confirm'
                )
            );
    }

    /**
     * @param OptionsResolverInterface $resolver
     */
    public function setDefaultOptions(OptionsResolverInterface $resolver)
    {
        $resolver->setDefaults(array(
            'data_class' => 'AppBundle\Entity\Booking',
        ));
    }

    /**
     * @return string
     */
    public function getName()
    {
        return 'appbundle_booking';
    }
}
