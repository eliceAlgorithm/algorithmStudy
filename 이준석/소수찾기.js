function solution(numbers) {
  const set = new Set();
  var answer = 0;
  numbers = numbers.split("");

  // 모든 조합을 구하는 재귀함수
  function recursive(comb, others) {
    // comb 추가
    if (comb.length !== 0) set.add(Number(comb.join("")));
    for (let i = 0; i < others.length; i++) {
      recursive(
        [...comb, others[i]],
        [...others.slice(0, i), ...others.slice(i + 1, others.length)]
      );
    }
  }

  recursive([], numbers);

  for (const item of [...set]) {
    // 모든 조합을 순회하며 소수 확인
    if (isPrime(item)) answer++;
  }
  // 소수를 구하는 함수
  function isPrime(num) {
    if (num === 0 || num === 1) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i === 0) return false;
    }
    return true;
  }

  return answer;
}
