const fizzbuzz = require("./fizzbuzz");

describe("fizzbuzz", () => {
  it("returns fizz if divisible by 3", () => {
    expect(fizzbuzz(3)).toBe("fizz");
  });
  it("returns buzz if divisible by 5", () => {
    expect(fizzbuzz(5)).toBe("buzz");
  });
  it("returns fizzbuzz if divisible by 5 and 3", () => {
    expect(fizzbuzz(15)).toBe("fizzbuzz");
    expect(fizzbuzz(15)).not.toBe("fizz");
  });
  it("returns a number if not divisible by 5 and 3", () => {
    expect(fizzbuzz(1)).toBe(1);
  });
});
