function solution(word) {
  var answer = 0;
  const vowel = ['A', 'E', 'I', 'O', 'U'];
  const value = [781, 156, 31, 6, 1];
  let valueP = 0;
  
  [...word].forEach(digit=> {
      answer += value[valueP] * vowel.indexOf(digit) + 1
      valueP++;
  })
  
  return answer;
}