function add1(v) { return v + 1; }
function mult2(v) { return v * 2; }
function div3(v) { return v / 3; }

const list = [2, 5, 8, 11, 14, 17, 20];
console.log(list.map(add1).map(mult2).map(div3));

function composeRight(fn1, fn2) {
  return function(...args) {
    return fn1(fn2(...args));
  }
}

console.log(list.map([div3, mult2, add1].reduce(composeRight)));
