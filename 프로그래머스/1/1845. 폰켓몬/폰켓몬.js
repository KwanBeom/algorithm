function solution(nums) {
    const pick = nums.length / 2;
    const set = new Set(nums).size;
    
    return pick < set ? pick : set;
}