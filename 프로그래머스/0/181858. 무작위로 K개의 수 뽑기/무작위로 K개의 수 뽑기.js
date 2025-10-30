function solution(arr, k) {
    // k개의 수를 배열에 저장
    // 랜덤으로 뽑아서, 처음 뽑는 수면 배열 맨 뒤에 추가
    let answer = [];
    
    for(let i = 0; i < arr.length; i++) {
        
        if(answer.length == k){
            break;
        }
        
        if(!answer.includes(arr[i])){
           answer.push(arr[i]);
        }   
    };
    
    while (answer.length < k) {
        answer.push(-1);
    }
    
    console.log(answer)
    return answer;
}