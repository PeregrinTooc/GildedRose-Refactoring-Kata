package com.gildedrose;

public class ConjuredItem extends AbstractItem {


    public ConjuredItem(String name, int sellIn, int quality) {
        super(name, sellIn, quality);
    }

    @Override
    public String toString() {
        return this.item.toString();
    }

    @Override
    public void update() {
        item.sellIn--;
        item.quality = Math.max(0, item.quality - (item.sellIn < 0 ? 4 : 2));
    }
}
