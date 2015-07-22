<?php

namespace AppBundle\Parser;

class DataContainer
{
    /**
     * @var object|array
     */
    private $dataPiece;
    /**
     * @var array
     */
    private $virtualProperties = array();

    /**
     * @param object|array $dataPiece
     */
    public function __construct($dataPiece)
    {
        $this->dataPiece = $dataPiece;
    }

    /**
     * @param string $key
     * @param null|string $default
     * @throws \Exception
     * @return mixed
     */
    public function get($key, $default = null)
    {
        if ($this->dataPiece === null) {
            return $default;
        }
        if (is_object($this->dataPiece)) {
            $value = $this->readPropertySecure($key);
            if (!$value) {
                if (array_key_exists($key, $this->virtualProperties)) {
                    return $this->virtualProperties[$key];
                }
                return $default;
            }
            return $value;
        } elseif (is_array($this->dataPiece)) {
            if (!array_key_exists($key, $this->dataPiece)) {
                return $default;
            }
            return $this->dataPiece[$key];
        } else {
            throw new \Exception('Trying to get property from a scalar variable');
        }
    }

    /**
     * @param string $key
     * @param mixed|null $default
     * @return mixed
     * @throws \Exception
     */
    public function getJsonDecoded($key, $default = null)
    {
        $data = $this->get($key, $default);
        if (!$data || !is_string($data)) {
            return $data;
        }
        $decoded = @json_decode($data, true);
        return $decoded ? $decoded : $default;
    }

    /**
     * @param string $key
     * @param null $default
     * @return DataContainer
     */
    public function getJsonDecodedContainer($key, $default = null)
    {
        return new DataContainer($this->getJsonDecoded($key, $default));
    }

    /**
     * @param string $name
     * @return mixed|null
     */
    private function readPropertySecure($name)
    {
        if (property_exists($this->dataPiece, $name)) {
            return $this->dataPiece->$name;
        }
        try {
            if (method_exists($this->dataPiece, '__get')) {
                return $this->dataPiece->__get($name);
            }
        } catch (\Exception $e) {
            return null;
        }
        return null;
    }

    /**
     * @param string $key
     * @param array|string|object $value
     * @throws \Exception
     */
    public function set($key, $value)
    {
        $this->__set($key, $value);
    }

    /**
     * @param $key
     * @return null|mixed
     */
    public function __get($key)
    {
        return $this->get($key);
    }

    /**
     * @param string $name
     * @param mixed $value
     * @throws \Exception
     */
    public function __set($name, $value)
    {
        if (is_object($this->dataPiece)) {
            if ($this->offsetExists($name)) {
                $this->dataPiece->$name = $value;
            } else {
                $this->virtualProperties[$name] = $value;
            }
        } elseif (is_array($this->dataPiece)) {
            $this->dataPiece[$name] = $value;
        } else {
            throw new \Exception('Cannot set property to a scalar value');
        }
    }

    /**
     * (PHP 5 &gt;= 5.0.0)<br/>
     * Whether a offset exists
     * @link http://php.net/manual/en/arrayaccess.offsetexists.php
     * @param mixed $offset <p>
     * An offset to check for.
     * </p>
     * @return boolean true on success or false on failure.
     * </p>
     * <p>
     * The return value will be casted to boolean if non-boolean was returned.
     */
    public function offsetExists($offset)
    {
        if (is_object($this->dataPiece)) {
            return property_exists($this->dataPiece, $offset);
        } elseif (is_array($this->dataPiece)) {
            return isset($this->dataPiece[$offset]);
        }
        return false;
    }

    /**
     * (PHP 5 &gt;= 5.0.0)<br/>
     * Offset to retrieve
     * @link http://php.net/manual/en/arrayaccess.offsetget.php
     * @param mixed $offset <p>
     * The offset to retrieve.
     * </p>
     * @return mixed Can return all value types.
     */
    public function offsetGet($offset)
    {
        return $this->get($offset);
    }

    /**
     * (PHP 5 &gt;= 5.0.0)<br/>
     * Offset to set
     * @link http://php.net/manual/en/arrayaccess.offsetset.php
     * @param mixed $offset <p>
     * The offset to assign the value to.
     * </p>
     * @param mixed $value <p>
     * The value to set.
     * </p>
     * @return void
     */
    public function offsetSet($offset, $value)
    {
        $this->__set($offset, $value);
    }

    /**
     * (PHP 5 &gt;= 5.0.0)<br/>
     * Offset to unset
     * @link http://php.net/manual/en/arrayaccess.offsetunset.php
     * @param mixed $offset <p>
     * The offset to unset.
     * </p>
     * @return void
     */
    public function offsetUnset($offset)
    {
        if (!$this->offsetExists($offset)) {
            return;
        }
        if (is_array($this->dataPiece)) {
            unset($this->dataPiece[$offset]);
            return;
        }
        if (is_object($this->dataPiece)) {
            $this->dataPiece->$offset = null;
            return;
        }
        $this->dataPiece = null;
    }

    /**
     * @return array|object
     */
    public function getDataPiece()
    {
        return $this->dataPiece;
    }
} 