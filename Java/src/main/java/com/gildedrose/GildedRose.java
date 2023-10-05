package com.gildedrose;

class GildedRose {
    Item[] items;

    public GildedRose(Item[] items) {
        this.items = items;
    }

    public void updateItems() {
        for (Item item : items) {
            if (item.name.equals("Sulfuras, Hand of Ragnaros")) {
            } else {
                item.sellIn--;

                if (item.name.equals("Aged Brie") || item.name.equals("Backstage passes to a TAFKAL80ETC concert")) {
                    item.quality = Math.min(50, item.quality + 1);

                    if (item.name.equals("Backstage passes to a TAFKAL80ETC concert")) {
                        if (item.sellIn < 10) {
                            if (item.quality < 50) {
                                item.quality++;
                            }
                        }
                        if (item.sellIn < 5) {
                            if (item.quality < 50) {
                                item.quality++;
                            }
                        }
                        if (item.sellIn < 0) {
                            item.quality = 0;
                        }
                    } else {
                        if (item.sellIn < 0) {
                            if (item.quality < 50) {
                                item.quality++;
                            }
                        }
                    }


                } else {
                    item.quality = Math.max(0, item.quality - 1);
                    if (item.sellIn < 0) {
                        item.quality = Math.max(0, item.quality - 1);
                    }
                }
            }
        }
    }
}
