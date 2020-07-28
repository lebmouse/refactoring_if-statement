class Customer {
  applyDiscount(aNumber) {
    return this.discount ? aNumber - this.discountRate * aNumber : aNumber;
  }
}
