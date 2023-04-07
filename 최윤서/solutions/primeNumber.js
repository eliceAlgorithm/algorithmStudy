function solution(numbers) {
    let numArr = numbers.split('');
    // 순열 코드
    const permutations = arr => {
        if (arr.length <= 2) return arr.length === 2 ? [arr, [arr[1], arr[0]]] : arr;
        return arr.reduce(
          (acc, item, i) =>
            acc.concat(
              permutations([...arr.slice(0, i), ...arr.slice(i + 1)]).map(val => [
                item,
                ...val,
              ])
            ),
          []
        );
    };
    let ppp = permutations(numArr);
    let primeSet = new Set();
    for (a of numArr){
        primeSet.add(parseInt(a));
    }
    for (a of ppp){
        primeSet.add(parseInt(a.join("")));
    }

    var eratosthenes = function(n) {
        // Eratosthenes algorithm to find all primes under n
        var array = [], upperLimit = Math.sqrt(n), output = [];
    
        // Make an array from 2 to (n - 1)
        for (var i = 0; i < n; i++) {
            array.push(true);
        }
    
        // Remove multiples of primes starting from 2, 3, 5,...
        for (var i = 2; i <= upperLimit; i++) {
            if (array[i]) {
                for (var j = i * i; j < n; j += i) {
                    array[j] = false;
                }
            }
        }
        
        for (var i = 2; i < n; i++) {
            if(array[i]) {
                output.push(i);
            }
        }
    
        return output;
    }
    var answer = 0;
    let primeNumbers = eratosthenes(9999999);
    for (p of primeSet){
        if (primeNumbers.indexOf(p) !== -1 ){
            answer ++;
        }
    }
    return answer;
}
console.log(solution("17"));

