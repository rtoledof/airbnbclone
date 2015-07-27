<?php

namespace AppBundle\Entity;
use Doctrine\ORM\EntityRepository;

class PageRepository extends EntityRepository
{
    /**
     * @return Pages
     */
    public function getRandomPage()
    {
        $em = $this->getEntityManager();
        $max = $em->createQuery('SELECT MAX(p.id) FROM AppBundle:Pages p')
            ->getSingleScalarResult();
        $page = $em->createQuery('SELECT p FROM AppBundle:Pages p WHERE p.id >= :rand ORDER BY p.id ASC')
            ->setParameter('rand', rand(0, $max))
            ->setMaxResults(1)
            ->getOneOrNullResult();

        return $page;
    }
}
