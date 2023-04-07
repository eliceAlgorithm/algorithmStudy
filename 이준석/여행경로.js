function solution(tickets) {
  var answer = [];
  function serch(target, othres, result) {
    if (othres.length === 1) {
      answer.push([...result, othres[0][0], othres[0][1]]);
    }
    for (let i = 0; i < othres.length; i++) {
      if (target === othres[i][0]) {
        serch(
          othres[i][1],
          [...othres.slice(0, i), ...othres.slice(i + 1)],
          [...result, othres[i][0]]
        );
      }
    }
  }
  serch("ICN", tickets, []);
  return answer.sort()[0];
}
