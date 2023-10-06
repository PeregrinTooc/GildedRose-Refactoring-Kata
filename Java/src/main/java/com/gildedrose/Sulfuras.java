package com.gildedrose;

public class Sulfuras extends AbstractItem {


    public Sulfuras(int sellIn, int quality) {
        super("Sulfuras, Hand of Ragnaros", sellIn, quality);
    }

    @Override
    public String toString() {
        return this.item.toString();
    }

    @Override
    public void update() {
        //no changes, it's the legendary Sulfuras
        return;
    }
}
