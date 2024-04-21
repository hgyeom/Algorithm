function solution(a, b, c, d) {
   
    // 네 주사위가 모두 같으면 1111 * x
    // 세 주사위가 같다면 (10*x+y)제곱
    // 두 개씩 같다면 (a+b) * |a-b|
    // 두 개만 같고(a) 두 개는 서로 다르다면 (c,d) c*d
    // 모두 다르다면 가장 작은 수
    let numbers = [a,b,c,d];
    
    // 중복된 값의 수 구하기(Map)
    const result = numbers.reduce((accu,curr)=> {
        accu.set(curr, (accu.get(curr)||0) +1) ;
        return accu;
    },new Map());
    
    // Map을 정렬하기 위해 사용
    let sortedNumbers = [...result].sort((a,b) => b[1] - a[1]);
    console.log(sortedNumbers)
    for(let [key,value] of sortedNumbers){
        
        // 4개가 같으면
        if (value === 4) return 1111 * key;
        
        if (value === 3) {
            let q = sortedNumbers[1][0];
            return (10 * key + q) ** 2;
        }
        
        // 2개가 같고 ( a === b)
        if (value === 2){
            
            // 나머지 2개가 같으면(c === d)
            if(sortedNumbers.length === 2){
                let q = sortedNumbers[1][0];
                return (key+q) * Math.abs(key-q);
            }
            // 나머지 2개가 다르면( c !== d)
            else if(sortedNumbers.length === 3){
                let p = sortedNumbers[1][0];
                let q = sortedNumbers[2][0];
                return p * q;
            }
        }
        
        // 모두 다르면
        if(value === 1 && sortedNumbers.length === 4) return Math.min(a,b,c,d)
    }
    
    
    
    
    let answer = 0 
    return answer;
}