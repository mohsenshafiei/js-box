/* trempoline will give us the utility to instead of
* call call call we have call after result if it is function we call and after result if it is function we call
* In this way we don't have call stack anymore
*/

function trempoline(fn) {
  return function trempoline(...args) {
    let result = fn(...args);
    while (typeof result === "function") {
      result = result();
    }
    return result;
  }
};

const summation = trempoline(function f(sum, num, ...nums) {
  sum += num;
  if (nums.length === 0) return sum;
  return function () {
    return f(sum, ...nums);
  }
});


console.log(summation(3, 4, 5, 6, 7, 8, 9));
