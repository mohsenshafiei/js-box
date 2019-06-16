function summation(x, y, ...args) {
  if (args.length === 0) return x + y;
  return x + summation(y, ...args);
}

function multiplication(x, y, ...args) {
  if (args.length === 0) return x * y
  return x * multiplication(y, ...args);
}

function multiplication2(x, y, ...args) {
  if (y === undefined) return x;
  return multiplication(x * y, ...args);
}

const sum = summation(1,2,2,3,3,4,5);
const mult = multiplication(1,2,2);
const mult2 = multiplication(1,2,2);

console.log(sum);
console.log(mult);
console.log(mult2);



// PTC (proper tail call)
function summmationRecur(sum, arg, ...args) {
  sum += arg;
  if (args.length === 0) return sum;
  return summmationRecur(sum, ...args);
}

const sumRecur = summmationRecur(1,2,2,3,3,4,5);
console.log(sumRecur);
