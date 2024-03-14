import {
  useEffect,
  useRef
} from "react";


export default App;


function App() {
  return <Snippet />
}

/*
  리액트 기본

  1 기본 사용방법
  2 실제로 트리에 접근하기
  3 useRef Hook
*/

/*
  기본 사용방법

  가상 트리가 실제 트리로 변환된 다음 문서에 주입된다
*/

// function Snippet() {
//   // 가상 트리 (virtual tree)
//   return <h1>Hello React!</h1>
// }


// function Snippet() {

//   // id로 접근 - 접근실패
//   // 가상 트리가 문서에 주입되기 전 접근을 시도했다
//   //console.log(document.getElementById("btn"));


//   // 비동기적으로 작동한다 - 제일 마지막에 실행된다
//   useEffect(() => {
//     console.log(document.getElementById("btn"));
//   })


//   return (
//     <div>
//       <h1>실제 엘리먼트에 접근하기</h1>

//       <button id="btn">나 잡아봐라</button>
//     </div>
//   )
// }


/*
  useRef Hook

  실제 엘리먼트에 접근할 때 사용된다
*/

// function Snippet() {
//   // ref 변수 선언
//   const buttonRef = useRef(null);

//   // 버튼에 접근
//   useEffect(() => {
//     // current 속성에 엘리먼트 저장
//     console.log(buttonRef.current);
//   });

//   return (
//     <div>
//       <h1>useRef Hook</h1>
//       {/* 엘리먼트에 ref 애트리뷰트 추가 */}
//       <button ref={buttonRef}>button</button>
//     </div>
//   )
// }


/*
  JSX (JavaScript eXtension)

  자바스크립트 확장 문법
  가상 트리를 만들기 위해 사용된다
  선언적 문법

  1 기본 문법
  2 Fragments
  3 변수 출력
  4 조건부 렌더링
  5 리스트 렌더링
*/


/*
  기본 문법
*/


// function Snippet() {
//   return (
//     <form>
//       <h1>Google</h1>
//       <input
//         type="search"
//         id="search"
//         name="q"
//         className="class1 class2"
//         style={{ display: "inline-block" }}
//         placeholder="Search Google"
//         autoComplete="off"
//       />
//     </form>
//   )
// }


/*
  Fragments

  전체 가상 트리는 한개의 태그로 감싸져야 한다
  불필요하게 태그를 만들고 싶지않을 때 fragments를
  사용할 수 있다
*/


// function Snippet() {
//   return (
//     // fragments
//     <>
//       <h1>Heading</h1>
//       <ul>
//         <li>list item</li>
//         <li>list item</li>
//         <li>list item</li>
//       </ul>
//     </>
//   )
// }


/*
  변수 출력
*/


// function Snippet() {
//   const cat = {
//     name: "치즈",
//     age: 2,
//     home: null,
//     sound: function () {
//       return "야옹";
//     }
//   }

//   return (
//     <ul>
//       <li>이름: {cat.name}</li>
//       <li>나이: {cat.age}살</li>
//       <li>집: {cat.home}</li>
//       <li>울음소리: {cat.sound()}</li>
//     </ul>
//   )
// }


/*
  조건부 렌더링

  1 && (AND)
  표현식1 && 표현식2

  표현식1이 참인 경우 표현식2를 출력한다
  표현식1이 거짓인 경우 아무것도 출력하지 않는다

  2 || (OR)
  표현식1 || 표현식2

  표현식1이 참인 경우 표현식1을 출력한다
  표현식1이 거짓인 경우 표현식 2를 출력한다

  3 삼항연산자
  조건 ? 값1 : 값2

  조건이 참인 경우 값1을 출력한다
  조건이 거짓인 경우 값2를 출력한다
*/


// function Snippet() {
//   return (
//     <>
//       <h1>조건부 렌더링</h1>

//       <h3>&& (AND)</h3>
//       <ol>
//         <li>{true && "표현식 2"}</li>
//         <li>{false && "표현식 2"}</li>
//       </ol>

//       <h3>|| (OR)</h3>
//       <ol>
//         <li>{"표현식 1" || "표현식 2"}</li>
//         <li>{"" || "표현식 2"}</li>
//       </ol>

//       <h3>? (Ternary)</h3>
//       <ol>
//         <li>{true ? "표현식 1" : "표현식 2"}</li>
//         <li>{false ? "표현식 1" : "표현식 2"}</li>
//       </ol>
//     </>
//   )
// }


/*
  Q. JSX 1
  아래의 데이터를 참고하여 화면에 보이는 리스트를
  만들어보세요
*/


// function Snippet() {
//   const country = {
//     capitalCity: "서울",
//     name: "대한민국",
//     population: 5000,
//     language: "한국어",
//     isG7: false,
//   }

