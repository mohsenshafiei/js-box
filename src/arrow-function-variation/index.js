const a = (...args) => [...args];
const b = () => 3;
const c = x => 3;
const d = (...x) => 3;
const e = (x, y) => 3;
const f = x => { try { false;} catch(e) { true; }};
const g = x => { return 3; }
const h = x => ({ y: x});

console.log(a(1, 2, 3, 4, 5));
console.log(b());
console.log(c(3));
console.log(d([1, 2, 3]));
console.log(e(2, 3));
console.log(f(3));
console.log(g(3));
console.log(h(3));
