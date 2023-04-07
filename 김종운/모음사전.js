function solution(word) {
  const alphabets = ["A", "E", "I", "O", "U"]; // 사용 가능한 알파벳 모음
  const arr = [781, 156, 31, 6, 1];
  // [156 * 5 + 1, 31 * 5 + 1, 6 * 5 + 1, 5 * 1 + 1, 1]

  let answer = 0; // 답을 저장할 변수

  for (let i = 0; i < word.length; i++) {
    const index = alphabets.indexOf(word[i]);
    answer += index * arr[i] + 1;
  }
  return answer;
}
