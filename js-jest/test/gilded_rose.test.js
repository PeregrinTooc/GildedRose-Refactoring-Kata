const { Shop, Item } = require("../src/gilded_rose");

describe("Gilded Rose", function () {
  const anyItem = new Item("Vest of Dexterity +3", 1, 10);
  beforeEach(() => {
    anyItem.quality = 10;
    anyItem.sellIn = 1;
  });

  it("should decrease quality by one for normal items while there sell by date has not passed", function () {
    const gildedRose = new Shop([anyItem]);
    gildedRose.updateQuality();
    expect(gildedRose.items[0].quality).toBe(9);
  });
  it("should decrease quality by two for normal items once there sell by date has passed", function () {
    const gildedRose = new Shop([anyItem]);
    gildedRose.updateQuality();
    gildedRose.updateQuality();
    expect(gildedRose.items[0].quality).toBe(7);
  });

  it("should not decrease quality below zero", function () {
    const gildedRose = new Shop([anyItem]);
    anyItem.quality = 0;
    gildedRose.updateQuality();
    expect(gildedRose.items[0].quality).toBe(0);
  });

  it("should increase quality of Aged Brie by one", function () {
    const agedBrie = new Item("Aged Brie", 1, 10);
    const gildedRose = new Shop([agedBrie]);
    gildedRose.updateQuality();
    expect(gildedRose.items[0].quality).toBe(11);
  });

  it("should not increase quality of Aged Brie above 50", function () {
    const agedBrie = new Item("Aged Brie", 1, 50);
    const gildedRose = new Shop([agedBrie]);
    gildedRose.updateQuality();
    expect(gildedRose.items[0].quality).toBe(50);
  });

  it("should not decrease sellIn of Sulfuras", function () {
    const sulfuras = new Item("Sulfuras, Hand of Ragnaros", 1, 10);
    const gildedRose = new Shop([sulfuras]);
    gildedRose.updateQuality();
    expect(gildedRose.items[0].sellIn).toBe(1);
  });

  it("should not decrease quality of Sulfuras", function () {
    const sulfuras = new Item("Sulfuras, Hand of Ragnaros", 1, 10);
    const gildedRose = new Shop([sulfuras]);
    gildedRose.updateQuality();
    expect(gildedRose.items[0].quality).toBe(10);
  });

  it("should increase quality of Backstage passes by one if sellIn is greater than 10", function () {
    const backstagePasses = new Item(
      "Backstage passes to a TAFKAL80ETC concert",
      11,
      10
    );
    const gildedRose = new Shop([backstagePasses]);
    gildedRose.updateQuality();
    expect(gildedRose.items[0].quality).toBe(11);
  });

  it("should increase quality of Backstage passes by two if sellIn is between 10 and 6", function () {
    const backstagePasses = new Item(
      "Backstage passes to a TAFKAL80ETC concert",
      10,
      10
    );
    const gildedRose = new Shop([backstagePasses]);
    gildedRose.updateQuality();
    expect(gildedRose.items[0].quality).toBe(12);
  });

  it("should increase quality of Backstage passes by three if sellIn is between 5 and 0", function () {
    const backstagePasses = new Item(
      "Backstage passes to a TAFKAL80ETC concert",
      5,
      10
    );
    const gildedRose = new Shop([backstagePasses]);
    gildedRose.updateQuality();
    expect(gildedRose.items[0].quality).toBe(13);
  });

  it("should set quality of Backstage passes to zero if sellIn is 0", function () {
    const backstagePasses = new Item(
      "Backstage passes to a TAFKAL80ETC concert",
      0,
      10
    );
    const gildedRose = new Shop([backstagePasses]);
    gildedRose.updateQuality();
    expect(gildedRose.items[0].quality).toBe(0);
  });
});
