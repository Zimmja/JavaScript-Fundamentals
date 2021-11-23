const User = require("./user");
const UserBase = require("./userBase");

const userUmer = new User("Umer");
const userJosh = new User("Josh");
const userOllie = new User("Ollie");
const testUserBase = new UserBase([userUmer, userJosh, userOllie]);

describe("UserBase.count", () => {
  it("returns the count of users int the UserBase", () => {
    expect(testUserBase.count()).toBe(3);
  });
});

describe("UserBase.getNames", () => {
  it("returns the names of users int the UserBase", () => {
    expect(testUserBase.getNames()).toEqual(["Umer", "Josh", "Ollie"]);
  });
});

describe("UserBase.getIntroductions", () => {
  it("returns the introductions of users int the UserBase", () => {
    expect(testUserBase.getIntroductions()).toEqual([
      "Hi, my name is Umer",
      "Hi, my name is Josh",
      "Hi, my name is Ollie",
    ]);
  });
});
