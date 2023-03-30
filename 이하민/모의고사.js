function solution(answers) {
    var answer = [];
    
    const choose_1 = [1, 2, 3, 4, 5];
    const choose_2 = [2, 1, 2, 3, 2, 4, 2, 5];
    const choose_3 = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];
    let cnt_1 = 0;
    let cnt_2 = 0;
    let cnt_3 = 0;
    
    for (let i = 0; i < answers.length; i++) {
        answers[i] === choose_1[i % 5] && cnt_1++;
        answers[i] === choose_2[i % 8] && cnt_2++;
        answers[i] === choose_3[i % 10] && cnt_3++;
    }
    console.log(cnt_1, cnt_2, cnt_3);
    if (cnt_1 >= cnt_2 && cnt_1 >= cnt_3)
        answer.push(1);
    if (cnt_2 >= cnt_1 && cnt_2 >= cnt_3)
        answer.push(2);
    if (cnt_3 >= cnt_1 && cnt_3 >= cnt_2)
        answer.push(3);
    return answer;
}

console.log(process);