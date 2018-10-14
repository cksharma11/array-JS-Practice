let list = [1,2,3,4,5];

const sort = function(a,b){
  let temp = a;
  a = b;
  b = temp;
}

const reverseArray = function(array){
  let sortedArray = array.slice();
  for(let index = 0; index < array.length; index++ ){
    if(sortedArray[index] > sortedArray[index+1] ){
      sawp(sortedArray[index], sortedArray[index+1]);
    }
  }
  return reversedArray;
}

console.log(reversedArray(list));
