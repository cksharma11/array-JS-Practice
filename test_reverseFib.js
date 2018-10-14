const assert = require("assert");
const generateFibSeries = require("./reverseFib").generateFibSeries;
const reverseSeries = require("./reverseFib").reverseSeries;

assert.deepEqual(generateFibSeries(5), [0,1,1,2,3]);
assert.deepEqual(reverseSeries([1,2,3,4,5]), [5,4,3,2,1]);
assert.deepEqual(reverseSeries([-1,-2,3,-4,5]), [5,-4,3,-2,-1]);
