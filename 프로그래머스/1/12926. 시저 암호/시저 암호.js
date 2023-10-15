function solution(s, n) {
    var answer = '';
    for(let i=0; i<s.length; i++){
        answer += exchange(s[i],n)
    }

    return answer;
}

const exchange = (string, n) => {
    if(string === ' ') return ' '
    const alp = 'abcdefghijklmnopqrstuvwxyz';
    const smallLetter = string.toLowerCase();
    while(!(alp.indexOf(smallLetter) + n < 26)) n-=26
    return string === smallLetter ? alp[alp.indexOf(smallLetter) + n] :  alp[alp.indexOf(smallLetter) + n].toUpperCase();
}