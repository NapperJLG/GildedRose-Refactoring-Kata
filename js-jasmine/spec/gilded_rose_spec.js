var {Shop, Item} = require('../src/gilded_rose.js');
describe("Gilded Rose", function() {

  it("should foo", function() {
    const gildedRose = new Shop([ new Item("foo", 0, 0) ]);
    const items = gildedRose.updateQuality();
    expect(items[0].name).toEqual('foo');
  });

  it('should lower the sellIn value by one', function() {
    const gildedRose = new Shop([ new Item("foo", 10, 10) ]);
    const items = gildedRose.updateQuality();
    expect(items[0].sellIn).toEqual(9);
  });

  it('should lower the quality value by one', function() {
    const gildedRose = new Shop([ new Item("foo", 10, 10) ]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).toEqual(9);
  });

  it('should lower the quality twice as fast when the sell by date passes', function(){
    const gildedRose = new Shop([ new Item("foo", 0, 10) ]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).toEqual(8);
  });

  it('can never make the quality less than zero', function(){
    const gildedRose = new Shop([ new Item("foo", 0, 0) ]);
    const items = gildedRose.updateQuality();
    expect(items[0].sellIn).toEqual(-1);
    expect(items[0].quality).toEqual(0);
  });

  it('increases the quality of Aged Brie the older it gets', function(){
    const gildedRose = new Shop([ new Item("Aged Brie", 10, 10) ]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).toEqual(11);
  });

  it('can never make the quality of an item more than 50', function(){
    const gildedRose = new Shop([ new Item("Aged Brie", 10, 50) ]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).toEqual(50);
  });

  it('keeps the quality and SellIn of Sulfuras the same', function(){
    const gildedRose = new Shop([ new Item("Sulfuras, Hand of Ragnaros", 10, 50) ]);
    const items = gildedRose.updateQuality();
    expect(items[0].sellIn).toEqual(10);
    expect(items[0].quality).toEqual(50);
  });

  it('increases the quality of backstage passes by 1 when SellIn is more than 10', function(){
    const gildedRose = new Shop([ new Item("Backstage passes to a TAFKAL80ETC concert", 12, 30) ]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).toEqual(31);
  });

  it('increases the quality of backstage passes by 2 when SellIn is less than 10', function() {
    const gildedRose = new Shop([ new Item("Backstage passes to a TAFKAL80ETC concert", 10, 30) ]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).toEqual(32);
  });

  it('increases the quality of backstage passes by 3 when SellIn is less than 5', function() {
    const gildedRose = new Shop([ new Item("Backstage passes to a TAFKAL80ETC concert", 5, 30) ]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).toEqual(33);
  });

  it('reduces the quality of backstage passes to 0 when SellIn is less than 0', function() {
    const gildedRose = new Shop([ new Item("Backstage passes to a TAFKAL80ETC concert", 0, 30) ]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).toEqual(0);
  });





});
