const isEven = function(number){
  return Math.abs(number % 2) == 0;
}

const isOdd = function(number){
  return Math.abs(number % 2) == 1;
}

const extractOddElements = function(list){
  let listOfOddNumbers = [];
  for(let index = 0; index < list.length; index++){
    if(isOdd(list[index]))
      listOfOddNumbers.push(list[index]);
  }
  return listOfOddNumbers;
}

const extractEvenElements = function(list){
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

const findMaxOfList = function(list){
  let sortedList = sortInDescending(list);
  return sortedList[0];
}

const findMinOfList = function(list){
  let sortedList = sortInAscending(list);
  return sortedList[0];
}

const findAverage = function(list){
  let sum = findSumOfNumberList(list);
  let average = sum / list.length;
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
  let oddElements = extractOddElements(list);
  return oddElements.length;
}

const countEvenNumbers = function(list){
  let evenElements = extractEvenElements(list);
  return evenElements.length;
}

const countNumbersAboveThreshold = function(list, threshold){
    let count = 0;
    for(let index = 0; index < list.length; index++){
      if(list[index] > threshold)
        count++;
    }
  return count;
}

const countNumbersBelowThreshold = function(list, threshold){
    let count = 0;
    for(let index = 0; index < list.length; index++){
      if(list[index] < threshold)
        count++;
    }
  return count;
}

const findIndex = function(list, number){
  for(let index = 0; index < list.length; index++){
    if(list[index] == number)
      return index;
  }
  return "Not found";
}

const swapWithNextIndex = function(list,index){
  let temp = list[index];
  list[index] = list[index+1];
  list[index+1] = temp;
}

const sortInAscending = function(list){
  for(let row = 0; row < list.length; row++){
    for(let col = 0; col < list.length-row; col++){
      if(list[col] > list[col+1])
        swapWithNextIndex(list, col);
    }
  }
  return list;
}

const sortInDescending = function(list){
  for(let row = 0; row < list.length; row++){
    for(let col = 0; col < list.length-row; col++){
      if(list[col] < list[col+1]){
        swapWithNextIndex(list, col);
      }
    }
  }
  return list;
}

const isAscending = function(list){
  for(let index =0; index < list.length-1; index++){
    if(list[index] > list[index +1])
      return false;
  }
  return true;
}

const isDescending = function(list){
  for(let index = 0; index < list.length-1; index++){
    if(list[index] < list[index+1])
      return false;
  }
  return true;
}

const extractDigit = function(number){
  return number.toString().split("");
}

const isContain = function(list, element){
  for(let index = 0; index < list.length; index++){
    if(list[index] == element)
      return true;
  }
  return false;
}

const extractUniqe = function(list){
  let uniqeList = [];
  for(let index = 0; index < list.length; index++){
    if(!isContain(uniqeList, list[index]))
      uniqeList.push(list[index]);
  }
  return uniqeList;
}

exports.generateFibSeries = generateFibSeries;
exports.reverseSeries = reverseSeries;
exports.splitEvenOdd = splitEvenOdd;

exports.addTwoNumbers = addTwoNumbers;
exports.findSumOfNumberList = findSumOfNumberList;
exports.extractAlternateNumbers = extractAlternateNumbers;

exports.findMaxOfList = findMaxOfList;
exports.findMinOfList = findMinOfList;
exports.findAverage = findAverage;

exports.isEven = isEven;
exports.isOdd = isOdd;
exports.extractEvenElements = extractEvenElements;

exports.extractOddElements = extractOddElements;
exports.mapLength = mapLength;
exports.countEvenNumbers = countEvenNumbers;

exports.countOddNumbers = countOddNumbers;
exports.countNumbersBelowThreshold = countNumbersBelowThreshold;
exports.countNumbersAboveThreshold = countNumbersAboveThreshold;

exports.findIndex = findIndex;
exports.sortInAscending = sortInAscending;
exports.sortInDescending = sortInDescending;

exports.extractDigit = extractDigit;
exports.isAscending = isAscending;
exports.isDescending = isDescending;
exports.extractUniqe = extractUniqe;
