class Item {
  constructor(name, sellIn, quality) {
    this.name = name;
    this.sellIn = sellIn;
    this.quality = quality;
  }
}

class Shop {
  constructor(items = []) {
    this.items = items;
  }
  updateQuality() {
    this.items.forEach((item) => {
      if (item.name == "Sulfuras, Hand of Ragnaros") {
        return;
      }
      item.sellIn = item.sellIn - 1;

      if (item.name == "Aged Brie") {
        this.calculateNewAgedBrieQuality(item);
        return;
      }

      if (item.name == "Backstage passes to a TAFKAL80ETC concert") {
        this.calculateNewBackstagePassQuality(item);
        return
      }

      this.calculateNewNormalItemQuality(item);
    });
  }

  calculateNewNormalItemQuality(item) {
    item.quality = Math.max(item.sellIn < 0 ? item.quality - 2 : item.quality - 1, 0);
  }

  calculateNewBackstagePassQuality(item) {
    item.quality = item.quality + 1;
    if (item.sellIn < 10) {
      item.quality = item.quality + 1;
    }
    if (item.sellIn < 5) {
      item.quality = item.quality + 1;
    }
    if (item.sellIn < 0) {
      item.quality = item.quality - item.quality;
    }
    item.quality = Math.min(item.quality, 50)
  }

  calculateNewAgedBrieQuality(item) {
    item.quality = Math.min(item.sellIn < 0 ? item.quality + 2 : item.quality + 1, 50);
  }
}

module.exports = {
  Item,
  Shop,
};
