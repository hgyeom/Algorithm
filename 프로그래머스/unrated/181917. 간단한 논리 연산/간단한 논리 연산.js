function solution(x1, x2, x3, x4) {
    let first = (a, b) => {
        if (a || b) return true;
        else return false;
    };
    
    let second = (a, b) => {
        if (a && b) return true;
        else return false;
    };
    
    return second(first(x1,x2),first(x3,x4));
}
