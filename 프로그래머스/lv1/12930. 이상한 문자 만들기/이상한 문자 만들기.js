function solution(s) {
    return s.split(' ').map(str => [...str].map((v,i) => i%2 ? v.toLowerCase() : v.toUpperCase()).join('')).join(' ')
}