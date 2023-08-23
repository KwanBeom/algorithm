function solution(score) {
    const avg = score.map(nums => {
        return (nums[0] + nums[1]) / 2
    })
    const sortAvg = [...avg].sort((a,b) => b-a)
    
    return avg.map(v => sortAvg.indexOf(v) + 1)
}