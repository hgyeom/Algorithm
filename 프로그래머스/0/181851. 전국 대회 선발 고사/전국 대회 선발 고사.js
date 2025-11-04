function solution(rank, attendance) {
    // 0 ~ n-1 중 3 명
    // 참여 여부 = attendance array
    // 등수 = rank array
    // attendance[i]가 true이면서 rank[i]가 높은 3개
    // 1 : a, 2 : b, 3 : c일때
    // 10000 x a + 100 x b + c 
    
    return rank
        .map((r, i) => ({ rank: r, index: i }))     // 1. 인덱스와 rank를 함께 묶음
        .filter(({ index }) => attendance[index])   // 2. 참석한 사람만 남김
        .sort((a, b) => a.rank - b.rank)            // 3. 등수(rank) 기준으로 오름차순 정렬
        .slice(0, 3)                                // 4. 상위 3명만 추출
        .reduce( (acc, cur, idx) => acc + cur.index * [10000, 100, 1][idx], 0 ); 
}