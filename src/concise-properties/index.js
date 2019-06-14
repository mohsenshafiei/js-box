const a = 1;
const b = 2;
const d = "value";

const obj = {
  a,
  b,
  c() { console.log(1) },
  [d]: 42,
  [d+"Fn"](a) { console.log(a) },
  *foo() { },
  *[d+"Gn"]() {}
}

console.log(obj);
obj.c();
obj.valueFn(2);
