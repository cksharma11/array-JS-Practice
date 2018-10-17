const assert = require("assert");
const lib = require("./selectEvenOdd.js").splitEvenOdd;
console.log(lib([1,2,5,4,3,2,1]));
assert.deepEqual(lib([1,2,3,4,5]), [ [2,4],[1,3,5]]);
assert.deepEqual(lib([1]), [ [],[1]]);
assert.deepEqual(lib([1,-1,-2,5]), [ [-2],[1,-1,5]]);
console.log(lib([1,-1,-2,5]));
