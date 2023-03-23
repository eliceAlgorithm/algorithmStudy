function solution(participant, completion) {
  var answer = '';
  let m = new Map();
  for(let i in completion) {
      if(m.has(completion[i]))
          m.set(completion[i], m.get(completion[i])+1);
      else
          m.set(completion[i], 1);
  }
  for(let i in participant) {
      if(!m.has(participant[i]) || m.get(participant[i]) === 0)
          answer = participant[i];
      else
          m.set(participant[i], m.get(participant[i])-1);
  }
  return answer;
}