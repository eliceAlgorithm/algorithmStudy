function solution(n) {
    let answer = 0;
    for (let i = 0; i < n; i++){
        let table = new Array(n);
        table[0] = i;
        findQ(table,0);
    }
    function findQ(table, r){
        if(n === r+1) {
            answer++;
        }
        else {
            for (let i = 0; i < n; i++){
                table[r+1] = i
                if(check(table, r+1)){
                    findQ(table, r+1);
                }
            }
        }
    }
    function check (table,r){
        for (let i = 0; i < r; i++){
            if(table[i] === table[r]){
                return false;
            }
            if(Math.abs(i-r) === Math.abs(table[i] - table[r])){
                //Math.abs(i-r) x 좌표 Math.abs(table[i] - table[r] y 좌표
                return false;
            }
        }
        return true;
    }
    return answer;
}
console.log(solution(5));
