<?php

namespace AppBundle\Parser;

class SecureDataContainer
{
    /**
     * @var \DOMXPath
     */
    private $xpath;

    /**
     * @var \DOMDocument
     */
    private $dom;

    public function __construct($htmlDocument)
    {
        $this->dom = new \DOMDocument;
        libxml_use_internal_errors(true);
        $this->dom->loadHTML($htmlDocument);
        $this->xpath = new \DOMXPath($this->dom);
    }

    /**
     * @param string $xPathQuery
     * @param null|mixed $default
     * @return null|string
     */
    public function getSingleValue($xPathQuery, $default = null)
    {
        $value = $default;
        if ($node = $this->getNode($xPathQuery)) {
            $value = $node->nodeValue;
        }

        return $this->prepareValue($value);
    }

    /**
     * @param string|mixed $value
     * @return mixed|string
     */
    private function prepareValue($value)
    {
        $value = preg_replace("#\r|\n#", "", $value);
        $value = trim($value);

        return $value;
    }

    public function getSingleValueEscaped($xPathQuery, $default = null)
    {
        $value = $this->getSingleValue($xPathQuery, $default);
        if ($value == $default) {
            return $default;
        }

        return htmlspecialchars($value);
    }

    /**
     * @param $xpathQuery
     * @return \DOMNode|null
     */
    public function getNode($xpathQuery)
    {
        if ($nodes = $this->getNodes($xpathQuery)) {
            return $nodes->item(0);
        }

        return null;
    }

    public function getSingleHtmlValue($xPathQuery, $default = null)
    {
        if (!$node = $this->getNode($xPathQuery)) {
            return $default;
        }

        return $this->dom->saveHTML($node);
    }

    /**
     * @param $xPathQuery
     * @return \DOMNodeList|null
     */
    public function getNodes($xPathQuery)
    {
        $nlist = $this->xpath->query($xPathQuery);
        if ($nlist && $nlist->length) {
            return $nlist;
        }
        return null;
    }

    /**
     * @param $xPathQuery
     * @param null|mixed $default
     * @return null|string
     */
    public function getHtmlValuesAsArray($xPathQuery, $default = null)
    {
        if (!$nodes = $this->getNodes($xPathQuery)) {
            return $default;
        }

        $html = array();
        foreach ($nodes as $node) {
            $html[] = $this->dom->saveHTML($node);
        }

        return $html;
    }

    /**
     * @param $xPathQuery
     * @param null|mixed $default
     * @return null|string
     */
    public function getHtmlValuesAsString($xPathQuery, $default = null)
    {
        $value = $this->getHtmlValuesAsArray($xPathQuery, $default);
        if ($value == $default) {
            return $default;
        }

        return implode('', $value);
    }

    /**
     * @param $xPathQuery
     * @param null|mixed $default
     * @return array|null
     */
    public function getValues($xPathQuery, $default = null)
    {
        if (!$nodes = $this->getNodes($xPathQuery)) {
            return $default;
        }

        $result = array();
        foreach ($nodes as $node) {
            $result[] = $this->prepareValue($node->nodeValue);
        }

        return $result;
    }

} 