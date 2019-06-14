function not(fn) {
  return function negate(...args) {
    return !fn(...args);
  }
}

function when(fn) {
  return function(predicate) {
    return function(...args) {
      if (predicate(...args)) {
        return fn(...args);
      }
    };
  };
}

const output = console.log.bind(console);
const printIf = when(output);

function isOdd (value) {
  return value % 2 === 1;
}

const isEven = not(isOdd);

console.log(isEven(2)); // true
console.log(isEven(3)); // false
console.log(isEven(4)); // true
console.log(isEven(7)); // false
printIf(isEven)(2);
