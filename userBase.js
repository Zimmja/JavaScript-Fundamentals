class UserBase {
  constructor(users) {
    this.users = users;
  }

  count = () => this.users.length;

  getNames = () => this.users.map((user) => user.getName());

  getIntroductions = () => this.users.map((user) => user.getIntroduction());
}

module.exports = UserBase;
