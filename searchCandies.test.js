const searchCandies = require("./searchCandies");

describe("searchCandies", () => {
  it('returns Mars and Maltesers when searching for "ma"', () => {
    expect(searchCandies("ma", 10)).toEqual(["Maltesers", "Mars"]);
  });
});
