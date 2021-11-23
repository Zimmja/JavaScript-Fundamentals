
class Basket {
  constructor() {
    this.candies = [];
  };
  
  getTotalPrice = () => {
    if (this.candies.length === 0) {
      return 0;
    } else {
      let candyPrices = this.candies.map(candy => candy.getPrice());
      let summedPrices = candyPrices.reduce((p, c) => p + c);
      return Number(summedPrices.toFixed(2));
    };
  };

  addItem = (candy) => {
    this.candies.push(candy);
    return this.candies;
  };

};

module.exports = Basket;