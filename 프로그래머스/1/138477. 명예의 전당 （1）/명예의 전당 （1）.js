function solution(k, score) {
    return score.map((v,i) => {
        const hof = score.slice(0,i+1).sort((a,b)=>b-a).slice(0, k);
        return hof[hof.length-1]
    })
}