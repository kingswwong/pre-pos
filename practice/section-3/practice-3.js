'use strict';

function createUpdatedCollection(collectionA, objectB) {
  let arr = [];
  let hash = [];
  for(let i = 0;i < collectionA.length;i++){
    let count = 1;
    for(let j = i + 1;j < collectionA.length;j++){
      if(collectionA[i] === collectionA[j]){
        count++;
      }
    }
    if(hash.lastIndexOf(collectionA[i]) == -1 && count > 1){
      hash.push(collectionA[i]);
      arr.push({key:collectionA[i],count:count})
    }
  }
  for(let i = 0;i < arr.length;i++){
    if(objectB['value'].indexOf(arr[i].key) !== -1){
      arr[i].count -= parseInt(arr[i].count / 3);
    }
  }
  return arr;
}
