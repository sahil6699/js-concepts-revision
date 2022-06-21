function interest(principal, rate = 3.5, year) {
  //we can give defalut value like this
  //   rate = rate || 3.5;
  //   year = year || 5;
  return ((principal * rate) / 100) * year;
}

console.log(interest(10000, undefined, 5));
//if we are giving somethins defalut parameter we have to give the parameters after that also the defalut value
