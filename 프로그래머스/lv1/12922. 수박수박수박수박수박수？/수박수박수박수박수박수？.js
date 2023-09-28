function solution(n) {
    return new Array(n).fill().map((_, i) => i%2?'박':'수').join('');
}