function solution(s) {
    const arr = ['zero','one','two','three','four','five','six','seven','eight','nine'];
    arr.map((v,i) => s = s.replaceAll(v, i))
    return +s;
}