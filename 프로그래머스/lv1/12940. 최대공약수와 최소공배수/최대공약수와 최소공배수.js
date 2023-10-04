function solution(n, m) {
    var answer = [0,0];    
    const gcd = getGcd(n,m)

    return [gcd, (n*m)/gcd];
}

function getGcd(a, b) {
	if(b == 0) return a;
	return getGcd(b, a % b);
}