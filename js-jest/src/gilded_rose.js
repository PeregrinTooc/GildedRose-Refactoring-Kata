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
        item.quality = Math.min(this.calculateNewAgedBrieQuality(item), 50);
        return;
      }

      if (item.name == "Backstage passes to a TAFKAL80ETC concert") {
      }

      if (item.name != "Backstage passes to a TAFKAL80ETC concert") {
        if (item.quality > 0) {
          item.quality = item.quality - 1;
        }
      } else {
        if (item.quality < 50) {
          item.quality = item.quality + 1;
          if (item.name == "Backstage passes to a TAFKAL80ETC concert") {
            if (item.sellIn < 10) {
              if (item.quality < 50) {
                item.quality = item.quality + 1;
              }
            }
            if (item.sellIn < 5) {
              if (item.quality < 50) {
                item.quality = item.quality + 1;
              }
            }
          }
        }
      }
      if (item.sellIn < 0) {
        if (item.name != "Backstage passes to a TAFKAL80ETC concert") {
          if (item.quality > 0) {
            item.quality = item.quality - 1;
          }
        } else {
          item.quality = item.quality - item.quality;
        }
      }
    });
  }

  calculateNewAgedBrieQuality(item) {
    return item.sellIn < 0 ? item.quality + 2 : item.quality + 1;
  }
}

module.exports = {
  Item,
  Shop,
};
