function solution(arr) {
    let min = -1;
    let max = -1;

    arr.forEach((item, index) => {
        if (item === 2) {
            if (min === -1) min = index; 
            max = index;
        }
    });
    
    if (min === -1) return [-1];
    
    return arr.slice(min, max + 1);
}