//   return (
//     <>
//       <h1>Q. JSX 1</h1>
//       <h3>{country.name}</h3>
//       <ul>
//         <li>수도: {country.capitalCity}</li>
//         <li>인구: 약{country.population.toLocaleString()}만 명</li>
//         <li>언어: {country.language}</li>
//         <li>G7 여부: {country.isG7 ? "예" : "아니오"}</li>
//       </ul>
//     </>
//   )
// }


/*
  리스트 렌더링
*/


// function Snippet() {
//   const beers = [
//     { name: "Heineken", origin: "Netherlands" },
//     { name: "Guinness", origin: "Ireland" },
//     { name: "Asahi", origin: "Japan" }
//   ]

//   const beerList = beers.map((beer) => (
//     // 리스트 렌더링에 필요하다. 고유한 값이어야 한다
//     <li key={beer.name}>
//       <b>{beer.name}</b> - {beer.origin}
//     </li>
//   ))

//   return (
//     <>
//       <h3>리스트 렌더링</h3>
//       <ul>
//         {beerList}
//       </ul>
//     </>
//   )
// }


/*
  Q.JSX 2
  아래의 데이터를 참고하여 화면에 보이는
  테이블을 만들어보세요
*/

// function Snippet() {
//   const beers = [
//     { id: 1, name: "Guinness", origin: "Ireland", available: false },
//     { id: 2, name: "Heineken", origin: "Netherlands", available: true },
//     { id: 3, name: "Budwiser", origin: "USA", available: true }
//   ]

//   const beerList = beers.map((beer) => (
//     <tr key={beer.id}>
//       <td>{beer.id}</td>
//       <td>{beer.name}</td>
//       <td>{beer.origin}</td>
//       <td>{beer.available ? "예" : "아니오"}</td>
//     </tr>
//   ))

//   return (
//     <>
//       <h1>Q. JSX 2</h1>
//       <h3>세계 맥주</h3>

//       <table border="1">
//         <thead>
//           <tr>
//             <th>ID</th>
//             <th>이름</th>
//             <th>원산지</th>
//             <th>판매중</th>
//           </tr>
//         </thead>
//         <tbody>
//           {beerList}
//         </tbody>
//       </table>
//     </>
//   )
// }


/*
  컴포넌트
  UI를 만들기 위한 독립적이고 재사용 가능한 부품
  컴포넌트의 이름은 대문자로 시작해야 한다

  1 컴포넌트 합성
  2 props
  3 컴포넌트 트리
  4 트리에서 데이터 전달하기
*/


/*
  컴포넌트 합성

  컴포넌트를 조합하여 뷰를 완성한다
*/


// // 상품 설명
// function Content() {
//   return (
//     <section>
//       <h3>Samsung Galaxy S24</h3>
//       <i>특징</i>
//       {/* dl: data list, dt: data title, dd: data description */}
//       <dl>
//         <dt>CPU</dt>
//         <dd>8 Core</dd>
//         <dt>RAM</dt>
//         <dd>8GB</dd>
//         <dt>Storage</dt>
//         <dd>512GB SSD</dd>
//       </dl>
//       <button>장바구니에 추가</button>
//     </section>
//   )
// }

// // 리뷰
// function Reviews() {
//   return (
//     <section>
//       <h3>고객 리뷰</h3>
//       <ul>
//         <li>I love the design!</li>
//         <li>Poor quality.</li>
//         <li>Great product!</li>
//       </ul>
//     </section>
//   )
// }

// // 추천상품
// function Suggested() {
//   return (
//     <section>
//       <h3>추천 상품</h3>
//       <ul>
//         <li>iPhone 15 Pro</li>
//         <li>Pixel Pro 8</li>
//         <li>Huawei</li>
//       </ul>
//     </section>
//   )
// }

// // 메인 컴포넌트 - 컴포넌트가 모이는 곳
// function Snippet() {
//   return (
//     <>
//       <header>
//         <h1>Amazon.com</h1>
//       </header>

//       <main>
//         <Content />
//         <Reviews />
//       </main>

//       <aside>
//         <Suggested />
//       </aside>
//     </>
//   )
// }


function Profile({ profile }) {
  console.log(profile);

  return (
    <section>
      <h3>{profile.username}</h3>
      <p>{profile.bio}</p>
      <ul>
        <li>게시물 {profile.posts}</li>
        <li>팔로워 {profile.followers}</li>
        <li>팔로잉 {profile.following}</li>
      </ul>
    </section>
  )
}

function Snippet() {

  const DATA = {
    username: "예수님",
    bio: "네 이웃을 사랑하라!",
    posts: 5,
    followers: 10,
    following: 20
  }

  return (
    <>
      <h1>Instagram.com</h1>

      {/* props: 다른 컴포넌트에 전달하는 데이터 */}
      <Profile profile={DATA} />
    </>
  )
}