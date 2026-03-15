function solution(nums) {
    const map = new Map();
    
    // N/2의 값중에 가장 많은 종류를 가질 수 있는 수 return
    for(i of nums){ 
        map.set(i,(map.get(i) || 0) +1)
    }

    return map.size < nums.length / 2 ? map.size : nums.length / 2
}