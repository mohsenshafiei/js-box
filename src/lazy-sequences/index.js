function* random() {
  while (true) {
    yield Math.random();
  }
}

let numbers = random();
numbers.next().value;
numbers.next().value;
numbers.next().value;
numbers.next().value;
