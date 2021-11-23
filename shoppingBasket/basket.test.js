const Basket = require("./basket");
const Candy = require("./candy");

describe("Basket.addItem", () => {
  it('adds an item to the basket', () => {
    let testBasket = new Basket()
    let testCandyMars = new Candy("Mars", 4.99);

    expect(testBasket.addItem(testCandyMars)).toEqual([testCandyMars])
  });
});

describe("Basket.getTotalPrice", () => {
  it('returns 0 when the basket is empty', () => {
    let testBasket = new Basket()
    expect(testBasket.getTotalPrice()).toBe(0)
  });

  it('returns the total price of all candies in the basket', () => {
    let testBasket = new Basket()
    let testCandyMars = new Candy("Mars", 4.99);
    let testCandySkittles = new Candy("Skittles", 3.45);

    testBasket.addItem(testCandyMars);
    expect(testBasket.getTotalPrice()).toBe(4.99);
    testBasket.addItem(testCandySkittles);
    expect(testBasket.getTotalPrice()).toBe(8.44);
    testBasket.addItem(testCandySkittles);
    expect(testBasket.getTotalPrice()).toBe(11.89);
  });
});