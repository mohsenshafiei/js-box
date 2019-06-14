Number.prototype[Symbol.iterator] = function* () {
  for (let i = 0 ; i <= this; i++) {
    yield i;
  }
};
console.log([...8]);


Array.prototype[Symbol.iterator] = function* () {
  for (let i = this[0] ; i <= this[1]; i++) {
    yield i;
  }
};
console.log([...[8, 12]]);
