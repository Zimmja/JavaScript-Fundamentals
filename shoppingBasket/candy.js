
class Candy {
  constructor(name, price) {
    this.name = name
    this.price = price
  };

  getName = () => this.name;

  getPrice = () => this.price;
};

module.exports = Candy;