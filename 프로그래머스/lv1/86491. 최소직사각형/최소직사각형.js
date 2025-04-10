function solution(sizes) {
    const maxSize = [0,0];
    
    sizes.map(([w,h]) => [Math.min(w,h), Math.max(w,h)]).map(([w,h])=>{
        if(w > maxSize[0]) maxSize[0] = w;
        if(h > maxSize[1]) maxSize[1] = h;
    })
    
    return maxSize[0] * maxSize[1];
}
