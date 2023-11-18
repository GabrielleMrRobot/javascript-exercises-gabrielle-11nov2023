const add = function(a,b) {
  return a+b;
	
};

const subtract = function(a,b) {
  return a-b;
	
};

const sum = function(array) {
  let sumNumbers = 0;
  array.forEach(item => { 
    sumNumbers += item;
  });
  return sumNumbers
	
};

const multiply = function(array) {
  let multiplyNumbers = 1;
  array.forEach(item => {
    multiplyNumbers *= item;
  });
  return multiplyNumbers
}

const power = function(a, b) {
    return a**b;	
};

const factorial = function(a) {
  let result = 1;
  let index = 0;
	for(let i = 0; i < a; i++){
    index++;
    result *= index;
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
