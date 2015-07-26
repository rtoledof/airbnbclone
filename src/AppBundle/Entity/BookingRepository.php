<?php

namespace AppBundle\Entity;

use Doctrine\ORM\EntityRepository;
use Doctrine\ORM\Query;

/**
 * BookingRepository
 *
 * This class was generated by the Doctrine ORM. Add your own custom
 * repository methods below.
 */
class BookingRepository extends EntityRepository
{
    /**
     * @return Query
     */
    public function getExportQuery()
    {
        return $this->getEntityManager()->createQuery("SELECT b FROM AppBundle:Booking b ORDER BY b.checkinDate");
    }
}