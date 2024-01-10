function solution(s){
    let check = 0
    for(let i = 0; i < s.length; i++){
        s[i] === "(" ? check++ : check--
        if(check < 0) return false;
    }
    if(check !== 0) return false
    return true;
}