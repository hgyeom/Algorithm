function solution(arr) {
    let i = 0;
    // Math.pow(a,b)는 a에 b를 제곱한 값을 return한다.
    // 2의 i제곱이 배열의 길이보다 작을 때까지 i를 증가시킨다. 
    // 배열의 길이에 대해 2의 거듭제곱 수를 찾기 위한 것.
    while(Math.pow(2,i) < arr.length){
        i++;
    }
    
    // 배열의 길이가 2의 거듭제곱이 될 때까지 반복하며 0으로 채운다.
    for(let j = 0; Math.pow(2,i) - arr.length; j++){
        arr.push(0)
    }
    return arr;
}