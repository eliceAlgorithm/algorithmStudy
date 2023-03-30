function solution(word) {
	var answer = 0;
	//모음
	const vowelWord = ['A', 'E', 'I', 'O', 'U'];
	//단어를 하나씩 나눴다
	const word_arr = word.split("");
	//단어 길이 만큼 반복
	for (let i = 0; i < word_arr.length; i++) {
		//모음 개수(5개) 만큼 반복
		for (let j = 0; j < vowelWord.length; j++) {
			//만약 일치한다면 순서 하나 더하고 다음 단어를 체크
			if (word_arr[i] === vowelWord[j]) {
				answer++;
				break;
			}
			//다르다면 각 자리에 맞게 순서를 더해줌
			switch (i) {
				case 0:
					answer += 781;
					break;
				case 1:
					answer += 156;
					break;
				case 2:
					answer += 31;
					break;
				case 3:
					answer += 6;
					break;
				default: //case 4
					answer += 1;
					break;
			}
		}

	}
	console.log(answer);
	return answer;
}

solution('A'); //1
solution('AAAAE'); //6
solution('I'); //1563
solution('EIO'); //1189
solution('AAIE');