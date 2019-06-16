function add1(v) { return v + 1; }
function isOdd(v) { return v % 2 === 1; }
function sum(total, v) { return total + v; }

function listCombination(list , v) {
  list.push(v);
  return list;
}

function mapWithReduce(mappingFn) {
  return function reducer(list, v) {
    return listCombination( list, mappingFn(v));
  };
}

function filterWithReduce(predicateFn) {
  return function reducer(list, v) {
    if (predicateFn(v)) listCombination(list, v);
    return list;
  };
}

let list = [2, 5, 8, 11, 14, 17, 20];
console.log(
  list
    .reduce( mapWithReduce(add1), [])
    .reduce( filterWithReduce(isOdd), [] )
    .reduce( sum )
);
