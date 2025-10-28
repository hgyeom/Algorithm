function transform(arr) {
  return arr.map(num => {
    if (num >= 50 && num % 2 === 0) return num / 2;
    if (num < 50 && num % 2 === 1) return num * 2 + 1;
    return num;
  });
}

function solution(arr) {
  let count = 0;
  let prev = [];
  let curr = arr;

  while (true) {
    const next = transform(curr); // 다음 상태 계산

    // 이전 배열과 다음 배열이 같으면 종료
    if (JSON.stringify(curr) === JSON.stringify(next)) {
      return count;
    }

    curr = next;
    count++;
  }
}
