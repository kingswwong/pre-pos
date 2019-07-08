'use strict';

function collectSameElements(collectionA, collectionB) {
  // es6 version
  return collectionA.filter(item => collectionB.indexOf(item) !== -1)
}
