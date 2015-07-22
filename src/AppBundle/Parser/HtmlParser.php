<?php

namespace AppBundle\Parser;

use DOMXPath;

class HtmlParser implements Parser
{

    /**
     * @param string $rawBody
     * @return array
     */
    public function parse($rawBody)
    {
        $result = array();

        $htmlContainer = new XPathContainer($rawBody);

        $result['gallery'] = $htmlContainer->getSingleValue(
            '//meta[@id="_bootstrap-room_options"]/@content'
        );
        $result['gallery'] = @json_decode($result['gallery'], true);
        if (!empty($result['gallery']) && !empty($result['gallery']['photoData'])) {
            $result['gallery'] = $result['gallery']['photoData'];
        } else {
            $result['gallery'] = $htmlContainer->getValues(
                '//div[@id="photo-gallery"]//img/@src'
            );
        }

        $result['user-about-title'] = $htmlContainer->getSingleValue(
            '//div[@id="host-profile"]//h4'
        );

        $result['priceNight'] = $htmlContainer->getSingleValue(
            '//div[@id="price_amount"]'
        );

        $result['user-about-summary'] = $htmlContainer->getSingleValue(
            '//div[@id="host-profile"]//div[contains(@class, "expandable-content")]/p'
        );

        $result['urser-about-statistics'] = $htmlContainer->getSingleHtmlValue(
            '//div[@id="host-profile"]//div[contains(@class, "row-condensed")]'
        );

        $result['page-title'] = $htmlContainer->getSingleValue("//title");
        $result['emotional-img'] = $htmlContainer->getSingleValue('//div[@id="photos"]/img/@src', '');
        $result['emotional-img'] = str_replace('size=large', 'size=xx_large', $result['emotional-img']);
        $result['user-img'] = $htmlContainer->getSingleValueEscaped(
            '//div[@id="summary"]//div[@class="media-photo-badge"]/a/img/@src'
        );
        $result['user-name'] = $htmlContainer->getSingleValue(
            '//div[contains(@class, "text-center")]/a[@href="#host-profile"]'
        );
        if (!$result['user-name']) {
            $result['user-name'] = $htmlContainer->getSingleValue(
                '//div[@id="summary"]//div[@class="media-photo-badge"]/a/img/@title'
            );
        }
        $result['title'] = $htmlContainer->getSingleValue('//div[@id="summary"]//h1[@id="listing_name"]');
        $result['address'] = $htmlContainer->getSingleValue('//div[@id="summary"]//div[@id="display-address"]/a');
        $result['room-detail-icons'] = $htmlContainer->getHtmlValuesAsArray(
            '//div[@id="summary"]//div[contains(@class,"row-condensed")]//i[contains(@class, "icon")]'
        );
        $result['room-detail-titles'] = $htmlContainer->getValues(
            '//div[@id="summary"]//div[contains(@class,"row-condensed")]//div[contains(@class, "col-sm-3") and not(i)]'
        );
        $result['description-title'] = $htmlContainer->getSingleValue('//div[@id="details"]//div[@id="details-column"]//h4');
        $result['description-summary'] = $htmlContainer->getSingleValue('//div[@id="details-column"]/div/p[not(@*)]');

        $result['description-house-rules'] = $htmlContainer->getSingleHtmlValue(
            '//div[@id="details-column"]/div/div[contains(@class, "row") and not(contains(@class, "description")) and not(contains(@class, "amenities")) and not(@id="photo-gallery") and div[contains(@class, "expandable")]]'
        );

        $result['description-space'] = $htmlContainer->getSingleHtmlValue(
            '//div[@id="details-column"]/div/div[contains(@class, "row")]'
        );
        $result['description-amenities'] = $htmlContainer->getSingleHtmlValue(
            '//div[@id="details-column"]/div/div[contains(@class, "amenities")]'
        );
        $result['description-longtext'] = $htmlContainer->getSingleHtmlValue(
            '//div[@id="details-column"]/div/div[contains(@class, "description")]'
        );

        $result['description-safety'] = $htmlContainer->getSingleHtmlValue(
            '//div[@id="details-column"]/div/div[contains(@class, "js-p3-safety-features-section")]'
        );


        return $result;
    }


} 