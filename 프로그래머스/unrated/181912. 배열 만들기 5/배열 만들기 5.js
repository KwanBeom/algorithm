function solution(intStrs, k, s, l) {
    return intStrs.map(item => 1 * item.slice(s, s+l)).filter(item => item > k);
}