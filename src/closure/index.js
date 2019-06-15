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

// This is some adhoc form of memoization
// function get input and save output for that input
// that cache is not observable in other parts of the system
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

// the rule of closure is to get a function and give it a memory
// NOTE: this is not pure - please make sure that to use closure in the right way
function bax() {
  var id = 0;
  return function () {
    return id++;
  }
}

const t = bax();
t(); // 0
t(); // 1
t(); // 2
// so this is not pure and we don't have referential transparency
