function solution(num_list) {
    const even = num_list.filter((item, idx) => idx%2===0).reduce((acc,cur) => acc+cur)
    const odd = num_list.filter((item, idx) => idx%2===1).reduce((acc,cur)=>acc+cur)
    return Math.max(even,odd)
}