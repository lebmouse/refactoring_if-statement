class Customer {
  applyDiscount(aNumber) {
    if (!this.discountRate) return aNumber;
    else {
      console.assert(this.discountRate >= 0);
      return aNumber - this.discountRate * aNumber;
    }
  }
}
