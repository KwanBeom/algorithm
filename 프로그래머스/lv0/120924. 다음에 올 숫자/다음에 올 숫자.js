function solution(common) {
    const first = common[0], sec = common[1]
          last = common[common.length - 1],
          lastSec = common[common.length - 2], 
          gap = sec - first
    
    if(sec - first === last - lastSec) return last + gap
    else if(first === 1) return last * sec
    else return last * gap
}