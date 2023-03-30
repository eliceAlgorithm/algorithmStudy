function solution(answers) {
    function hater1(answers){
        let answers_length = answers.length;
        let answers_temp = [1,2,3,4,5];
        let comp_answer = [];
        while (answers_length >= 5){
            answers_length -= 5;
            comp_answer = comp_answer.concat(answers_temp);
        }
        if( answers_length !== 0 ){
            for (let i = 0; i < answers_length; i++){
                comp_answer.push(answers_temp[i]);
            }
        }
        let score = 0;
        for(let i = 0; i < answers.length; i++){
            if(comp_answer[i] === answers[i]) {score++;}
        }
        return score
    }
    function hater2(answers){
        let answers_length = answers.length;
        let answers_temp = [2,1,2,3,2,4,2,5];
        let comp_answer = [];
        while (answers_length >= 8){
            answers_length -= 8;
            comp_answer = comp_answer.concat(answers_temp);
        }
        if( answers_length !== 0 ){
            for (let i = 0; i < answers_length; i++){
                comp_answer.push(answers_temp[i]);
            }
        }
        let score = 0;
        for(let i = 0; i < answers.length; i++){
            if(comp_answer[i] === answers[i]) score++;
        }
        return score
    }
    function hater3(answers){
        let answers_length = answers.length;
        let answers_temp = [3,3,1,1,2,2,4,4,5,5];
        let comp_answer = [];
        while (answers_length >= 10){
            answers_length -= 10;
            comp_answer = comp_answer.concat(answers_temp);
        }
        if( answers_length !== 0 ){
            for (let i = 0; i < answers_length; i++){
                comp_answer.push(answers_temp[i]);
            }
        }
        let score = 0;
        for(let i = 0; i < answers.length; i++){
            if(comp_answer[i] === answers[i]) score++;
        }
        return score
    }

    let answer = [];
    let scoreH1 = hater1(answers);
    let scoreH2 = hater2(answers);
    let scoreH3 = hater3(answers);

    let max = Math.max(scoreH1,scoreH2,scoreH3)
    if(max===scoreH1){
        answer.push(1);
    }
    if(max===scoreH2){
        answer.push(2);
    }
    if(max===scoreH3){
        answer.push(3);
    }
    return answer;
}
console.log(solution([1,2,3,4,5,2]));
// console.log(solution([1,3,2,4,2]));