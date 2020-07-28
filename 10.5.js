class Site {
  //...
  get customer() {
    return this._customer;
  }
}

class Customer {
  get name() {}
  get billingPlan() {}
  get paymentHistory() {}
  get isUnknow() { return false};
}

class UnkownCustomer {
  get isUnknow() { return false};
}

function isUnkown(arg){
  if(!((arg instanceof Customer) || (arg === "미확인 고객")))
    throw new Error(`잘못된 값과 비교 <${arg}>`);
  
  return (arg === "미확인 고객")
}

// 1
const aCustomer = site.customer;
//.. 수 많은 코드
let customerName;
if (aCustomer === "미확인 고객") customerName = "거주자";
else customerName = aCustomer.name;

// 2
const plan = (aCustomer === "미확인 고객") ?
 registry.billingPlan.basic : aCustomer.billingPlan;

// 3
if(aCustomer !=== "미확인 고객") aCustomer.billingPlan = newPlan;

const weeksDelinquent = (aCustomer === "미확인고객")?
0 : aCustomer.paymentHistory.weeksDelinquent;