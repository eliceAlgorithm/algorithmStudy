function solution(n, lost, reserve) {
    // reserve의 요소들 중 lost에 동일한 값이 있다면, 그 값을 reserve에서 제거
    let set_lost = lost.filter(x => !reserve.includes(x));
    let set_reserve = reserve.filter(x => !lost.includes(x));
    // console.log(set_lost, set_reserve);
    
    let findIdx = 0;
    // reserve가 체육복을 빌려줄 때, 왼쪽부터 탐색
    for (let i of set_reserve) {
        if (set_lost.includes(i - 1)) {
            findIdx = set_lost.indexOf(i - 1);
            if(findIdx > -1) set_lost.splice(findIdx, 1);
        }
        else if (set_lost.includes(i + 1)) {
            findIdx = set_lost.indexOf(i + 1);
            if(findIdx > -1) set_lost.splice(findIdx, 1);
        }
    }
    return n - set_lost.length; 
}