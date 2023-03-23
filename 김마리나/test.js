// 입력 코드
const fs = require("fs");
let input = fs.readFileSync('/dev/stdin').toString();
input = input.split("\n");

const inputC= +input[0];
const inputTestCase = []; 

for (let i = 1; i <= inputC; ++i) {
    const arr = input[i].split(" ").map((item) => +item);
    let newArr = [];
    for (let j = 1; j < arr.length; j++) {
        newArr.push(arr[j]);
    }
    const testCase = {
        N: arr[0],
        arr: newArr,
    };
    inputTestCase.push(testCase);
}

// 문제 풀이 코드
function getPartition(input) {
  let min = 0;
  let max = 0;
  let gap = 10000;
  let array = Array.from({length: input + 1}, () => true);
  let primes = [];

  for (let i = 2; i <= Math.sqrt(input); i++) {
    if (array[i] === true) {
      let j = 2;
      while (i * j <= input) {
        array[i * j] = false;
        j += 1;
      }
    }
  }

  for (let j = 2; j <= array.length; j++) {
    if (array[j]) {
      primes.push(j);
    }
  }

  for (let i = 0; i < primes.length; i++) {
    for (let j = i; j < primes.length; j ++){
      if (primes[i] + primes[j] === input) {
        if (primes[j] - primes[i] < gap) {
          gap = primes[j] - primes[i];
          min = primes[i];
          max = primes[j];
        }
        break;
      }
    }
  }

  return `${min} ${max}`;
}

// 출력 코드
function solution(C, testCase){
    for (let i = 0; i < testCase.length; i++) {
      console.log(getPartition(testCase[i].N));
    }
}

solution(inputC, inputTestCase);
