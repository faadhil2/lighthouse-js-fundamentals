let howManyHundreds = function(number){
  let value = number / 100;
  value = value - (value % 1);
  return value;
}

console.log(howManyHundreds(1000));
console.log(howManyHundreds(894));
console.log(howManyHundreds(520));
console.log(howManyHundreds(99));
console.log(howManyHundreds(0));