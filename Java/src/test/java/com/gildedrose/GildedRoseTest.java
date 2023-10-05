package com.gildedrose;

import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.assertEquals;

class GildedRoseTest {

    private Item[] items;
    private GildedRose cut;

    private void ThenTheQualityIs(int expected) {
        assertEquals(expected, cut.items[0].quality);
    }

    private void WhenDaysPass(int numberOfDays) {
        this.cut = new GildedRose(items);
        for (int i = 0; i < numberOfDays; i++)
            cut.updateItems();
    }

    private void givenTheItems(Item... items) {
        this.items = items;
    }

    @Test
    void aNormalItemDegradesInQualityByOneAsLongAsItsSellByDateHasNotPassed() {
        givenTheItems(new Item("Some Item", 10, 20));
        WhenDaysPass(1);
        ThenTheQualityIs(19);
        WhenDaysPass(5);
        ThenTheQualityIs(14);
        WhenDaysPass(4);
        ThenTheQualityIs(10);
    }

    @Test
    void aNormalItemDegradesInQualityByTwoOnceItSellByDateHasPassed() {
        givenTheItems(new Item("Some Item", 0, 20));
        WhenDaysPass(1);
        ThenTheQualityIs(18);
        WhenDaysPass(5);
        ThenTheQualityIs(8);
        WhenDaysPass(4);
        ThenTheQualityIs(0);
    }

    @Test
    void theQualityOfAnItemIsNeverLowerThanZero() {
        givenTheItems(new Item("Some Item", 0, 2));
        WhenDaysPass(1);
        ThenTheQualityIs(0);
        WhenDaysPass(5);
        ThenTheQualityIs(0);
        WhenDaysPass(4);
        ThenTheQualityIs(0);
    }

    @Test
    void theQualityOfAgedBrieIncreasesButNeverExceeds50() {
        givenTheItems(new Item("Aged Brie", 10, 20));
        WhenDaysPass(1);
        ThenTheQualityIs(21);
        WhenDaysPass(5);
        ThenTheQualityIs(26);
        WhenDaysPass(4);
        ThenTheQualityIs(30);
        WhenDaysPass(20);
        ThenTheQualityIs(50);
        WhenDaysPass(1);
        ThenTheQualityIs(50);
    }

    @Test
    void theQualityOfSulfurasIsConstantAnd80() {
        givenTheItems(new Item("Sulfuras, Hand of Ragnaros", 10, 80));
        WhenDaysPass(1);
        ThenTheQualityIs(80);
        WhenDaysPass(5);
        ThenTheQualityIs(80);
        WhenDaysPass(4);
        ThenTheQualityIs(80);
        WhenDaysPass(1);
        ThenTheQualityIs(80);
    }

    @Test
    void theQualityOfBackstagePassesIsSpecial() {
        givenTheItems(new Item("Backstage passes to a TAFKAL80ETC concert", 20, 10));
        WhenDaysPass(1);
        ThenTheQualityIs(11);
        WhenDaysPass(5);
        ThenTheQualityIs(16);
        WhenDaysPass(4);
        ThenTheQualityIs(20);
        WhenDaysPass(1);
        ThenTheQualityIs(22);
        WhenDaysPass(4);
        ThenTheQualityIs(30);
        WhenDaysPass(1);
        ThenTheQualityIs(33);
        WhenDaysPass(4);
        ThenTheQualityIs(45);
        WhenDaysPass(1);
        ThenTheQualityIs(0);
    }

    @Test
    void theQualityOfBackstagePassesIsSpecialButAlsoCappedAt50() {
        givenTheItems(new Item("Backstage passes to a TAFKAL80ETC concert", 20, 40));
        WhenDaysPass(10);
        ThenTheQualityIs(50);
        WhenDaysPass(5);
        ThenTheQualityIs(50);
        WhenDaysPass(5);
        ThenTheQualityIs(50);
        WhenDaysPass(1);
        ThenTheQualityIs(0);
    }


}
