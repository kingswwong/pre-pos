'use strict';

function countSameElements(collection) {
  let numberReg = /\d+/g
  let digitReg = /[a-z]/g
  for(let i = 0;i < collection.length;i++){
    if(collection[i].match(numberReg)){
      let num = collection[i].match(numberReg)
      collection.splice(i,1,collection[i].match(digitReg)[0])
      for(let j = 0;j < parseInt(num) - 1;j++){
        collection.push(collection[i].match(digitReg)[0])
      }
    }
  }
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
      arr.push({name:collection[i],summary:count})
    }
  }
  return arr;
}
