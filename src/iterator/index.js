const arr = [1, 2, 3];

const iterator = arr[Symbol.iterator]();
iterator.next(); // {value: 1, done: false}
iterator.next(); // {value: 2, done: false}
iterator.next(); // {value: 3, done: false}
iterator.next(); // {value: undefined, done: true}

// Creating custom iterator crappy technique
const obj = {
  [Symbol.iterator](){
    let idx = this.start, en = this.end;
    let it = {
      next: () => {
        if (idx <= en) {
          let v = this.values[idx];
          idx++;
          return {
            value: v,
            done: false
          };
        } else {
          return {
            done: true
          };
        }
      },
    };
    return it;
  },
  start: 3,
  end: 8,
  values: [1, 2, 3, 4, 5, 6, 7, 8, 9],
};

console.log([...obj]);


// The clean way to create custom iterator
const obj1 = {
  *[Symbol.iterator](){
    for (let i = this.start; i <= this.end; i++) {
      yield this.values[i];
    }
  },
  start: 3,
  end: 8,
  values: [1, 2, 3, 4, 5, 6, 7, 8, 9],
}
console.log([...obj1]);
