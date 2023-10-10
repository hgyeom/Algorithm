function solution(i, j, k) {
    let answer = 0;
    for(i; i <= j; i++){
        answer += [...i.toString()].filter(item => item == k).length
    }
    return answer;
}