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


/*
  구조분해할당 (Destructing)

  1 배열 구조분해할당
  2 객체 구조분해할당
*/


/*
  배열 구조분해할당

  간단하게 배열의 아이템을 변수에 할당할 수 있다
*/


// 기존의 방법
// var beers = ["Guinness", "Heineken", "Budwiser"];

// var irishBeer = beers[0];
// var dutchBeer = beers[1];
// var americanBeer = beers[2];

// console.log(irishBeer);
// console.log(dutchBeer);
// console.log(americanBeer);


// 구조분해할당
// var beers = ["Guinness", "Heineken", "Budwiser"];

// // 구조분해할당
// var [irishBeer, dutchBeer, americanBeer] = beers;

// console.log(irishBeer);
// console.log(dutchBeer);
// console.log(americanBeer);


// 매개변수에서 
// var beers = ["Guinness", "Heineken", "Budwiser"];

// f(beers);

// // 구조분해할당
// function f([irishBeer, dutchBeer, americanBeer]) {
//   console.log(irishBeer);
//   console.log(dutchBeer);
//   console.log(americanBeer);
// }


/*
  Q. 배열구조분해할당

  각각의 브랜드를 구조분해할당으로 변수에 할당해보세요
*/


// var asianCars = ["현대", "토요타"];

// var koreaCar = asianCars[0];
// var japanCar = asianCars[1];

// var [koreaCar, japanCar] = asianCars;

// console.log(koreaCar);
// console.log(japanCar);

// f(asianCars);

// function f([koreaCar, japanCar]) {
//   console.log(koreaCar);
//   console.log(japanCar);
// }


/*
  객체 구조분해할당

  객체의 속성을 간단하게 변수에 할당할 수 있다
*/


// 기존의 방법
// var irishBeer = {
//   name: "Guinness",
//   origin: "Ireland",
//   available: false
// }

// var name = irishBeer.name;
// var origin = irishBeer.origin;
// var available = irishBeer.available;

// console.log(name);
// console.log(origin);
// console.log(available);


// 구조분해할당 방법
// var irishBeer = {
//   name: "Guinness",
//   origin: "Ireland",
//   available: false
// }

// // 구조분해할당
// var { name, origin, available } = irishBeer;

// console.log(name);
// console.log(origin);
// console.log(available);


// 매개변수에서
// var irishBeer = {
//   name: "Guinness",
//   origin: "Ireland",
//   available: false
// }

// f(irishBeer);

// // 구조분해할당
// function f({ name, origin, available }) {
//   console.log(name);
//   console.log(origin);
//   console.log(available);
// }


/*
  Q. 구조분해할당

  구조분해할당후 객체의 각 속성에 접근해보세요
*/


// var car = {
//   name: "GV80",
//   color: "Black",
//   brand: "GENESIS"
// };

// var {name, color, brand} = car;

// console.log(name);
// console.log(color);
// console.log(brand);


/*
  스프레드 연산자 (Spread Operator)

  1 배열에서 사용
  2 객체에서 사용
*/


/*
  배열에서 사용

  배열의 아이템을 간단하게 복사할 수 있다
  
  - 사용방법
  ...복사할 배열
*/


// var beers = ["Guinness", "Heineken"];
// var newBeer = "Budwiser";

// var updatedBeers = [...beers, newBeer];

// console.log(updatedBeers);


/*
  Q. 배열

  스프레드 연산자를 사용하여 아시아 자동차 리스트를 만들어보세요
*/


// var koreanCars = ["현대", "기아"];
// var japaneseCars = ["토요타", "혼다"];

// var asiaCars = [...koreanCars, ...japaneseCars];

// console.log(asiaCars);


/*
  객체에서 사용

  객체의 속성을 간단하게 복사할 수 있다

  - 사용방법
  ...복사할 객체
*/


// var cat = {
//   name: "치즈",
//   age: 1,
//   home: null
// }

// // 치즈가 삼산동으로 입양됨
// var updatedCat = { ...cat, home: "삼산동" };

// console.log(updatedCat);


/*
  Q. 객체에서 사용

  기네스가 재입고 되었습니다
  스프레드 연산자를 사용하여 업데이트된 객체를 생성해보세요
*/


// var irishBeer = {
//   name: "Guinness",
//   origin: "Ireland",
//   available: false
// };

// var updatedBeer = { ...irishBeer, available: true };

// console.log(updatedBeer);


/*
  프로미스 (Promise) 객체

  비동기 작업의 결과와 데이터를 저장한다
  비동기 작업의 가독성을 향상시킨다

  1 프로미스의 구조
  2 async / await
*/


/*
  프로미스의 구조

  1 res, rej 함수

  1) res (resolve)
  작업이 성공했을 때 호출된다

  2) rej (rejected)
  작업이 실패했을 때 호출된다


  2 프로미스의 결과 (상태)

  1) fullfilled
  비동기 작업의 성공

  2) rejected
  비동기 작업의 실패

  3) pending
  성공 또는 실패를 기다리는 상태


  3 프로미스의 메서드

  1) then
  성공했을 때 데이터를 처리하는 메서드

  2) catch
  실패했을 때 에러를 처리하는 메서드

  3) finally
  최종 작업을 처리하는 메서드
*/


// 프로미스 객체
// const promise = new Promise((res, rej) => {
//   // 비동기 작업의 성공
//   res("야옹");
// })


// // 프로미스 객체 사용
// promise
//   .then((data) => { // 데이터를 처리하는 부분
//     console.log("서버에서 받은 데이터:", data);
//   })
//   .catch((error) => { // 에러를 처리하는 부분
//     console.log("에러:", error);
//   })


/*
  async / await

  프로미스 작업의 가독성을 향상시킨다
  try / catch 구문과 함께 사용된다
*/


const promise = new Promise((res, rej) => {
  res("야옹");
})

async function f() {
  try {

    // 프로미스 객체가 결과를 반환할 때까지 기다린다(await)
    const data = await promise;

    console.log("서버에서 받은 데이터:", data);

  } catch (error) { // 에러처리
    console.log("에러:", error);
  }
}

f();