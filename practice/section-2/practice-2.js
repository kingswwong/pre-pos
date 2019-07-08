'use strict';

function countSameElements(collection) {
  let arr = [];
  let hash = [];
  for(let i = 0;i < collection.length;i++){
    let count = 1;
    if(collection[i].split('-').length > 1){
      count = parseInt(collection[i].split('-')[1]);
    }else{
      for(let j = i + 1;j < collection.length;j++){
        if(collection[i] === collection[j]){
          count++;
        }
      }
    }
    if(hash.lastIndexOf(collection[i].split('-')[0]) == -1 && count > 1){
      hash.push(collection[i].split('-')[0]);
      arr.push({key:collection[i].split('-')[0],count:count})
    }
  }
  return arr;
}
