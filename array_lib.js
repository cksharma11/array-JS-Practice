const isEven = function(number){
  return Math.abs(number % 2) == 0;
};

const isOdd = function(number){
  return Math.abs(number % 2) == 1;
};

const extractOddNumbers = function(list){
   return list.filter(isOdd);
};

const extractEvenNumbers = function(list){
   return list.filter(isEven);
};

const reverseSeriesHelper = function(result, element){
  result.unshift(element);
  return result;
};

const reverseSeries = function(series){
  return series.reduce(reverseSeriesHelper,[]); 
};

const splitEvenOddNumbers = function(list){
  let evenOddList = [0,1];
  evenOddList[0] = extractEvenNumbers(list);
  evenOddList[1] = extractOddNumbers(list);
  return evenOddList;  
};

const addTwoNumbers = function(a,b){
  return a+b;
};

const findSumOfNumberList = function(list){
  return list.reduce(addTwoNumbers);
};

const getAlternateElement = function(element, index){
  return index % 2 == 0;
};

const extractAlternateNumbers = function(list){
  return list.filter(getAlternateElement);
};

const findMax = function(a,b){
  return Math.max(a,b);
};

const findMaxOfList = function(list){
  return list.reduce(findMax);
};

const findMin = function(a,b){
  return Math.min(a,b);
};

const findMinOfList = function(list){
  return list.reduce(findMin);
};

const findAverage = function(list){
  return list.reduce(addTwoNumbers) / list.length;
};

const getLengthOfString = function(text){
  return text.length;
};
const mapLength = function(list){
  return list.map(getLengthOfString);
};

const countOddNumbers = function(list){
  let oddElements = extractOddNumbers(list);
  return oddElements.length;
};

const countEvenNumbers = function(list){
  let evenElements = extractEvenNumbers(list);
  return evenElements.length;
};

const getThresholdData = function(list,element){
  let {threshold} = list;
  if(element > threshold){
    list.elementAboveLimit.push(element);
    return list;
  };
  if(element < threshold)
  list.elementsBelowLimit.push(element);
  return list;
};

const countNumbersAboveThreshold = function(list, threshold){
  let count = list.reduce(getThresholdData,
    {
      threshold: threshold, 
      elementAboveLimit: [],
      elementsBelowLimit: []
    });
  return count.elementAboveLimit.length;
};

const countNumbersBelowThreshold = function(list, threshold){
  let count = list.reduce(getThresholdData,{threshold: threshold, 
    elementAboveLimit: [],
    elementsBelowLimit: []
  });
  return count.elementsBelowLimit.length;
};

const findIndex = function(list, number){
  return list.indexOf(number);
};

const sortInAscendingHelper = function(a,b){
  return a-b;
};

const sortInAscending = function(list){
  return list.sort(sortInAscendingHelper);
};

const sortInDescending = function(list){
  return sortInAscending(list).reverse();
};

const getOrder = function(list, element){
  list.isAscending = (list.prevElement <= element && list.isAscending );
  list.isDescending = (list.prevElement >= element && list.isDescending );
  list.prevElement = element;
  return list;
};

const isAscending = function(list){
  let result = list.reduce(getOrder, 
    {
      prevElement: list[0], 
      isAscending: true, 
      isDescending: true
    });
  return result.isAscending;
};

const isDescending = function(list){
  let result = list.reduce(getOrder, 
    {
      prevElement: list[0], 
      isAscending: true, 
      isDescending: true
    });
  return result.isDescending;
};

const extractDigit = function(number){
  return number.toString().split("");
};

const isElemetExists = function(list, element){
  return list.includes(element);
};

const extractUniqeHelper = function(list, element){
  if(list.includes(element)){
    return list;
  };
  list.push(element);
  return list;
};

const extractUniqe = function(list){
  return list.reduce(extractUniqeHelper,[]);
};

const divideArray = function(list,element){
  if(element > list.limit){
    list.partition[1].push(element);
    return list;
  };
  list.partition[0].push(element);
  return list;
};

const listPartition = function(list, limit){
  let count = list.reduce(divideArray,
    {
      limit: limit, 
      partition: [[],[]]
    });
  return count.partition;
};

const unionArray = function(list_1, list_2){
  return extractUniqe(list_1.concat(list_2));
};

const zipElemets = function(list_1, list_2){
  let maxLength = Math.min(list_1.length, list_2.length);
  let zippedList = [];
  for(let index = 0; index < maxLength; index++){
    zippedList[index] = [list_1[index],list_2[index]];
  };
  return zippedList;
};

const getIntersectionAndDiff = function(list,element){
  if(list.list.includes(element)){
    list.intersection.push(element);
    return list;
  };
  list.difference.push(element);
  return list;
};

const intersectArray = function(list_1, list_2){
  return list_1.reduce(getIntersectionAndDiff,
    {
      list:list_2, 
      intersection: [], 
      difference: []
    }).intersection;
};

const findDifference = function(list_1, list_2){
  return list_1.reduce(getIntersectionAndDiff,
    {
      list:list_2, intersection: [], difference: []
    }).difference;
};

const isSubsetHelper = function(list, element){
  list.isSubset = (list.set.includes(element) && list.isSubset);
  return list;
};

const isSubset = function(list, subset){
  return subset.reduce(isSubsetHelper,
    {
      isSubset: true, 
      set: list
    }).isSubset;
};

const rotateArray = function(list, num){
  for(let index = 0; index < num; index++){
    list.push(list.shift());
  };
  return list;
};

const generateFibHelper = function(list, element){
  list.fibSeries[list.index] = list.term_1;
  list.term_1 = list.term_2 + list.term_1;
  list.term_2 = list.fibSeries[list.index++];
  return list;
}

const generateFibSeries = function (length) { 
  let list = new Array(length).fill(0);
  let series = list.reduce(generateFibHelper, 
    {
      index:0, 
      fibSeries: [], 
      term_1:0, 
      term_2:1 
    });
  return series.fibSeries;
}

exports.generateFibSeries = generateFibSeries;
exports.reverseSeries = reverseSeries;
exports.splitEvenOddNumbers = splitEvenOddNumbers;

exports.addTwoNumbers = addTwoNumbers;
exports.findSumOfNumberList = findSumOfNumberList;
exports.extractAlternateNumbers = extractAlternateNumbers;

exports.findMaxOfList = findMaxOfList;
exports.findMinOfList = findMinOfList;
exports.findAverage = findAverage;

exports.isEven = isEven;
exports.isOdd = isOdd;
exports.extractEvenNumbers = extractEvenNumbers;

exports.extractOddNumbers = extractOddNumbers;
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
exports.listPartition = listPartition;

exports.unionArray = unionArray;
exports.zipElemets = zipElemets;
exports.intersectArray = intersectArray;

exports.findDifference = findDifference;
exports.isSubset = isSubset;
exports.rotateArray = rotateArray;
