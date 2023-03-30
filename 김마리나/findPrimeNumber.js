// 완전탐색 알고리즘 - 순열과 조합, 2차원 배열의 중복값 제거, 정규식, 소수판별
function get_permutions(array, selectNumber) {
    let result = [];
    if (selectNumber === 1) {
        return array.map((item) => [item]);
    }

    array.forEach((fixed, index, origin) => {
        const rest = [...origin.slice(0, index), ...origin.slice(index + 1)];
        const permutions = get_permutions(rest, selectNumber - 1);
        const attached = permutions.map((item) => [fixed, ...item]);
        result.push(...attached);
    });

    return result;
}
// 2차원 배열 중복 제거, 맨 앞이 0인 원소 제거
function remove_numbers(array) {
    let result = [];
    for (let i = 1; i <= array.length + 1; i++) {
        result.push(...get_permutions(array, i));
    }
    // 문자열 형태의 1차원 배열로 만든 다음, set으로 만들어 중복을 제거 후 다시 숫자형의 2차원 배열로 만듦
    return [...new Set(result.join("|").split("|"))]
        .filter((item) => item[0] !== '0')
        .map((item) => item.replace(/,/g, ""))
        .map((item) => +item);
}

function is_primes(number) {
    if (number === 1) return false;
    for(let i = 2; i <= Math.sqrt(number); i++) {
        if (number % i === 0) {
            return false;
        }
    }
    return true;
}


function solution(numbers) {
    const array = numbers.split("").map((item) => +item);
    const removeArray = remove_numbers(array);
    let count = 0;

    removeArray.forEach((number) => {
        if (is_primes(number)) count++;
    });
    return count;
}


// 테스트 케이스
console.log(solution("17")); // 소수 [7, 17, 71], 3
console.log(solution("011")); // 소수 [11, 101], 2
console.log(solution("3330")); // 소수 [3], 1
console.log(solution("0000000")); // 소수 없음, 0
console.log(solution("1")); // 0
