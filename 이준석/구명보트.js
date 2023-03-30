function solution(people, limit) {
  var answer = 0;
  const aa = people.filter((item) => limit - item >= 40);
  answer += people.length - aa.length;
  aa.sort((a, b) => b - a);
  for (let i = 0; i < aa.length; i++) {
    if (aa[i] + aa[aa.length - 1] > limit) {
      answer++;
    } else {
      answer++;
      aa.pop();
    }
  }
  return answer;
}

function solution(numbers) {
  const set = new Set();
  var answer = 0;
  numbers = numbers.split("");

  function recursive(comb, others) {
    if (comb.length !== 0) set.add(Number(comb.join("")));
    for (let i = 0; i < others.length; i++) {
      recursive(
        [...comb, others[i]],
        [...others.slice(0, i), ...others.slice(i + 1, others.length)]
      );
    }
  }

  recursive([], numbers);
  [...set];
  function isPrime(num) {
    for (let i = 2; i < Math.sqrt(num); i++) {
      if (num % i === 0) false;

      return true;
    }
  }

  return answer;
}
