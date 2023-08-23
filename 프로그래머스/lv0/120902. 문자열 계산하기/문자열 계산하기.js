function solution(my_string) {  
    const nums = [];
    const operators = [];
    my_string.split(' ').map(v => {
        if(1*v) nums.push(1*v);
        else operators.push(v)
    })
    let acc = nums[0];
    for(let i=0; i<operators.length; i++){    
        switch(operators[i]){
            case '+': acc += nums[i+1];
                break;
            case '-': acc -= nums[i+1];
        }
    }
    return acc
}