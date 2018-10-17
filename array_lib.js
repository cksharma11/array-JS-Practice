const isEven = function(number){
  return Math.abs(number % 2) == 0;
}

const isOdd = function(number){
  return Math.abs(number % 2) == 1;
}

const selectOddNumbers = function(list){
  let listOfOddNumbers = [];
  for(let index = 0; index < list.length; index++){
    if(isOdd(list[index]))
      listOfOddNumbers.push(list[index]);
  }
  return listOfOddNumbers;
}

const selectEvenNumbers = function(list){
  let listOfEvenNumbers = [];
  for(let index = 0; index < list.length; index++){
    if(isEven(list[index]))
      listOfEvenNumbers.push(list[index]);
  }
  return listOfEvenNumbers;
}

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
  let sum = 0;
  for(let index =0; index <list.length; index++){
    sum = sum + list[index];
  }
  return sum;
}

const extractAlternateNumbers = function(list){
  let alternateList = [];
  for(let index = 0; index < list.length; index += 2){
    alternateList.push(list[index]);
  }
  return alternateList;
}

const findMaxValueInList = function(list){
  let max = list[0];
  for(let index=0; index < list.length ; index++){
    if(max < list[index+1]){
      max = list[index+1];
    }
  }
  return max;
}

const findMinValueInList = function(list){
  let min = list[0];
  for(let index=0; index < list.length ; index++){
    if(min > list[index+1]){
      min = list[index+1];
    }
  }
  return min;
}

const findAverage = function(list){
  let average;
  let sum =0;
  for(let index =0; index <list.length; index++){
    sum = sum + list[index]; 
  }
  average = sum / list.length;
  return average;
}

const mapLength = function(list){
  let mappedList = [];
  for(let index = 0; index < list.length; index++){
    mappedList[index] = list[index].length;
  }
  return mappedList;
}

const countOddNumbers = function(list){
  let count = 0;
  for(let index = 0; index < list.length; index++){
    if(isOdd(list[index]))
      count++;
  }
  return count;
}

const countEvenNumbers = function(list){
  let count = 0;
  for(let index = 0; index < list.length; index++){
    if(isEven(list[index]))
      count++;
  }
  return count;
}

exports.generateFibSeries = generateFibSeries;
exports.reverseSeries = reverseSeries;
exports.splitEvenOdd = splitEvenOdd;

exports.addTwoNumbers = addTwoNumbers;
exports.findSumOfNumberList = findSumOfNumberList;
exports.extractAlternateNumbers = extractAlternateNumbers;

exports.findMaxValueInList = findMaxValueInList;
exports.findMinValueInList = findMinValueInList;
exports.findAverage = findAverage;

exports.isEven = isEven;
exports.isOdd = isOdd;
exports.selectEvenNumbers = selectEvenNumbers;

exports.selectOddNumbers = selectOddNumbers;
exports.mapLength = mapLength;
exports.countEvenNumbers = countEvenNumbers;
exports.countOddNumbers = countOddNumbers;
