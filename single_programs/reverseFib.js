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

const reverseSeries = function(fibSeries){
  let reversedSeries = [];
  for(let index = fibSeries.length-1; index >= 0; index--){
    reversedSeries[fibSeries.length-1 - index] = fibSeries[index];
  }
  return reversedSeries;
}

const main = function(){
  let nthTerm = 10;
  let fibSeries = generateFibSeries(nthTerm);
  let reversedSeries = reverseSeries(fibSeries);
  console.log(reversedSeries);
}
//main();

exports.generateFibSeries = generateFibSeries;
exports.reverseSeries = reverseSeries;
