package com.gildedrose;

class GildedRose {
    AbstractItem[] items;

    public GildedRose(AbstractItem[] items) {
        this.items = items;
    }

    public void updateItems() {
        for (AbstractItem item : items) {
            item.update();
        }
    }


}
