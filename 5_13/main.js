// 타이머 함수
// 특정 시간마다 혹은 특정 시간 이후에 콜백 함수를 호출할 수 있는 함수
// setTimeout() ==> 특정 시간 이후에 함수를 한번 호출
// setInterver() ==> 특정 시간마다 함수를 호출
// setTimeout(함수, 시간)
setTimeout(() =>{
    console.log('1초마다 실행됩니다.')
}, i * 1000);

let count = 0;
setInterval(() =>{
    console.log(`1초마다 실행됩니다.(${count}번째 시행)`);
    count++
}, 1 * 1000);


// clearTimeout(타이머id), clearInterval(타이머id)
// 타이머id는 setTimeout, setInterval을 호출했을 때 리턴값을
let id
let count2 = 0
id = setInterval(() => {
    console.log(`1초마다 실행됩니다2(${count2}번째)`);
    count2++
}, 1 * 1000);

setTimeout(() => {
    console.log('타이머를 종료합니다.');
    clearInterval(id);
},5 * 1000);


// 이름 충돌 문제 발생
// 예를 들어서 다른 곳에서 가져온 코드pi 이름이 있고
// 내가 만든 코드에서도 pi 이름이 있다면?
// 변수가 존재하는 범위를 어려운 말로 스코프
// 스코프 같은 단계에 있을 경우 무조건 충돌이 일어난다
// 자바스크립트에서는 중괄호를 사용하여 블록을 만들거나, 함수를 생성해서 블록을 만들어
// 스코프 단계를 변경한다
let pi = 3.14
    console.log(`main.js의 pi는 ${pi}`);

// 엄격모드
// 문자열을 읽어들인 순간부터 코드를 엄격하게 검사한다
{
    'use strict'
    data = 10;
    console.log(data);
}


//익명 함수와 선언적 함수가 있는데, 최근에는 익명 함수를 많이 쓰는 추세가
// 익명 함수는 기본적으로 순차적으로 코드 실행에서 코드가 해당 줄을 읽을때 생성

let 익명함수
익명함수 = function(){
    console.log('2번째 익명함수 입니다')
}
익명함수();
function 선언적함수 () {
    console.log('2번째 선언적함수 입니다')
}

// 선언적 함수와 익명 함수가 조합된 경우에는?
// 익명 함수 선언
function 함수() {
    console.log('선언적 함수 입니다');
}
함수();

//
let 함수2 = function() {
    console.log('익명함수 입니다.');
}
function 함수2() {
    console.log('선언함수 입니다.');
}
함수2()


// 객체란 "실제로 존재하는 사물"을 의미하고 "이름"과 "값"으로 구성된 JS 기본 데이터 타입
console.log(typeof([]));
const array = ['사과', '바나나', '감'];
// 배열에는 인덱스, 요소가 있다.
// 요소에 접근할 때 array[0], array[1], array[2]

// 배열은 객체를 기반하였을 때
const product = {
    제품명 : "건조 망고",
    유형 : "건조 식품",
    성분 : "망고, 설탕, 색소",
    원산지 : "베트남",
    기능 : function (맛있음) {}
}

// 리액트에서는 단순히 웹디자인만 하는게 아니다.
// 리액트의 핵심은 데이터를 어떻게 가공해서 보여주고, 어떻게 저장할 것이냐
// 데이터베이스를 얼마나 잘 사용할 수 있느냐
// 데이터베이스의 정보를 객체에 저장하기 때문에
// 객체에 있는 메소드를 활용해서 데이터베이스의 정보를 외부로 보여준다

const pet = {
    name : "코코",
    eat : function (food) {
        alert(this.name+ '은/는'+food+'을/를 먹습니다')
    }
}
pet.eat(밥)
// 코코는 밥을 먹지 않습니다.

pet.나이 = '2';
pet.종 = '고양이';
console.log(JSON.stringify(pet, null, 2));


delete pet.나이;
console.log(JSON.stringify(pet, null, 2));
