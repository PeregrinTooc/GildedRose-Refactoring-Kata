package com.gildedrose;

public abstract class AbstractItem {
    public final Item item;

    AbstractItem(String name, int sellIn, int quality) {
        this.item = new Item(name, sellIn, quality);
    }

    @Override
    public String toString() {
        return this.item.toString();
    }

    public abstract void update();
}
