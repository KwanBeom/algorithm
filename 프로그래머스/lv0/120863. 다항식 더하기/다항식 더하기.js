function solution(polynomial) {
     const linear = polynomial.split(' + ').filter(v => v.includes('x')).reduce((a,c) =>{
        const str = c.replace('x', '');
        const current = str === '' ? 1 : 1*str;
        return a + current
         
    }, 0)
     
     const int = polynomial.split('+').filter(v => !v.includes('x')).reduce((a,c) => 1*a + 1*c, 0)

     let txt1 = '', txt2 = '';
    if(linear){
        if(linear === 1) txt1 = 'x'
        else txt1 = linear + 'x'
        if(int) txt2 = ` + ${int}`
    } else if(int) txt2 = int
    
     return txt1 + txt2
}