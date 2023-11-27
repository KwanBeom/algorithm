const isPrime = (num) => {
    if(num <= 1) return false;
    if(num === 2) return true;
    if(num % 2 === 0) return false;
    
    for(let i=3; i<=Math.sqrt(num); i+=2){
        if(num % i === 0) return false;
    }
    
    return true;
}

function solution(nums) {
    let result = 0;
    
    for(let i=0; i<nums.length; i++) {
        for(let j=i+1; j<nums.length; j++) {
            for(let k=j+1; k<nums.length; k++){
                result += isPrime(nums[i] + nums[j] + nums[k]);
            }
        }
    }
    
    return result;
}

