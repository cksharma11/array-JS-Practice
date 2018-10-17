const splitEvenOdd = function(list){
  let evenOddList = [[],[]];
  for(let index = 0;index < list.length; index++){
    evenOddList[Math.abs(list[index]%2)].push(list[index]);
  }
  return evenOddList;  
}
const main = function(){
  let list = [1,-1,2,3,5];
  console.log(splitEvenOdd(list));
}
main();
exports.splitEvenOdd = splitEvenOdd;
