function* main() {
  yield 'mohsen';
  yield 'jeff';
  yield 'amir'
}

const itertor = main();

itertor.next(); // { value: 'frontend', done: false}
itertor.next(); // { value: 'frontend', done: false}
itertor.next(); // { value: 'frontend', done: false}
itertor.next(); // { value: undefined, done: true}

for (let v of main()) {
  console.log(v)
} // mohsen, jeff, amir
