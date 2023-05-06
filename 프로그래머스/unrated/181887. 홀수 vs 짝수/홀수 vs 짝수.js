function solution(num_list) {
    let a = num_list.filter((item, idx) => idx%2===0)
    let b = num_list.filter((item, idx) => idx%2===1)
    return a.reduce((acc,cur) => acc+cur) > b.reduce((acc,cur)=>acc+cur) ?
        a.reduce((acc,cur) => acc+cur) : b.reduce((acc,cur)=>acc+cur)
}