const summation = (function(...args) {
  return function (...args) {
    return recur(args, v => v);
  };

  function recur([sum, ...args], cont) {
    if (args.length === 0) return cont(sum);
    return recur(args, function(v) {
      return cont(sum + v);
    });
  };
})();

console.log(summation(3, 4, 5, 6, 7, 8, 9));
