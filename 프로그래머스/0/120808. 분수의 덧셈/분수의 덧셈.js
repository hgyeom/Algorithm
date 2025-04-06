    
    
    const getGCD = (a,b) => {
        while(b !== 0){
            let temp = b;
            b = a % b;
            a = temp;
        }
        return a;
    }
    

function solution(numer1, denom1, numer2, denom2) {
    
   // 1.공통 분모
  const commonDenominator = denom1 * denom2;

  // 2. 각각의 분자를 공통 분모에 맞게 
  const newNumer1 = numer1 * denom2;
  const newNumer2 = numer2 * denom1;

  // 3. 분자끼리 더하기
  const sumNumerator = newNumer1 + newNumer2;

  // 4. 기약분수로 만들기 위해 분자와 분모의 최대공약수
  const gcd = getGCD(sumNumerator, commonDenominator);

  // 5. 분자와 분모를 최대공약수로 나눠서 기약분수로
  const finalNumerator = sumNumerator / gcd;
  const finalDenominator = commonDenominator / gcd;

  return [finalNumerator, finalDenominator];

}