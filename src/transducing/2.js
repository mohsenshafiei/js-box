function add1(v) { return v + 1; }
function isOdd(v) { return v % 2 === 1; }
function sum(total, v) { return total + v; }

function mapWithReduce(arr, mappingFn) {
  return arr.reduce(function reducer(list, v) {
    list.push(mappingFn(v));
    return list;
  }, [] );
}

function filterWithReduce(arr, predicateFn) {
  return arr.reduce(function reducer(list, v) {
    if (predicateFn(v)) list.push(v);
    return list;
  }, [] );
}

let list = [2, 5, 8, 11, 14, 17, 20];
list = mapWithReduce(list, add1);
list = filterWithReduce(list, isOdd);
console.log(list.reduce(sum));
