class User {
  constructor(name) {
    this.name = name;
  };

  getName = () => {
    return this.name;
  };

  getIntroduction = () => {
    return `Hi, my name is ${this.name}`
  }
};

// console.log(new User("Matt").getName())

module.exports = User;