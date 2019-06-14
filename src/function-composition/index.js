function compose2(fn1, fn2) {
  return function composed(...args) {
    return fn2(fn1(...args));
  }
}

function compose(...fns) {
  return function(result) {
    for (let i = fns.length - 1  ; i >= 0 ; i--) {
      result = fns[i](result);
    }
    return result;
  }
}



const increment = (x) => x + 1;
const decrement = (x) => x + 1;
const double = (x) => x * 2;
const half = (x) => x / 2;

const f = compose2(increment, double);
const g = compose2(double, increment);
const x = compose(decrement, half, increment, double);

console.log(f(3));
console.log(g(3));
console.log(x(3));
