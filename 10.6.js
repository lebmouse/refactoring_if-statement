class Customer {
  applyDiscount(aNumber) {
    if (!this.discountRate) return aNumber;
    else {
      console.assert(this.discountRate >= 0);
      return aNumber - this.discountRate * aNumber;
    }
  }
  set discountRate(aNumber) {
    console.assert(null === aNumber || aNumber >= 0);
    this._discountRate = aNumber;
  }
}
