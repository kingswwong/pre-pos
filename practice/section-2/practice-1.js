'use strict';

function countSameElements(collection) {
  let arr = [];
  let hash = [];
  for(let i = 0;i < collection.length;i++){
    let count = 1;
    for(let j = i + 1;j < collection.length;j++){
      if(collection[i] === collection[j]){
        count++;
      }
    }
    if(hash.lastIndexOf(collection[i]) == -1 && count > 1){
      hash.push(collection[i]);
      arr.push({key:collection[i],count:count})
    }
  }
  return arr;
}
