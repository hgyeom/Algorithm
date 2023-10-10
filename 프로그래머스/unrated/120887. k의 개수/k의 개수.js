function solution(i, j, k) {
    // let answer = 0;
    // for(i; i <= j; i++){
    //     answer += [...i.toString()].filter(item => item == k).length
    // }
    // return answer;
    let a ='';
    for(i;i<=j;i++){
        a += i;
    }

    return a.split(k).length-1;
}