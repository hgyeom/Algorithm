function solution(t, p) {
    let answer = 0;
    for(let i = 0; i <= t.length - p.length; i++){
        let match = t.slice(i, i+p.length)
            if(Number(match) <= Number(p)) answer++
            
    }
    return answer;
}
