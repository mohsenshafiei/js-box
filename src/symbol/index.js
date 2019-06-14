const symbol = Symbol('My symbol');

let info = {
  name: 'Mohsen',
  role: 'Frontend Engineer'
};

info[symbol] = "This is secret!!!";

console.log(info); // {name: "Mohsen", role: "Frontend Engineer", Symbol(My symbol): "This is secret!!!"}
console.log(Object.keys(info)); // ["name", "role"]
console.log(Object.getOwnPropertyNames(info)); // ["name", "role"]
console.log(Object.getOwnPropertySymbols(info)); // [Symbol(My symbol)]

// symbol is used to don't do this anymore
let obj = {
  id: 42,
  __secret: 'Shhhhh this is secret',
}
