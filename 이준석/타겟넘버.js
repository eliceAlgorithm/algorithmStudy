function solution(numbers, target) {
  var answer = 0;
  function pick(number, others) {
    if (others.length === 0) {
      if (number === target) {
        return answer++;
      }
      return answer;
    }
    pick(number + others[0], [...others.slice(1)]);
    pick(number - others[0], [...others.slice(1)]);
  }
  pick(0, numbers);
  return answer;
}
