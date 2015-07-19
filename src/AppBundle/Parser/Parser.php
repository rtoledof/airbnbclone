<?php

namespace AppBundle\Parser;

interface Parser {
    /**
     * @param string $rawBody
     * @return array
     */
    public function parse($rawBody);
} 