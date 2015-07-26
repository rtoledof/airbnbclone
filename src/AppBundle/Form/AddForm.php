<?php

namespace AppBundle\Form;

use AppBundle\Entity\Dealers;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolverInterface;

class AddForm extends AbstractType
{
    /**
     * @param FormBuilderInterface $builder
     * @param array $options
     */
    public function buildForm(FormBuilderInterface $builder, array $options)
    {
        $builder
            ->setMethod('POST')
            ->setAttribute('id', 'searchbar-form');
        $builder->add('sourceUrl', 'text', array(
                'attr' =>
                    array(
                        'class' => 'menu-autocomplete-input form-inline location input-large input-contrast',
                        'placeholder' => 'Please enter a source url',
                        'id' => 'url',
                        'autocomplete' => 'off',
                    ),
                'required' => true
            )
        )
            ->add(
                'submit_location',
                'submit',
                array(
                    'attr' => array(
                        'class' => 'searchbar__submit btn btn-primary btn-large'
                    ),
                    'label' => 'Save'
                )
            );

    }

    /**
     * @return string
     */
    public function getName()
    {
        return 'add_form';
    }

}
