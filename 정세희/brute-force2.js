function solution(word) {
  const result = [];
  const str = "";
  const dfs = (word, length) => {
      const alphabet = ['A', 'E', 'I', 'O', 'U'];
      if(length === word.length) {
          result.push(word);
          return;
      }
      alphabet.map((w) => {
          dfs(word + w, length);
      });
  };
  for(let i = 1; i <= 5; i++)
      dfs(str, i);
  return result.sort().indexOf(word) + 1;
}