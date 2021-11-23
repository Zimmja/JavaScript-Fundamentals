const searchCandies = require("./searchCandies");

describe("searchCandies", () => {
  it('returns Mars and Maltesers when searching for "m"', () => {
    expect(searchCandies("m", 10)).toBe(["Maltesers", "Mars"]);
  });
});
