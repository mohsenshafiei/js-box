function pipe2(fn1, fn2) {
  return function piped(...args) {
    return fn1(fn2(...args));
  }
}

function pipe(...fns) {
  return function(result) {
    for (let i = 0 ; i < fns.length ; i++) {
      result = fns[i](result);
    }
    return result;
  }
}

const increment = (x) => x + 1;
const decrement = (x) => x + 1;
const double = (x) => x * 2;
const half = (x) => x / 2;

const f = pipe2(increment, double);
const g = pipe2(double, increment);
const x = pipe(double, increment, half, decrement);

console.log(f(3));
console.log(g(3));
console.log(x(3));
