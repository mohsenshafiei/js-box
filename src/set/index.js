let animals = new Set();

animals.add('Horse');
animals.add('Bear');
animals.add('Tiger');

animals.delete('Tiger');

animals.forEach(animal => console.log(`Hey ${animal}`));
animals.clear();
console.log(animals.size);


const sentence = new Set('Only unique characters will be in this set.');
console.log(sentence.size); // 18

const developers = new Set(['Mohsen', 'Jeff', 'Amir']);
let persons = developers.values();

console.log(persons.next()); // { Done: False, Value: Mohsen}
console.log(persons.next()); // { Done: False, Value: Jeff}
console.log(persons.next()); // { Done: False, Value: Amir}
console.log(persons.next().done); // true
