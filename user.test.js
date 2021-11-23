const User = require("./user");

describe("User.getName", () => {
  it('returns the name of the user', () => {
    const testUser = new User("Sigita");
    expect(testUser.getName()).toBe("Sigita");
  });
});

describe("User.getIntroduction", () => {
  it('returns the user introduction', () => {
    const testUser = new User("Matt");
    expect(testUser.getIntroduction()).toBe("Hi, my name is Matt");
  });
});