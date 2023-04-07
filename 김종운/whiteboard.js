function solution(n, computers) {
  var answer = 0;
  const visited = Array(n).fill(false);
  let count = 0;

  DFS = (index, visited, computers) => {
    count++;
    visited[index] = true;
    for (let i = 0; i < computers.length; i++) {
      if (computers[index][i] === 1 && !visited[i]) DFS(i, visited, computers);
    }
  };

  for (let i = 0; i < n; i++) {
    if (!visited[i]) {
      DFS(i, visited, computers);
      answer++;
    }
  }
  return answer;
}

console.log(
  solution(3, [
    [1, 1, 0],
    [1, 1, 0],
    [0, 0, 1],
  ])
);
