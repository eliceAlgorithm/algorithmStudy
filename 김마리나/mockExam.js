// 각자 맞춘 문제의 개수를 카운트하는 함수
function getCount(arr, newAnswers) {
    let count = 0;
    let idx = 0;
    // 시험 문제를 하나씩 넘겨주면서
    for(let i = 0; i < newAnswers.length; i++) {
        // 맞췄다면 카운트 증가
        if (newAnswers[i] === arr[idx]) count++;
        // 찍는방식 배열의 마지막에 도달했다면 태초로 돌아감
        if (idx === arr.length - 1) {
            idx = 0;
        }
        else {
            idx++;
        }
    }
    return count;
}

// 가장 높은 점수를 받은 학생 배열을 구하는 함수
function getHighScore(scores) {
    // 값(맞은 개수)를 기준으로 내림차순 sort 
    let result = scores.sort((a, b) => b[1] - a[1]);
    let max = result[0][1];
    // 최댓값 이상인 학생만 남기고(filter), 학생 번호만 남긴 1차원 배열을 만듦(map)
    result = result.filter((a) => a[1] >= max).map((a) => a[0]);

    // console.log(remove_result, max);
    
    return result;
}

function solution(answers) {
    const newAnswers = answers.slice(); // 배열(깊은)복사

    let one_count = getCount([1, 2, 3, 4, 5], newAnswers);
    let two_count = getCount([2, 1, 2, 3, 2, 4, 2, 5], newAnswers);
    let three_count = getCount([3, 3, 1, 1, 2, 2, 4, 4, 5, 5], newAnswers);

    // 키(학생), 값(맞은 문제 개수) 쌍을 이차원 배열로 선언
    const scores = [[1, one_count], [2, two_count], [3, three_count]];

    // console.log(`맞은 문제 개수: ${scores}`);

    return getHighScore(scores);
}


//테스트케이스
console.log(solution([1,2,3,4,5])); // [1]
console.log(solution([1,3,2,4,2])); // [1,2,3]
console.log(solution([2,3,4,5,1])); // [2,3]
console.log(solution([3,3,2,1,5])); // [3]
console.log(solution([5,5,4,2,3])); // [1,2,3]