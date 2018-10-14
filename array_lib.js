const generateFibSeries = function(nthTerm){
  let firstTerm = -1;
  let secondTerm = 1;
  let fibSeries = [];
  for(let index=0; index < nthTerm; index++){
    let nextTerm = firstTerm + secondTerm;
    firstTerm = secondTerm;
    secondTerm = nextTerm;
    fibSeries[index] = nextTerm;
  }
  return fibSeries;
}

const reverseSeries = function(series){
  let reversedSeries = [];
  for(let index = series.length-1; index >= 0; index--){
    reversedSeries[series.length-1 - index] = series[index];
  }
  return reversedSeries;
}

const splitEvenOdd = function(list){
  let evenOddList = [[],[]];
  for(let index = 0;index < list.length; index++){
    evenOddList[Math.abs(list[index]%2)].push(list[index]);
  }
  return evenOddList;  
}

const addTwoNumbers = function(a,b){
  return a+b;
}

const findSumOfNumberList = function(list){
  return list.reduce(addTwoNumbers, 0);
}


exports.generateFibSeries = generateFibSeries;
exports.reverseSeries = reverseSeries;
exports.splitEvenOdd = splitEvenOdd;
exports.addTwoNumbers = addTwoNumbers;
exports.findSumOfNumberList = findSumOfNumberList;
