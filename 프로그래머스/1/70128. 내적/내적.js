function solution(a, b) {
//sum = 이전 함수 호출 결과. 초기값 0. c = 현재 배열 요소. i = 인덱스 위치. c는 필요 없으나 넣지 않으면 null값이 되기에 추가 
    return a.reduce((sum,c,i) => sum += a[i] * b[i], 0);
}