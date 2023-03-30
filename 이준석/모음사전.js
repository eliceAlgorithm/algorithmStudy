function solution(word) {
  var answer = 0;
  const stand = ["A", "E", "I", "O", "U"];
  word.split("");
  const set = new Set();
  function pick(comb, others) {
    if (comb.length !== 0) set.add(comb.join(""));
    for (let i = 0; i < others.length; i++) {
      if (comb.length === 5) break;
      pick([...comb, others[i]], others);
    }
  }
  pick([], stand);

  return [...set].sort().indexOf(word) + 1;
}
