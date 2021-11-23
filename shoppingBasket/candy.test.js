const Candy = require("./candy");

const testCandy = new Candy("Mars", 4.99);

describe("Candy.getName", () => {
  it('returns the name of the candy', () => {
    expect(testCandy.getName()).toBe("Mars");
  });
});

describe("Candy.getPrice", () => {
  it('returns the price of the candy', () => {
    expect(testCandy.getPrice()).toBe(4.99);
  });
});