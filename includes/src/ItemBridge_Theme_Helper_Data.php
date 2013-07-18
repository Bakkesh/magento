<?php

/**
 * ItemBridge Theme Default Helper
 *
 * @category    ItemBridge
 * @package     ItemBridge_Theme
 * @copyright   Copyright (c) 2012 InfoStyle (http://infostyle.com.ua)
 * @license     http://themeforest.net/licenses/regular_extended ThemeForest Regular & Extended License
 */

class ItemBridge_Theme_Helper_Data extends Mage_Core_Helper_Abstract
{
    public function getProductClasses($product)
    {
        return " " . ($this->isNewProduct($product) ? 'new-product' : '') . " " . ($this->isSaleProduct($product) ? 'sale-product' : '') . " ";
    }

    public function isNewProduct($product)
    {
        $from = $product->getData('news_from_date');
        $to = $product->getData('news_to_date');
        $now = date("Y-m-d 00:00:00");

        return ($from && $to && $now >= $from && $now <= $to) || ($from && $now >= $from) || ($to && $now <= $to);
    }

    public function isSaleProduct($product)
    {
        return number_format($product->getFinalPrice(), 2) != number_format($product->getPrice(), 2);
    }
}
