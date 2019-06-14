function pipe(fn1, fn2) {
  return function piped(...args) {
    return fn1(fn2(...args));
  }
}

const increment = (x) => x + 1;
const double = (x) => x * 2;

const f = pipe(increment, double);
const g = pipe(double, increment);

console.log(f(3));
console.log(g(3));
