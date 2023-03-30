function solution(answers) {
  const person1 = [1, 2, 3, 4, 5];
  const person2 = [2, 1, 2, 3, 2, 4, 2, 5];
  const person3 = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];
  const answer = [0, 0, 0];
  const result = [];

  let index = 0;

  for (let i = 0; i < answers.length; i++) {
    if (person1[i % 5] == answers[i]) answer[0] += 1;
    if (person2[i % 8] == answers[i]) answer[1] += 1;
    if (person3[i % 10] == answers[i]) answer[2] += 1;
  }
  const maxVal = Math.max(answer);
  for (let i = 0; i < 3; i++) {
    if (maxVal == answer[i]) {
      result[index] = i + 1;
      index += 1;
    }
  }
}
