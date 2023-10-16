function solution(x1, x2, x3, x4) {
//     let first = (a, b) => {
//         return a || b ? true : false
//     };
    
//     let second = (a, b) => {
//         return a && b ? true : false
//     };
    
//     return second(first(x1,x2),first(x3,x4));
    return (x1||x2) && (x3||x4)
}
