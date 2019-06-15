// We call it generalization to specialization
// partial application tells us we just partial pass arguments
// closure will hold informations
// practical use case is for ajax calls
// partial application and currying are really different

/*
* partial application and currying are two different technique for specializing and generalized function.
*/
function add (x, y) {
  return x + y;
}

function partial(fn, ...firstArgs) {
  return function applied(...lastArgs) {
    return fn(...firstArgs, ...lastArgs);
  }
}


const addTo10 = partial(add, 10);

console.log(addTo10(32));

// bind use partial application
const addTo20 = add.bind(null, 20);
console.log(addTo20(40));
