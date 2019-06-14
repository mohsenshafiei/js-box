function compose(fn1, fn2) {
  return function composed(...args) {
    return fn2(fn1(...args));
  }
}

const increment = (x) => x + 1;
const double = (x) => x * 2;

const f = compose(increment, double);
const g = compose(double, increment);

console.log(f(3));
console.log(g(3));
