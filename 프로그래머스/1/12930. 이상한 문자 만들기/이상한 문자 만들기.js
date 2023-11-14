// function solution(s) {
//     const changeLetterCase = (item,index) => index % 2 === 0 ? item.toUpperCase() : item.toLowerCase();
    
//     return s.split(' ').map(item => item.split('').map((item,index) => changeLetterCase(item,index)).join('')).join(' ')
    
// }


function solution(s) {
    // map함수는 함수를 받아서 실행하기 때문에 changeLetterCase를 바로 집어넣어도 무방하다.
    const changeLetterCase = (item, index) => index % 2 === 0 ? item.toUpperCase() : item.toLowerCase();
    return s.split(' ').map(word => word.split('').map(changeLetterCase).join('')).join(' ')
}