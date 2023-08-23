function solution(id_pw, db) {
    var answer = '';
    const arr = db.map(v => {
        const [id, pw] = v;
        if(id === id_pw[0] && pw === id_pw[1]) return 'login'
        else if(id === id_pw[0]) return 'wrong pw'
        else return 'fail'
    })
    
    if(arr.includes('login')) return 'login'
    else if(arr.includes('wrong pw')) return 'wrong pw'
    else return 'fail'
}