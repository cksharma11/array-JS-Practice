const assert = require("assert");
const lib = require("./array_lib.js");

const generateFibSeries = lib.generateFibSeries;
const reverseSeries = lib.reverseSeries;
const splitEvenOdd = lib.splitEvenOdd;

/*---------- Test for generateFibSeries ------------*/

//for regular numbers
assert.deepEqual(generateFibSeries(5), [0,1,1,2,3]);
assert.deepEqual(generateFibSeries(0), []);
//for 1 and 2
assert.deepEqual(generateFibSeries(1), [0]);
assert.deepEqual(generateFibSeries(2), [0,1]);

/*---------- Test for reverseSeries ----------------*/

//for empty values and 1 value
assert.deepEqual(reverseSeries([]), []);
assert.deepEqual(reverseSeries([0]), [0]);
//for positive and negitive numbers
assert.deepEqual(reverseSeries([1,2]), [2,1]);
assert.deepEqual(reverseSeries([-1,-5,5,32]), [32,5,-5,-1]);

/*---------- Test for split splitEvenOdd ----------*/

//for empty array and 1 even value
assert.deepEqual(splitEvenOdd([]),[[],[]]);
assert.deepEqual(splitEvenOdd([2]),[[2],[]]);
//for negetive values and all odd
assert.deepEqual(splitEvenOdd([-1,-2,-3,-5]),[[-2],[-1,-3,-5]]);
assert.deepEqual(splitEvenOdd([]),[[],[]]);

