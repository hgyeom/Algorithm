function solution(a, b) {
    // 변수	    
    // i, j	    문자열의 끝 인덱스 (1의 자리부터 처리)
    // carry	자리 올림
    // sum	    두 자리의 합 + 올림
    // result	계산 결과 문자열 (왼쪽으로 누적)
    
    // ex:
    // a = "456", b = "77" →
    // 1번째 반복: 6 + 7 + 0 = 13
    // 2번째 반복: 5 + 7 + 1(올림) = 13
    // 3번째 반복: 4 + 0 + 1 = 5
    // 10 이상이면 올림이 생김 (예: 13 / 10 = 1 → carry = 1)
    
    let i = a.length - 1;
    let j = b.length - 1;
    let carry = 0;
    let result = '';

    while (i >= 0 || j >= 0 || carry) {
      const sum =
        (i >= 0 ? +a[i--] : 0) +
        (j >= 0 ? +b[j--] : 0) +
        carry;

      carry = Math.floor(sum / 10);
      result = (sum % 10) + result;
    }
    return result;
}