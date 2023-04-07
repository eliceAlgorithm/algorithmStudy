function solution(numbers, target) {
    let answer = 0;

    function dfs (list, idx) {
        if (idx < list.length) {
            list[idx] *= 1;
            dfs(list, idx + 1);
            list[idx] *= -1;
            dfs(list, idx + 1);
        } else {
            const sum = list.reduce((acc, cur) => acc + cur);
            if (sum === target) {
                answer++;
            }
        }
    } 
    dfs(numbers, 0)
    
    return answer;
}