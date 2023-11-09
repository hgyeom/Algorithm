function solution(d, budget) {
    // 신청한 금액 모두 지원
    // 신청한 금액의 배열 d, 예산 budget
    // 최대 몇개의 부서에 지원할 수 있는지 return
    
    // 작은 수부터 채워가기 >> sort
    
    return d.sort((a,b) => a-b).filter(i => {
        if(budget - i >= 0){
            budget -= i;
            return true;
        }
        return false
    }).length
}