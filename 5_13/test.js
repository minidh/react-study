// 1번째 방법
// {
// let pi = 3.141592
// console.log (`number s의 pi는 ${pi}입니다.`);
// }

//2번째 방법
// function sample() {
//     let pi = 3.141592
//     console.log(`test.js의 pi는 ${pi}입니다`)
// }
// sample();

//3번째 방법
//사용이유: var만 지원하는 internet explorer에 대응하기 위하여
(function () {
    let pi = 3.141592
    console.log(`test`)
})