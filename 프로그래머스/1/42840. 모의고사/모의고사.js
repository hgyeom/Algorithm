function solution(answers) {
    const score = [0,0,0];
    
    const supo1 = [1,2,3,4,5];
    const supo2 = [2,1,2,3,2,4,2,5];
    const supo3 = [3,3,1,1,2,2,4,4,5,5];

    for(let i = 0; i < answers.length; i++){
        if(answers[i] === supo1[i % supo1.length]) score[0]++;
        if(answers[i] === supo2[i % supo2.length]) score[1]++;
        if(answers[i] === supo3[i % supo3.length]) score[2]++;
    }

    const max = Math.max(...score);

    return score
        .map((item,index)=> item === max ? index+1 : null)
        .filter(item => item !== null);
}
