/*
// 입력 값
const fs = require('fs');
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
const n = parseInt(input[0]);
const card = input[1].trim().split(" ").map(element=> {return parseInt(element)});
// n : 카드 개수 N, card : Pi 리스트
*/

// VSCode 연습 풀이용
const n = 10;
const card = [1, 1, 2, 3, 5, 8, 13, 21, 34, 55];

//풀이
let dp = new Array(n);
for(let i = 0; i < n; i++)
  dp[i] = card[i];

// dp[N-i] 꼴의 값을 구해야하므로 Bottom-Up 방식으로 접근한다
for(let i = 0; i < n; i++)
  for(let j = 0 ; j < i; j++) {
    console.log(`dp[${i}] = ${dp[i]}` + '\n' + `dp[${i}] = dp[${i-1-j}] + card[${j}] = ${dp[i-1-j] + card[j]}`);
    dp[i] = Math.max(dp[i], dp[i-1-j] + card[j]);
  }

console.log(dp[n-1]);