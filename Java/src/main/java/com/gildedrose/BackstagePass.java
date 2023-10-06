package com.gildedrose;

public class BackstagePass extends AbstractItem {


    public BackstagePass(String name, int sellIn, int quality) {
        super(name, sellIn, quality);
    }

    @Override
    public void update() {
        item.sellIn--;
        item.quality = Math.min(50, item.quality + calculateQualityOffsetForBackstagePass(item));
    }

    private int calculateQualityOffsetForBackstagePass(Item item) {
        if (item.sellIn < 0) return -item.quality;
        if (item.sellIn < 5) return 3;
        if (item.sellIn < 10) return 2;
        return 1;
    }

}
