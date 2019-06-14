function increase(fn) {
    return function increased(...args) {
      return fn(...args.map(arg => arg + 1));
    }
}

function spread(fn) {
  return function spreaded(args) {
    return fn(...args);
  }
}

function gather(fn) {
  return function gathered(...args) {
    return fn(args.map(arg => arg));
  }
}

function flip(fn) {
  return function flipped(x, y, ...args) {
    return fn(y, x, ...args);
  }
}

function reverse(fn) {
  return function reversed(...args) {
    return fn(...args.reverse());
  }
}

function f(...args) {
  console.log(args);
}

const g = reverse(f);
g(1, 2, 3, 4, 5);

const h = flip(f);
h(1, 2, 3, 4, 5);

const j = increase(f);
j(1, 2, 3, 4, 5);

const k = spread(f);
k([1,2,3,4,5]);


const l = gather(f);
l(1, 2, 3, 4, 5);
