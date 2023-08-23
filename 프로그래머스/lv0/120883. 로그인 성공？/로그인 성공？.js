function solution(id_pw, db) {
    const [id, pw] = id_pw;
    for([dbid, dbpw] of db){
        if(id === dbid && pw === dbpw) return 'login' 
        else if(id === dbid) return 'wrong pw'
    }
    return 'fail'
}