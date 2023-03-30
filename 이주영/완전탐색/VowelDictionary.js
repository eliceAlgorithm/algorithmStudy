function solution(word) {
  var answer = 0;

  // 모음사전의 규칙에 따라 모음사전을 작성해 나갈 것이다. 단, 카운트를 셀 것임.
  let count = 1;
  let currentWord = ['A'];
  // 단어의 길이
  let currentLength = 5;
  const vowel = ['A', 'E', 'I', 'O', 'U'];
  let vowelP = 0;
  let dictP = 0;

  // 현재 단어와 주어진 단어가 같으면 반복문 종료
  while(currentWord.join('') !== word && count < 1000) {
    // 단어의 길이가 
    if(currentLength === 1) {

    }
    // A , AA, .. 단어 규칙을 적용할 것. 단, 현재 단어의 길이보다 작게 적용함.
    if(currentWord.length < currentLength) {
        currentWord.push(vowel[vowelP]);
        dictP ++;
    } else {
      // vowelP에 맞게 vowel을 참고하여 사전을 작성한다.
      if(++vowelP < vowel.length) {
        currentWord[dictP] = vowel[vowelP];
      } else {
        vowelP = 0;
        // 수정할 사전 포인터dictP를 한 칸 뒤로 옮긴다.
        dictP--;
        // 예를 들어, 5글자 목록에서 4글자 목록으로 넘긴다.
        currentWord.pop();
        currentLength--;
      }
    }
    console.log(currentWord.join(''));
    count++;
  }
  answer = count;

  return answer;
}

console.log(solution('EEEEE'));