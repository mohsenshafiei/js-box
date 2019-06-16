function add1(v) { return v + 1; }
function isOdd(v) { return v % 2 === 1; }
function sum(total, v) { return total + v; }

function curry(fn,arity = fn.length) {
  return (function nextCurried(prevArgs){
    return function curried(nextArg){
      var args = [ ...prevArgs, nextArg ];
      if (args.length >= arity) return fn( ...args );
      else return nextCurried( args );
    };
  })( [] );
}

function listCombination(list, v) {
  list.push(v);
  return list;
}

const mapReducer = curry(function mapReducer(mappingFn, combineFn) {
  return function reducer(list, v) {
    return combineFn( list, mappingFn(v) );
  }
});

const filterReducer = curry(function fitlerReducer(predicateFn, combineFn) {
  return function reducer(list, v) {
    if (predicateFn(v)) return combineFn(list, v);
    return list;
  }
});

let list = [2, 5, 8, 11, 14, 17, 20];
console.log(
  list
    .reduce( mapReducer(add1)(listCombination), [])
    .reduce( filterReducer(isOdd)(listCombination), [] )
    .reduce( sum )
);
