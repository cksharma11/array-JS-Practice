const assert = require("assert");
const lib = require("./array_lib.js");

const generateFibSeries = lib.generateFibSeries;
const reverseSeries = lib.reverseSeries;
const splitEvenOdd = lib.splitEvenOdd;
const findSumOfNumberList = lib.findSumOfNumberList;
const addTwoNumbers = lib.addTwoNumbers;
const extractAlternateNumbers = lib.extractAlternateNumbers;
const findMaxOfList = lib.findMaxOfList;
const findMinValueInList = lib.findMinValueInList;
const isEven = lib.isEven;
const isOdd = lib.isOdd;
const extractEvenElements = lib.extractEvenElements;
const extractOddElements = lib.extractOddElements;
const mapLength = lib.mapLength;
const countEvenNumbers = lib.countEvenNumbers;
const countOddNumbers = lib.countOddNumbers; 
const countNumbersAboveThreshold = lib.countNumbersAboveThreshold;
const countNumbersBelowThreshold = lib.countNumbersBelowThreshold;
const findIndex = lib.findIndex;
const sortInAscending = lib.sortInAscending;
const sortInDescending = lib.sortInDescending;
const extractDigit = lib.extractDigit;
const isAscending = lib.isAscending;
const isDescending = lib.isDescending;
const extractUniqe = lib.extractUniqe;
const arrayPartition = lib.arrayPartition; 
const unionArray = lib.unionArray;
const zipElemets = lib.zipElemets;
const intersectArray = lib.intersectArray;
const findDifference = lib.findDifference;
const isSubset = lib.isSubset;
const rotateArray = lib.rotateArray;

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

/*----------- Test for findMaxOfList ---------------*/

assert.equal(findMaxOfList([1,2,3,4,5]), 5);
assert.equal(findMaxOfList([1]), 1);

assert.equal(findMaxOfList([111,1,11,]), 111);
assert.equal(findMaxOfList([5,5,5,5,5]), 5);

/*----------- Test for findMaxOfList ---------------*/

assert.equal(findMaxOfList([1,2,3,4,5]), 5);
assert.equal(findMaxOfList([1]), 1);

assert.equal(findMaxOfList([-111,-1,-11,]), -1);
assert.equal(findMaxOfList([5,5,5,5,5]), 5);
assert.equal(findMaxOfList([-5,5,5,-5,5]), 5);

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

/*----------- Test for extractEvenElements ---------------*/

assert.deepEqual(extractEvenElements([1]),[]);
assert.deepEqual(extractEvenElements([0]),[0]);

assert.deepEqual(extractEvenElements([1,2]),[2]);
assert.deepEqual(extractEvenElements([1,2,3,4]),[2,4]);

assert.deepEqual(extractEvenElements([-1,-2]),[-2]);
assert.deepEqual(extractEvenElements([1,-12]),[-12]);

/*----------- Test for extractOddElements ---------------*/

assert.deepEqual(extractOddElements([1]),[1]);
assert.deepEqual(extractOddElements([0]),[]);

assert.deepEqual(extractOddElements([1,2]),[1]);
assert.deepEqual(extractOddElements([1,2,3,4]),[1,3]);

assert.deepEqual(extractOddElements([-1,-2]),[-1]);
assert.deepEqual(extractOddElements([1,-12]),[1]);

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

/*------------ Test for findIndex -------------------*/

assert.equal(findIndex([1],1),0);
assert.equal(findIndex([1,2,4],2),1);

assert.equal(findIndex([1,2,3,4],10),-1);
assert.equal(findIndex([1,2,-1,2,1],-1),2);

/*------------ Test for sortInAscending -------------------*/

assert.deepEqual(sortInAscending([1]),[1]);
assert.deepEqual(sortInAscending([2,1]),[1,2]);

assert.deepEqual(sortInAscending([2,-1,10,1]),[-1,1,2,10]);
assert.deepEqual(sortInAscending([99,9,9,1]),[1,9,9,99]);

/*------------ Test for sortInDescending -------------------*/

assert.deepEqual(sortInDescending([1]),[1]);
assert.deepEqual(sortInDescending([2,1]),[2,1]);

