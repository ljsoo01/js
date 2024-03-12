// console.log("hello world")

/*
  let, const

  1 let
  2 const
  3 블록 범위
*/

/*
  let
  변수 선언 예약어
  var과 사용법이 거의 같다
*/


// let foo = "bar";


// 재선언 불가
// let foo = "bar";
// let foo = "baz";


/*
  const

  상수(constant) 선언 예약어
*/


// 다음의 형태로만 사용 가능
// const foo = "bar";


/*
  블록 범위
  let과 const는 블록 범위를 갖는다
*/


// { // 블록 (block)
//   var varInBlock = true;
//   let letInBlock = true;
//   const constInBlock = true;
// }


// 블록 밖에서 접근 시도

// console.log(varInBlock);
// 접근 가능
// console.log(letInBlock);
// 접근 불가 - letInBlock is not defined (정의되지 않음)
// console.log(constInBlock);
// 접근 불가 - constInBlock is not defined (정의되지 않음)


/*
  ES5 & ES6 메서드

  1 배열 메서드
  2 기타 메서드
*/


/*
  배열 메서드

  1 forEach
  2 map
  3 filter
*/


/*
  1 forEach

  - 사용 방법
  forEach(콜백)

  콜백의 인자

  1 item
  배열의 각 아이템

  2 index
  각 아이템의 인덱스

  3 self
  원본 배열
*/


// 각 아이템에 10을 곱해야 하는 경우
// var arr = [10, 20, 30];


// arr.forEach(function (item, index, self) {
//   // item - 10, 20, 30
//   // index - 0, 1, 2
//   // self - arr (원본배열)
//   console.log(item * 10);
// })


/*
  map

  forEach와 사용법이 거의 같다
  새 배열을 리턴한다
*/


// 각각의 아이템에 10을 곱한 아이템의 배열이 필요한 경우
// var arr = [10, 20, 30];

// // 새배열을 newArr 변수에 저장한다
// var newArr = arr.map(function (item, index, self) {
//   return item * 10;
// })

// console.log(newArr);
// // [100, 200, 300]


/*
  filter

  필터링된 새 배열을 리턴한다

  - 사용 방법
  filter(콜백)

  콜백의 인자 - item, index, self
*/


// 성인들로만 이루어진 배열이 필요한 경우
// var ages = [13, 20, 34, 40];

// var adults = ages.filter(function (age, index, self) {
//   // return + 필터링 조건
//   return age >= 18;
// })

// console.log(adults);
// // [20, 34, 40]


/*
  Q. 배열 메서드

  아래의 배열을 참고하여 다음 문제들을 풀어보세요

  1 판매중인 맥주의 이름만 출력해보세요

  결과:
  Heineken
  Budwiser
  kirin

  2 판매중인 맥주로만 이루어진 배열을 만들어보세요
*/


// var beers = [
//   { name: "Guinness", available: false },
//   { name: "Heineken", available: true },
//   { name: "Budwiser", available: true },
//   { name: "kirin", available: true },
// ]


// 1
// beers.forEach(function (beer) {
//   if (beer.available) { // beer.available == true
//     console.log(beer.name);
//   } 
// })


// 2
// var selling = beers.filter(function (beer) {
//   return beer.available;
// })

// console.log(selling);

// selling.forEach(beer => {
//   console.log(beer);
// })


/*
  기타 메서드

  1 Object.keys
*/


/*
  Object.keys(객체)

  객체의 키들을 문자열 배열로 리턴한다
*/


// var cat = {
//   name: "치즈",
//   home: null,
//   sound: function () {
//     return "야옹";
//   }
// }

// var keys = Object.keys(cat);

// console.log(keys);
// // [name, home, sound]


/*
  화살표 함수

  익명함수를 더 간단하게 쓰는 방법

  1 기본 사용방법
  2 중괄호 생략
  3 매개변수 괄호 생략
*/


// 기본 사용 방법


// 기존의 방법
// var f = function () {
//   console.log("foo");
// }


// // 2024년
// var f = () => {
//   console.log("foo");
// }


// 중괄호 생략


// 두개의 인자를 더해서 반환하는 함수
// var add = (x, y) => {
//   return x + y;
// }

// // 호출
// var r = add(1, 2);

// console.log(r);


// 중괄호를 생략하는 경우 화살표 뒤의 코드를 리턴한다
// var add = (x, y) => x + y;

// var r =add(1, 2);

// console.log(r);


// 매개변수 괄호 생략


// 매개변수가 하나인 경우 괄호 생략 가능
// var pow = n => n ** 2;
// // pow (power) - 거듭제곱을 구하는 함수

// var r = pow(5);

// console.log(r);
// 25