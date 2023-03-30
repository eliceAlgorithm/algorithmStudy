function solution(answers) {
  var answer = [];
  let cnt1 = 0, cnt2 = 0, cnt3 = 0;
  const supoja1 = {
      ans : [1,2,3,4,5],
      value : 1
  };
  const supoja2 = {
      ans : [2,1,2,3,2,4,2,5],
      value : 2
  };
  const supoja3 = {
      ans : [3,3,1,1,2,2,4,4,5,5],
      value : 3
  };
  for(let i = 0; i < answers.length; i++) {
      if(answers[i] === supoja1.ans[i % 5]) cnt1 += 1;
      if(answers[i] === supoja2.ans[i % 8]) cnt2 += 1;
      if(answers[i] === supoja3.ans[i % 10]) cnt3 += 1;
  }
  if(cnt1 >= cnt2 && cnt1 >= cnt3) answer.push(supoja1.value);
  if(cnt2 >= cnt1 && cnt2 >= cnt3) answer.push(supoja2.value);
  if(cnt3 >= cnt1 && cnt3 >= cnt2) answer.push(supoja3.value);
  return answer;
}