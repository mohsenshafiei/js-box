// functioal programmer cares about value immutabiltiy
function doubleThemImmutable(list) {
  let newList = [];
  for (let i = 0 ; i < list.length ; i++) {
    newList[i] = list[i] * 2;
  }
  return newList;
}
