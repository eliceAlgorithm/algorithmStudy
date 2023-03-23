function solution(brown, yellow) {
  const answer = [];
  const carpet_size = brown + yellow; // 넓이

  for (let height = 3; height <= carpet_size / height; height++) {
    var width = Math.floor(carpet_size / height);
    if ((height - 2) * (width - 2) === yellow) {
      return [width, height];
    }
  }
}
