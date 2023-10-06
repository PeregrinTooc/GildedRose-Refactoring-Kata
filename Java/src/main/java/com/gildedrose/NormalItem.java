package com.gildedrose;

public class NormalItem extends AbstractItem {


    public NormalItem(String name, int sellIn, int quality) {
        super(name, sellIn, quality);
    }

    @Override
    public String toString() {
        return this.item.toString();
    }

    @Override
    public void update() {
        item.sellIn--;
        item.quality = Math.max(0, item.quality - (item.sellIn < 0 ? 2 : 1));
    }
}
