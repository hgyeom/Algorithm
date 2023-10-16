function solution(myString, pat) {
    var answer = '';
    for(let i = 0; i < myString.length; i++){
        let target = myString.slice(i, i+pat.length)
        if(target === pat){
            answer.length < myString.slice(0,i+pat.length)
            answer=myString.slice(0,i+pat.length)
        }
    }
    return answer;
}