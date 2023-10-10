function solution(num_list) {
    let answer = 0;
    for(let i = 0; i < num_list.length; i++){
        let num = num_list[i];
        for (let j = 0; j < num_list[i]; j++) {
            
            if (num === 1) {
                answer += j;
                break;
            }
            
            if (num % 2 === 0) {
                num = num / 2;
            }
            
            else if (num % 2 === 1) {
                num = (num - 1) / 2;
            }
        }
    }
    return answer;
}