<?php

namespace AppBundle\Parser;

use GuzzleHttp\Client;

class RemoteDataCollector implements DataCollector
{
    private $url;

    public function __construct($url)
    {
        $this->url = $url;
    }

    /**
     * @return string
     * @throws \Exception
     */
    public function collect()
    {
        $client = new Client([
            'timeout' => 4.0,
        ]);

        $response = $client->get(
            $this->url,
            array(
                'headers' => array(
                    'Accept' => 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8',
                    'User-Agent' => 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_10_2) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/43.0.2357.130 Safari/537.36 FirePHP/0.7.4',
                    'Connection' => 'keep-alive',
                    'Cache-Control' => 'max-age=0',
                    'Accept-Language' => 'en-GB,en;q=0.8,en-US;q=0.6,en;q=0.4,de;q=0.2,nl;q=0.2',
                    'Accept-Encoding' => 'gzip, deflate, sdch'
                )
            )
        );
        if ($response->getStatusCode() != 200) {
            throw new \Exception($response->getBody());
        }

        return $response->getBody()->__toString();
    }

} 
