function solution(brown, yellow) {
    
    for(let h = 1; h <= yellow; h++){
        if(yellow % h === 0){
            const w = yellow / h
            
            if((w + 2) * (h + 2) === brown + yellow){
                return [w + 2, h + 2]
            }
        }
    }
    
    return [];
}