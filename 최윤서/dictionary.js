function solution(word) {
    let alphabet = ["A","E","I","O","U"];
    let dictionary = [];
    for(a of alphabet){
        dictionary.push(a);
        for(b of alphabet){
            dictionary.push(a+b);
            for(c of alphabet){
                dictionary.push(a+b+c);
                for(d of alphabet){
                    dictionary.push(a+b+c+d);
                    for(e of alphabet){
                        dictionary.push(a+b+c+d+e);
                    }
                }   
            }
        }
    }

    var answer = dictionary.indexOf(word);
    return answer+1;
}
console.log(solution("AAAAE"));
