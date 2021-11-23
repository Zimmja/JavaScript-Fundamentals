const Basket = require("./basket");

const doubleMars = { getPrice: () => 4.99 };
const doubleSkittles = { getPrice: () => 3.45 };

describe("Basket.addItem", () => {
  it("adds an item to the basket", () => {
    let testBasket = new Basket();

    expect(testBasket.addItem(doubleMars)).toEqual([doubleMars]);
  });
});

describe("Basket.getTotalPrice", () => {
  it("returns 0 when the basket is empty", () => {
    let testBasket = new Basket();
    expect(testBasket.getTotalPrice()).toBe(0);
  });

  it("returns the total price of all candies in the basket", () => {
    let testBasket = new Basket();

    testBasket.addItem(doubleMars);
    expect(testBasket.getTotalPrice()).toBe(4.99);
    testBasket.addItem(doubleSkittles);
    expect(testBasket.getTotalPrice()).toBe(8.44);
    testBasket.addItem(doubleSkittles);
    expect(testBasket.getTotalPrice()).toBe(11.89);
  });
});
