<?php

namespace AppBundle\Form;

use AppBundle\Entity\Booking;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\Extension\Core\Type\EmailType;
use Symfony\Component\Form\Extension\Core\Type\HiddenType;
use Symfony\Component\Form\Extension\Core\Type\SubmitType;
use Symfony\Component\Form\Extension\Core\Type\TextType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;

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
                $builder->create('checkinDate', HiddenType::class, array(
                    'attr' => array(
                        'id' => 'booking-checkin-date'
                    ),
                ))->addViewTransformer(new DateTimeToStringTransformer())
            )
            ->add(
                $builder->create('checkoutDate', HiddenType::class, array(
                    'attr' => array(
                        'id' => 'booking-checkout-date'
                    ),
                ))->addViewTransformer(new DateTimeToStringTransformer())
            )
            ->add(
                'guestsCount',
                HiddenType::class,
                array(
                    'attr' => array(
                        'id' => 'booking-checkout-date'
                    )
                )
            )
            ->add(
                'pageId',
                HiddenType::class
            )
            ->add(

                'priceString',
                HiddenType::class,
                array(
                    'attr' => array(
                        'id' => 'booking-price'
                    )
                )
            )
            ->add(
                'firstName',
                TextType::class,
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
                TextType::class,
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
                EmailType::class,
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
                TextType::class,
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
                TextType::class,
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
                TextType::class,
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
                TextType::class,
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
                TextType::class,
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
                SubmitType::class,
                array(
                    'attr' => array(
                        'class' => 'btn btn-primary btn-block btn-large'
                    ),
                    'label' => 'Confirm'
                )
            );
    }

    /**
     * @param OptionsResolver $resolver
     */
    public function configureOptions(OptionsResolver $resolver)
    {
        $resolver->setDefaults(array(
            'data_class' => Booking::class,
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
