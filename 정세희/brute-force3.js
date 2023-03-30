function solution(numbers) {

  let nums = numbers.split("");
  let set = new Set();

  getPermutation(set, nums, '');

  return set.size;
}


function getPermutation(setNum, arr, next) {
  if (arr.length > 0) {
      for (let i = 0; i < arr.length; i++) {
          let newNext = Number(next + arr[i]);
          let copyArr = [...arr];
          copyArr.splice(i, 1);

          if (isPrime(newNext)) {
              setNum.add(newNext);
          }

          getPermutation(setNum, copyArr, newNext);
      }
  }
}

function isPrime(num){
  if(num < 2) return false;
  
  for(let i = 2; i <= Math.sqrt(num); i++){
    if(num % i === 0) return false;
  }
  
  return true;
}