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
const isEven = lib.isEven;
const isOdd = lib.isOdd;
const selectOddNumbers = lib.selectOddNumbers;
const selectEvenNumbers = lib.selectEvenNumbers;
const mapLength = lib.mapLength;
const countEvenNumbers = lib.countEvenNumbers;
const countOddNumbers = lib.countOddNumbers; 
const countNumbersAboveThreshold = lib.countNumbersAboveThreshold;
const countNumbersBelowThreshold = lib.countNumbersBelowThreshold;

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

/*----------- Test for isEven ---------------*/

assert.equal(isEven(0), true);
assert.equal(isEven(2), true);
assert.equal(isEven(1), false);

assert.equal(isEven(-11), false);
assert.equal(isEven(12), true);

/*----------- Test for isOdd ---------------*/

assert.equal(isOdd(0), false);
assert.equal(isOdd(2), false);
assert.equal(isOdd(1), true);

assert.equal(isOdd(-11), true);
assert.equal(isOdd(12), false);

/*----------- Test for selectEvenNumbers ---------------*/

assert.deepEqual(selectEvenNumbers([1]),[]);
assert.deepEqual(selectEvenNumbers([0]),[0]);

assert.deepEqual(selectEvenNumbers([1,2]),[2]);
assert.deepEqual(selectEvenNumbers([1,2,3,4]),[2,4]);

assert.deepEqual(selectEvenNumbers([-1,-2]),[-2]);
assert.deepEqual(selectEvenNumbers([1,-12]),[-12]);

/*----------- Test for selectOddNumbers ---------------*/

assert.deepEqual(selectOddNumbers([1]),[1]);
assert.deepEqual(selectOddNumbers([0]),[]);

assert.deepEqual(selectOddNumbers([1,2]),[1]);
assert.deepEqual(selectOddNumbers([1,2,3,4]),[1,3]);

assert.deepEqual(selectOddNumbers([-1,-2]),[-1]);
assert.deepEqual(selectOddNumbers([1,-12]),[1]);

/*----------- Test for mapLength ---------------*/

assert.deepEqual(mapLength(["a"]),[1]);
assert.deepEqual(mapLength([]),[]);

assert.deepEqual(mapLength(["a","abc"]),[1,3]);
assert.deepEqual(mapLength(["ABC","CDE","GHIJ"]),[3,3,4]);

/*----------- Test for countEvenNumbers ---------------*/

assert.equal(countEvenNumbers([1]),0);
assert.equal(countEvenNumbers([0]),1);

assert.equal(countEvenNumbers([2,,4,6]),3);
assert.equal(countEvenNumbers([1,2,-4]),2);

/*----------- Test for countOddNumbers ---------------*/

assert.equal(countOddNumbers([1]),1)
assert.equal(countOddNumbers([0]),0)

assert.equal(countOddNumbers([2,,4,6]),0)
assert.equal(countOddNumbers([1,2,-4]),1)

/*----------- Test for countNumbersAboveThreshold ---------------*/
assert.equal(countNumbersAboveThreshold([1,2],1),1);
assert.equal(countNumbersAboveThreshold([1],1),0);

assert.equal(countNumbersAboveThreshold([1,2,12,4,6],4),2);
assert.equal(countNumbersAboveThreshold([2,2,3,4,],2),2);

/*----------- Test for countNumbersBelowThreshold ---------------*/
assert.equal(countNumbersBelowThreshold([1,2],1),0);
assert.equal(countNumbersBelowThreshold([1],1),0);

assert.equal(countNumbersBelowThreshold([1,2,12,4,6],4),2);
assert.equal(countNumbersBelowThreshold([2,2,3,4,],2),0);
