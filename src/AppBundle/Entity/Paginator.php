<?php

namespace AppBundle\Entity;

use Doctrine\ORM\Query;
use Doctrine\ORM\QueryBuilder;
use Doctrine\ORM\Tools\Pagination\Paginator as DoctrinePaginator;

class Paginator
{
    /**
     * @var Query|QueryBuilder
     */
    private $query;

    /**
     * @var int
     */
    private $currentPage;

    /**
     * @var DoctrinePaginator
     */
    private $paginator;

    /**
     * @var int
     */
    private $totalCount;

    /**
     * @var int
     */
    private $limit;

    /**
     * @var int
     */
    private $pagesCount;

    /**
     * @var string
     */
    private $url;

    /**
     * @param Query|QueryBuilder $query
     * @param int $limit
     * @param int $currentPage
     */
    public function __construct($query, $limit, $currentPage = 1)
    {
        $this->paginator = new DoctrinePaginator($query);
        $this->totalCount = $this->paginator->count();
        $this->limit = $limit;
        $this->pagesCount = (int)ceil($this->totalCount / $this->limit);
        if ($this->pagesCount > 0 && $currentPage > $this->pagesCount) {
            $currentPage = $this->pagesCount;
        }
        $this->currentPage = $currentPage;

        $this->paginator
            ->getQuery()
            ->setFirstResult($this->limit * ($this->currentPage - 1))
            ->setMaxResults($this->limit);
        $this->query = $query;
    }

    /**
     * @return int
     */
    public function getCurrentPage()
    {
        return $this->currentPage;
    }

    /**
     * @return int
     */
    public function getLimit()
    {
        return $this->limit;
    }

    /**
     * @return int
     */
    public function getPagesCount()
    {
        return $this->pagesCount;
    }

    /**
     * @return int
     */
    public function getTotalCount()
    {
        return $this->totalCount;
    }

    /**
     * @return DoctrinePaginator
     */
    public function getData()
    {
        return $this->paginator;
    }

    /**
     * @return string
     */
    public function getUrl()
    {
        return $this->url;
    }

    /**
     * @param string $url
     */
    public function setUrl($url)
    {
        $this->url = $url;
    }

    /**
     * @return bool
     */
    public function hasNextPage()
    {
        return $this->pagesCount > $this->currentPage;
    }

    /**
     * @return bool
     */
    public function hasPrevPage()
    {
        return $this->currentPage > 1;
    }

    /**
     * @return int|null
     */
    public function getPrevPage()
    {
        if ($this->hasPrevPage()) {
            return $this->currentPage - 1;
        }
        return null;
    }

    /**
     * @return int|null
     */
    public function getNextPage()
    {
        if ($this->hasNextPage()) {
            return $this->currentPage + 1;
        }
        return null;
    }
} 