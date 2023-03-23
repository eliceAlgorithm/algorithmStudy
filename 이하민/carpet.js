function checkBrown(y_w, y_h, brown) {
    return y_w + y_h === (brown + 4) / 2 - 4;
}

function solution(brown, yellow) {
    let y_w;
    let y_h;
    var answer = [];
    
    for (let i = 1; i <= yellow / i; i++) {
        if (yellow % i === 0) {
            y_h = i;
            y_w = yellow / i;
            if(checkBrown(y_w, y_h, brown)){
                answer.push(y_w + 2);
                answer.push(y_h + 2);
				return answer;
            }
        }
    }
    
    return 'error';
}

console.log(solution(10, 2));
console.log(solution(8, 1));
console.log(solution(24, 24));