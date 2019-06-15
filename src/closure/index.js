// all of them are puere
// referential transparency is something that matters in functional programming
/*
* referential transparency
* when we have referential transparency you can change the result with the real function
* in your programm and nothing should change in your system
*/
function foo(x , y) {
  return function () {
    return x + y;
  };
}

function bar(x , y) {
  const sum = x + y;
  return function () {
    return sum;
  };
}

function baz(x , y) {
  let sum;
  return function () {
    if (sum === undefined) {
      sum = x + y;
    }
    return sum;
  };
}


const x = foo(3, 4);
const y = bar(3, 4);
const z = baz(3, 4);

console.log(x());
console.log(y());
console.log(z());
