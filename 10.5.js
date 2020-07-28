class Site {
  //...
  get customer() {
    return this._customer === "미확인 고객"
      ? new UnkownCustomer()
      : this._customer;
  }
}

class Customer {
  get name() {
    return "거주자";
  }
  get billingPlan() {}
  get paymentHistory() {}
  get isUnknown() {
    return false;
  }
}

class UnkownCustomer {
  get isUnknown() {
    return false;
  }
}

function isUnkown(arg) {
  if (!(arg instanceof Customer || arg instanceof UnkownCustomer))
    throw new Error(`잘못된 값과 비교 <${arg}>`);

  return arg.isUnknown;
}

// 1
const aCustomer = new Site().customer;
//.. 수 많은 코드
const customerName = aCustomer.name;

// 2
const plan = isUnkown(aCustomer)
  ? registry.billingPlan.basic
  : aCustomer.billingPlan;

// 3
if (!isUnkown(aCustomer)) aCustomer.billingPlan = newPlan;

const weeksDelinquent = isUnkown(aCustomer)
  ? 0
  : aCustomer.paymentHistory.weeksDelinquent;
