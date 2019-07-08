'use strict';

function collectSameElements(collectionA, objectB) {
  let cA = [];
  let collectionB = objectB['value'];
  for(let i = 0;i < collectionA.length;i++){
    console.log(collectionA[i]['key'])
    cA.push(collectionA[i]['key']);
  }
  let arr = [];
  let hash = [];
  for(let i = 0;i < cA.length;i++){
    for(let j = 0;j < collectionB.length;j++){
      if(cA[i] === collectionB[j]){
        arr.push(cA[i]);
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
