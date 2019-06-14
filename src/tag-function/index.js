// actually with this technique we preprocess the string
function foo (strings, ...values) {
  let str = '';
  for (let i = 0 ; i < strings.length ; i++) {
    if (i > 0) str += values[i - 1].toUpperCase();
    str += strings[i];
  }
  return str;
}

const name = 'mohsen';
const msg = foo`Hello ${name}. How are you?`;
console.log(msg);


function rial(strings, ...values) {
  let str = '';
  for (let i = 0 ; i < strings.length ; i++) {
    if (i > 0) str += values[i - 1] + '0 Rials';
    str += strings[i];
  }
  return str;
}

const price = 1000;
const persianPrice = rial`${price}`;
console.log(persianPrice);