assert.deepEqual(sortInDescending([2,-1,10,1]),[10,2,1,-1]);
assert.deepEqual(sortInDescending([-1,-2,-3,-4]),[-1,-2,-3,-4]);

/*------------- Test for extractDigit ----------------*/

assert.deepEqual(extractDigit(1),[1]);
assert.deepEqual(extractDigit(123),[1,2,3]);

assert.deepEqual(extractDigit(98765),[9,8,7,6,5]);
assert.deepEqual(extractDigit(-123),['-',1,2,3]);

/*------------- Test for isAscending ----------------*/

assert.equal(isAscending([]),true);
assert.equal(isAscending([2,3,55]),true);

assert.equal(isAscending([1,12,1]),false);
assert.equal(isAscending([99,1]),false);

/*------------- Test for isDescending ----------------*/

assert.equal(isDescending([]),true);
assert.equal(isDescending([2,3,55]),false);

assert.equal(isDescending([5,4,3,2,1]),true);
assert.equal(isDescending([99,1]),true);

/*-------------- Test for extractUniqe ---------------*/

assert.deepEqual(extractUniqe([1,1]),[1]);
assert.deepEqual(extractUniqe([1,1,2,2]),[1,2]);

assert.deepEqual(extractUniqe([1,2,1,1]),[1,2]);
assert.deepEqual(extractUniqe([1,12,14,4]),[1,12,14,4]);

/*-------------- Test for arrayPartition ---------------*/

assert.deepEqual(arrayPartition([1,2,3],2),[[1,2],[3]])
assert.deepEqual(arrayPartition([-1,0,1],0),[[-1,0],[1]])

assert.deepEqual(arrayPartition([11,21,11,11],11),[[11,11,11],[21]])
assert.deepEqual(arrayPartition([11,12,130],130),[[11,12,130],[]])

/*-------------- Test for unionArray ---------------*/

assert.deepEqual(unionArray([1],[1]),[1]);
assert.deepEqual(unionArray([1,2,3],[2,3,4]),[1,2,3,4]);

assert.deepEqual(unionArray([1,2,3,4,5],[1]),[1,2,3,4,5]);
assert.deepEqual(unionArray([1],[]),[1]);

/*-------------- Test for zipElemets ---------------*/

assert.deepEqual(zipElemets([1],[1]),[[1,1]]);
assert.deepEqual(zipElemets([1,2,3],[4,5,6]),[[1,4],[2,5],[3,6]]);

assert.deepEqual(zipElemets([1,2,3],[4,5,6,11,2]),[[1,4],[2,5],[3,6]]);
assert.deepEqual(zipElemets([1,2,3,1,2,3],[4,5,6]),[[1,4],[2,5],[3,6]]);

/*-------------- Test for intersectArray ---------------*/

assert.deepEqual(intersectArray([1],[1]),[1]);
assert.deepEqual(intersectArray([1,2,3],[1,2]),[1,2]);

assert.deepEqual(intersectArray([1,3,4],[1]),[1]);
assert.deepEqual(intersectArray([],[]),[]);

/*-------------- Test for findDifference ---------------*/

assert.deepEqual(findDifference([1,2],[1]),[2]);
assert.deepEqual(findDifference([1,2,1],[2]),[1,1]);

assert.deepEqual(findDifference([1,2,3],[3]),[1,2]);
assert.deepEqual(findDifference([1,2],[]),[1,2]);

/*-------------- Test for isSubset ---------------*/

assert.deepEqual(isSubset([1,2],[1]),true);
assert.deepEqual(isSubset([1,2],[]),true);

assert.deepEqual(isSubset([1,2,12,1],[1,12]),true);
assert.deepEqual(isSubset([1,2],[1,2,3]),false);

/*-------------- Test for rotateArray ---------------*/

assert.deepEqual(rotateArray([1,2,3],2),[3,1,2]);
assert.deepEqual(rotateArray([1,2,3,4,5],2),[3,4,5,1,2]);

assert.deepEqual(rotateArray([1,2,3,4,5],3),[4,5,1,2,3]);
assert.deepEqual(rotateArray([1,2,3,4,5],4),[5,1,2,3,4]);

/*------------------------------------------------*/
console.log("All test passed...");
