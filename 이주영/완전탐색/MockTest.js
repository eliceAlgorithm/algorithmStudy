function solution(answers) {
  let answer = [];
  
  // 우선 1번, 2번, 3번 답안지의 배열을 생성한다.
  let numberAnswers = [[],[],[]];
  
  // 답안지의 값을, 정답지의 길이 만큼 패턴에 따라 할당한다.
  // 1번
  for(let i = 0; i < answers.length; i++) {
      numberAnswers[0].push(i%5 + 1);
  }
  
  // 2번
  let pattern1 = 1;
  for(let i = 0; i < answers.length; i++) {
      if(i % 2 === 0)
          numberAnswers[1].push(2);
      else {
          numberAnswers[1].push(pattern1);
          // 패턴은 1, 3, 4, 5 형식으로 진행될 것
          pattern1 = pattern1 === 1 ? 3 : pattern1 + 1;
          if(pattern1 > 5)
              pattern1 = 1;
      }
  }
  
  // 3번
  let pattern3 = [3, 1, 2, 4, 5];
  let pointer = 0;
  for(let i = 0; i < answers.length; i++) {
    numberAnswers[2].push(pattern3[pointer]);
    // 2회전마다 pointer을 올리고 체크
    if((i+1) % 2 == 0)
      if(++pointer >= pattern3.length) {
        pointer = 0;
      }
  }
 
  // 정답지와 각 답안지를 비교하여 맞힌 수를 카운트함
  let check = [0, 0, 0];
  answers.forEach((element, i)=> {
    check = check.map((_, j) => {
      return element === numberAnswers[j][i] ? check[j] + 1 : check[j];
    });
  });

  // Math.max인 값을 찾고, 해당 값에 따라 출력 배열 answer을 설정한다
  const max = Math.max(...check);
  check.forEach((count, index) => {
    if(count === max)
      answer.push(index+1);
  });
  
  return answer;
}

console.log(solution([2, 1, 2, 3, 2, 4, 2, 5, 2, 1]));