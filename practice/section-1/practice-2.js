'use strict';

function collectSameElements(collectionA, collectionB) {
  let arr = [];
  let hash = [];
  for(let i = 0;i < collectionA.length;i++){
    for(let j = 0;j < collectionB.length;j++){
      let temp = collectionB[j];
      for(let k = 0;k < temp.length;k++){
        if(collectionA[i] === temp[k]){
          arr.push(collectionA[i]);
        }
      }
    }
  }
  for(let i = 0;i < arr.length;i++){
    if(hash.lastIndexOf(arr[i]) == -1){
      hash.push(arr[i]);
    }
  }
  return hash;
}
