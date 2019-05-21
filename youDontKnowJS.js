const PHONE_PRICE = 99.99;
const TAX_RATE = 0.08;
const SPENDING_THRESHOLD = 200;
const ACCESSORY_PRICE = 9.99;

let bank_balance = 303.91;
var phones_bought = 0;
var accessories_bought = 0;
var spent = 0;

// factors in tax to price
let add_tax = (amount) => {
  return amount + amount * TAX_RATE;
};

let buy_phones = () => {
  // while we still have funds
  while (spent <= bank_balance - add_tax(PHONE_PRICE)) {
    spent = spent + add_tax(PHONE_PRICE);
    phones_bought++;
    let accessory_spent = 0;

    // if we can afford an accessory
    if (
      accessory_spent <= SPENDING_THRESHOLD - add_tax(ACCESSORY_PRICE) &&
      spent <= bank_balance - add_tax(ACCESSORY_PRICE)
    ) {
      accessory_spent = accessory_spent + add_tax(ACCESSORY_PRICE);
      spent = spent + add_tax(ACCESSORY_PRICE);
      accessories_bought++;
    }
  }
  spent = spent + spent * TAX_RATE;
  bank_balance = bank_balance - spent;
};

// formats any price into $xx.xx
let format_amount = (amount) => {
  return '$' + amount.toFixed(2);
};

buy_phones();
console.log(
  'phones_bought',
  phones_bought,
  'accessories_bought',
  accessories_bought,
  'bank_balance',
  format_amount(bank_balance),
  'spent',
  format_amount(spent)
);

// type of in JavaScript
var a;
typeof a; //undefined
a = 'hello world';
typeof a; //string
a = 42;
typeof a; //number
a = true;
typeof a; //boolean
a = null;
typeof a; //object, weird bug
a = undefined;
typeof a; //undefined
a = { b: 'c' };
typeof a; //object

var obj = {
  a: 'hello world',
  b: 42,
};

// Coercion
var a = '42';
var b = Number(a);
var a = '42';
var b = a * 1; // gives you 42 the number coerces it from a string

// falsy
// these are the only falsy values:
// false, 0, '', NaN, null, undefined
// these are all truthy
// "hello", 42, true, [], {}, function foo()

var a = '42';
var b = 42;
a == b; // true because of coercion
a === b; // false, no coercion
