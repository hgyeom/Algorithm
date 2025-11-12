function solution(board, moves) {
    let stack = [];
    let score = 0;
    
    for (let move of moves) {
      const col = move - 1; // 인덱스 맞추기
      for (let row = 0; row < board.length; row++) {
          // 해당 열의 행들을 위에서부터 순회
          let box = board[row][col];
          if(box !== 0) {
              stack.push(box);
              board[row][col] = 0; // 해당 칸을 0으로
              
              const last = stack.length - 1; // 마지막 인형
              // 인형이 2개 이상이고, 마지막 2개의 인형이 같으면
              if (stack.length >= 2 && stack[last] === stack[last - 1]) { 
                stack.pop();
                stack.pop();
                score += 2;
              }
              break; // 인형을 집었으면 다음 move로 넘어감
          }
      }
    }
    return score;
}