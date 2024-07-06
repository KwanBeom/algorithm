function isPrime(n) {
    if( n <= 1 )
        return false; 
         
    if( n%2 == 0) 
        return n == 2;
         
    for(let i=3; i<=Math.sqrt(n); i += 2) { 
        if( n % i == 0)
            return false;
    }

	return true; 
}

// 0이 2개 들어가면 split으로 나눈 배열에서 빈칸으로 나옴
function solution(n, k) {
    const target = n.toString(k);
    let cnt = 0;
    const arr = target.split('0');

    
    for(let i=0; i<arr.length; i++) {
        const prev = arr[i - 1];
        const next = arr[i + 1];
        
        // 소수인 경우
        if(isPrime(arr[i])) {
            console.log(arr, arr[i]);
            if(prev && next) {
                // 양쪽에 0이 있는 경우
                cnt++;
                continue;
            } else if (prev === undefined || next === '') {
                // 소수 오른쪽에만 0이 있고 왼쪽에는 아무것도 없는 경우
                cnt++;
                continue;
            } else if (next === undefined || prev === '') {
            // 소수 왼쪽에만 0이 있고 오른쪽에는 아무것도 없는 경우
                cnt++;
                continue;
            } else if (prev === undefined && next === undefined) {
                // 소수 양쪽에 아무것도 없는 경우
                cnt++;
            };
        }
    }
    
    return cnt;
}