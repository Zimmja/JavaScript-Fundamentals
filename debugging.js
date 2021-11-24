class ShoppingBasket {
  constructor() {
    this.discount = 0;
  }

  applyDiscount(discount, price) {
    discount = this.discount;
    return price - discount;
  }

  getTotalPrice() {
    let totalPrice = 0;
    this.candies.forEach((candy) => {
      totalPrice += candy.getPrice();
    });

    return applyDiscount(this.discount, totalPrice);
  }
}

const basket = new ShoppingBasket();
console.log(basket);
