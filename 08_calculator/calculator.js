const add = function(a,b) {
	return a + b
};

const subtract = function(a,b) {
	return a-b
};

const sum = function(array) {
	return array.reduce((initial, currentItem)=>
    initial + currentItem,0)
};

const multiply = function(array) {
  return array.reduce((initial, currentItem)=>
    initial * currentItem,1);

};

const power = function(a,b) {
  return a ** b
	
};

const factorial = function(n) {
	let result = 1;
  for (let i =1; i <=n; i++){
    result *=i;
  }
  return result;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
