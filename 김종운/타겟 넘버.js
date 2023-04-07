function solution(numbers, target) {
  let answer = 0;

  const stack = [{ index: 0, sum: 0 }];

  while (stack.length) {
    const { index, sum } = stack.pop();

    if (index === numbers.length) {
      if (sum === target) answer++;
      continue;
    }

    stack.push({ index: index + 1, sum: sum + numbers[index] });
    stack.push({ index: index + 1, sum: sum - numbers[index] });
  }

  return answer;
}

console.log(solution([4, 1, 2, 1], 4));
