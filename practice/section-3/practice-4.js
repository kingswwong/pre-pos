'use strict';

function createUpdatedCollection(collectionA, objectB) {

  let numberReg = /\d+/g
  let digitReg = /[a-z]/g
  for(let i = 0;i < collectionA.length;i++){
    if(collectionA[i].match(numberReg)){
      let num = collectionA[i].match(numberReg)
      collectionA.splice(i,1,collectionA[i].match(digitReg)[0])
      for(let j = 0;j < parseInt(num) - 1;j++){
        collectionA.push(collectionA[i].match(digitReg)[0])
      }
    }
  }
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
