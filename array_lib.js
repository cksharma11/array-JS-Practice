const isEven = function(number){
  return Math.abs(number % 2) == 0;
}

const isOdd = function(number){
  return Math.abs(number % 2) == 1;
}

const extractOddElements = function(list){
   return list.filter(isOdd);
}

const extractEvenElements = function(list){
   return list.filter(isEven);
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
  let evenOddList = [0,1];
  evenOddList[0] = extractEvenElements(list);
  evenOddList[1] = extractOddElements(list);
  return evenOddList;  
}

const addTwoNumbers = function(a,b){
  return a+b;
}

const findSumOfNumberList = function(list){
  return list.reduce(addTwoNumbers);
}

const extractAlternateNumbers = function(list){
  return list.filter(function(element,index){
    return index % 2 == 0;
  });
}

const findMaxOfList = function(list){
  return list.reduce(function(a,b){
    return Math.max(a,b);
  });
}

const findMinOfList = function(list){
  return list.reduce(function(a,b){
    return Math.min(a,b);
  });
}

const findAverage = function(list){
  return list.reduce(addTwoNumbers) / list.length;
}

const mapLength = function(list){
  return list.map(function(element){
    return element.length;
  });
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
  let count = list.filter(function(a){
    return a > threshold;
  });
  return count.length;
}

const countNumbersBelowThreshold = function(list, threshold){
  let count = list.filter(function(a){
    return a < threshold;
  });
  return count.length;
}

const findIndex = function(list, number){
  return list.indexOf(number);
}

const sortInAscending = function(list){
  return list.sort(function(a,b){
    return a-b;
  });
}

const sortInDescending = function(list){
  return sortInAscending(list).reverse();
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
  return list.some(function(num){
    return num == element;
  });
}

const extractUniqe = function(list){
  let uniqeList = [];
  for(let index = 0; index < list.length; index++){
    if(!isContain(uniqeList, list[index]))
      uniqeList.push(list[index]);
  }
  return uniqeList;
}

const arrayPartition = function(list, limit){
  let partitionedArray = [0, 1];
  partitionedArray[0] = list.filter(function(a){
    return a <= limit;
  });
  partitionedArray[1] = list.filter(function(a){
    return a > limit;
  });
  return partitionedArray;
}

const unionArray = function(list_1, list_2){
  return extractUniqe(list_1.concat(list_2));
}

const zipElemets = function(list_1, list_2){
  let maxLength = Math.min(list_1.length, list_2.length);
  let zippedList = [];
  for(let index = 0; index < maxLength; index++){
    zippedList[index] = [list_1[index],list_2[index]];
  }
  return zippedList;
}

const intersectArray = function(list_1, list_2){
  let result = [];
  for(index in list_1){
    if(isContain(list_1, list_2[index])){
      result.push(list_2[index]);
    }
  }
  return extractUniqe(result);
}

const findDifference = function(list_1, list_2){
  let result = [];
  for(let index = 0; index < list_1.length; index++){
    if(!isContain(list_2, list_1[index])){
      result.push(list_1[index]);
    }
  }
  return result;
}

const isSubset = function(list, subset){
  let result = true;
  for(let index = 0; index < subset.length; index++){
    if(!isContain(list, subset[index])){
      result = false;
    }
  }  
  return result;
}

const rotateArray = function(list, num){
  for(let index = 0; index < num; index++){
    list.push(list.shift());
  }
  return list;
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
exports.arrayPartition = arrayPartition;

exports.unionArray = unionArray;
exports.zipElemets = zipElemets;
exports.intersectArray = intersectArray;

exports.findDifference = findDifference;
exports.isSubset = isSubset;
exports.rotateArray = rotateArray;
