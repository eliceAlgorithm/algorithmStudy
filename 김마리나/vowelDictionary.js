function makeVowelDict(arr, num) {
    const result = [];
    if (num === 1) return arr.map((item) => item);

    arr.forEach((fixed, index, origin) => {
        // 중복 순열
        const rest = origin;
        const permutations = makeVowelDict(rest, num - 1); 
        const attached = permutations.map((item) => fixed + item); 
        result.push(...attached);
    });

    return result;
}

function solution(word) {
    const vowels = ['A', 'E', 'I', 'O', 'U'];
    const vowel_dict = [];

    for (let i = 1; i <= 5; i++) {
        vowel_dict.push(...makeVowelDict(vowels, i));
    }

    vowel_dict.sort()

    for (let idx = 0; idx < vowel_dict.length; idx++) {
        if (word === vowel_dict[idx]) {
            return idx + 1;
        }
    }
    return "매칭되는 단어가 없습니다.";
}


// 테스트케이스
console.log(solution("AAAAE")); // 6