package com.gildedrose;

public class AgedBrie extends AbstractItem {


    public AgedBrie(int sellIn, int quality) {
        super("Aged Brie", sellIn, quality);
    }

    @Override
    public String toString() {
        return this.item.toString();
    }

    @Override
    public void update() {
        item.sellIn--;
        item.quality = Math.min(50, item.quality + (item.sellIn < 0 ? 2 : 1));
    }
}
