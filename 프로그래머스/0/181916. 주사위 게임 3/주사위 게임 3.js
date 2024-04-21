function solution(a, b, c, d) {
   
    // 네 주사위가 모두 같으면 1111 * x
    // 세 주사위가 같다면 (10*x+y)제곱
    // 두 개씩 같다면 (a+b) * |a-b|
    // 두 개만 같고(a) 두 개는 서로 다르다면 (c,d) c*d
    // 모두 다르다면 가장 작은 수
    let numbers = [a,b,c,d];
    
//     // 중복된 값의 수 구하기(Map)
//     const result = numbers.reduce((accu,curr)=> {
//         accu.set(curr, (accu.get(curr)||0) +1) ;
//         return accu;
//     },new Map());
    
//     // Map을 정렬하기 위해 사용. value값(중복 개수)를 기준으로 정렬.
//     let sortedNumbers = [...result].sort((a,b) => b[1] - a[1]);
    
//     for(let [key,value] of sortedNumbers){
        
//         // 4개가 같으면
//         if (value === 4) return 1111 * key;
        
//         if (value === 3) {
//             let q = sortedNumbers[1][0];
//             return (10 * key + q) ** 2;
//         }
        
//         // 2개가 같고 ( a === b)
//         if (value === 2){
            
//             // 나머지 2개가 같으면(c === d)
//             if(sortedNumbers.length === 2){
//                 let q = sortedNumbers[1][0];
//                 return (key+q) * Math.abs(key-q);
//             }
//             // 나머지 2개가 다르면( c !== d)
//             else if(sortedNumbers.length === 3){
//                 let p = sortedNumbers[1][0];
//                 let q = sortedNumbers[2][0];
//                 return p * q;
//             }
//         }
        
//         // 모두 다르면
//         if(value === 1 && sortedNumbers.length === 4) return Math.min(a,b,c,d)
//     }
    
    // Set을 사용하여 중복 파악
    const setNumbers = new Set(numbers);

    if (setNumbers.size === 1) { // Case 1: 모든 주사위가 같을 때
        return numbers[0] * 1111;
    } 
    
    if (setNumbers.size === 2) { // Case 2: 두개가 같을 때
        // 각 주사위 값의 출현 횟수를 카운트
        const counts = {};
        numbers.forEach(num => {
            counts[num] = (counts[num] || 0) + 1;
        });

        // size가 두개이기 때문에 key와 value는 항상 두개이다.
        const [key1, key2] = Object.keys(counts);
        const [val1, val2] = Object.values(counts);

        if (val1 === 2 && val2 === 2) { // Case 2-1: 두개씩 같을 때
            return (Number(key1) + Number(key2)) * Math.abs(Number(key1) - Number(key2));
        }
         else { // Case 2-2: 세 개가 같고 하나가 다를 때
            const [same, diff] = val1 === 3 ? [key1, key2] : [key2, key1];
            const score = Math.pow(10 * same + Number(diff), 2);
            return score;
        }
    } 
    
    if (setNumbers.size === 3) { // case 3: 두 개가 같고, 두 개가 서로 다를 때
        // 첫 번째 인덱스와 마지막 인덱스가 다르면 중복값이다( 1, 2, 1, 3이라면 첫 번째는 0, 마지막은 2)
        const duplicateNumber = 
              numbers.find((num, index) => numbers.indexOf(num) !== numbers.lastIndexOf(num));
        const uniqueNumbers = numbers.filter(num => num !== duplicateNumber);
        return uniqueNumbers[0] * uniqueNumbers[1];
    }
    
    else { // Case 3: 모두 다를 때
         return Math.min(...numbers);
    }
}
