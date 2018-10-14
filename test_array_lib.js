const assert = require("assert");
const lib = require("./array_lib.js");

const generateFibSeries = lib.generateFibSeries;
const reverseSeries = lib.reverseSeries;
const splitEvenOdd = lib.splitEvenOdd;
const findSumOfNumberList = lib.findSumOfNumberList;
const addTwoNumbers = lib.addTwoNumbers;
const extractAlternateNumbers = lib.extractAlternateNumbers;
const findMaxValueInList = lib.findMaxValueInList;
const findMinValueInList = lib.findMinValueInList;

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

/*---------- Test for findSumOfNumberList ----------*/

//for list of one and two elements
assert.equal(findSumOfNumberList([1]),1);
assert.equal(findSumOfNumberList([-1,1]),0);
//for >1000 values
assert.equal(findSumOfNumberList([12,12,12]),36);
assert.equal(findSumOfNumberList([1000,2000]),3000);

/*----------- Test for addTwoNumbers ---------------*/

assert.equal(addTwoNumbers(10,20), 30);
assert.equal(addTwoNumbers(0,0),0);

/*----------- Test for addTwoNumbers ---------------*/

//for empty and 1 element array
assert.deepEqual(extractAlternateNumbers([]),[]);
assert.deepEqual(extractAlternateNumbers([1]),[1]);

assert.deepEqual(extractAlternateNumbers([1,2,3,4]),[1,3]);
assert.deepEqual(extractAlternateNumbers([1,-4,5,1,65]),[1,5,65]);

/*----------- Test for findMaxValueInList ---------------*/

assert.equal(findMaxValueInList([1,2,3,4,5]), 5);
assert.equal(findMaxValueInList([1]), 1);

assert.equal(findMaxValueInList([111,1,11,]), 111);
assert.equal(findMaxValueInList([5,5,5,5,5]), 5);
