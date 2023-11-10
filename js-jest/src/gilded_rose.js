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
      if (item.name === "Sulfuras, Hand of Ragnaros") {
        return;
      }
      item.sellIn = item.sellIn - 1;

      if (item.name === "Aged Brie") {
        this.calculateNewAgedBrieQuality(item);
        return;
      }

      if (item.name === "Backstage passes to a TAFKAL80ETC concert") {
        this.calculateNewBackstagePassQuality(item);
        return
      }
      if(item.name.startsWith("Conjured")){
        this.calculateNewConjuredQuality(item);
        return;
      }

      this.calculateNewNormalItemQuality(item);
    });
  }

  calculateNewConjuredQuality(item) {
    this.calculateNewNormalItemQuality(item);
    this.calculateNewNormalItemQuality(item);
  }
  calculateNewNormalItemQuality(item) {
    item.quality = Math.max(item.sellIn < 0 ? item.quality - 2 : item.quality - 1, 0);
  }

  calculateNewBackstagePassQuality(item) {
    item.quality = Math.min(item.quality + calculateOffset(), 50)
    function calculateOffset() {
      switch (true) {
        case (item.sellIn < 0):
          return (item.quality * -1);
        case (item.sellIn < 5):
          return 3;
        case (item.sellIn < 10):
          return 2;
        default:
          return 1;
      }
    }
  }

  calculateNewAgedBrieQuality(item) {
    item.quality = Math.min(item.sellIn < 0 ? item.quality + 2 : item.quality + 1, 50);
  }
}

module.exports = {
  Item,
  Shop,
};
