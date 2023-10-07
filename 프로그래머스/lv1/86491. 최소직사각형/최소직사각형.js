function solution(sizes) {
    const width = [], height = [];
    
    sizes = sizes.map(([w,h]) => [Math.min(w,h), Math.max(w,h)]).map(([w,h])=>{
        width.push(w);
        height.push(h);
    })
    
    return Math.max(...height) * Math.max(...width);
}
