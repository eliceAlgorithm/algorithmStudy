function solution(numbers, target) {
    let count = 0;
    function isTargetNumber(numbers){
        let sum = 0;
        for (n of numbers){
            sum = sum + n;
        }
        if(sum === target){
            count ++;
        }
    }
    function find(numbers){
        let ngtvCnt = 0;
        isTargetNumber(numbers);
        for(n of numbers ){
            if(n < 0) ngtvCnt ++;
        }
        if( ngtvCnt === numbers.length) {
            return 0
        }else{
            if(numbers.at(0) < 0){
                for( n in numbers){
                    if(numbers[n] > 0){
                        for (let i = 0; i < n; i ++){
                            numbers[i] = (-numbers[i]);
                        }
                        numbers[n] = (-numbers[n]);
                        break;
                    }
                }
                find(numbers);
            }else{
                numbers[0] = (-numbers[0]);
                find(numbers);
            }
        }
    }
    find(numbers);
    return count;
}
console.log(solution([1,1,1,1,1],3));