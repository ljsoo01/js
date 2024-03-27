import { useState, useEffect, useRef } from "react";
import Mytube from "./components/video";

const SEED = [
  { id: "mytube-0", img: "/nat-cole-king.webp", name: "The Best of NAT KING COLE Greatest Hits", type: "music" },
  { id: "mytube-1", img: "/yiruma.webp", name: "YIRUMA - Best Playlist Ever", type: "music" },
  { id: "mytube-2", img: "/norway.webp", name: "16 Best Places to Visit in Norway", type: "travel" },
  { id: "mytube-3", img: "/genesis.webp", name: "2023 Genesis G90 Review! $100,000 Rolls-Royce", type: "car" },
]

// 차 구매 옵션
const carOption = [
  { id: "c0", name: "스타리아" },
  { id: "c1", name: "아반떼 하이브리드" },
  { id: "c2", name: "코나" },
  { id: "c3", name: "캐스퍼" },
]

function saveData(videos) {
  localStorage.setItem("videosData", JSON.stringify(videos));
}

if (!localStorage.getItem("videosData")) {
  saveData(SEED);
  saveData(carOption);
}

const FILTER_MAP = {
  전체: () => true,
  음악: (video) => video.music,
  여행: (video) => video.travel,
  자동차: (video) => video.car 
}

// 필터 이름 - 전체, 음악, 여행, 자동차
const FILTER_NAMES = Object.keys(FILTER_MAP);

export default function App() {
  const initialVideos = JSON.parse(localStorage.getItem("videosData"));
  const [videos, setVideos] = useState(initialVideos);
  // 현재 적용중인 필터
  const [filter, setFilter] = useState("전체");
  const [search, setSearch] = useState(false);
  const [menu, setMenu] = useState(false);
  const inputRef = useRef(null);

  console.log(videos);

  useEffect(() => {
    saveData(videos);
  }, [videos])

  useEffect(() => {
    document.title = "MyTube"
  }, [])

// 검색 기능 처리
const searchClickButton = () => {
  setSearch(search => (!search));
}

// 메뉴 기능 처리
const menuClickButton = () => {
  setMenu(menu => (!menu));
}

// focus 메서드
useEffect(() => {
  inputRef.current.focus();
})

  // 필터 버튼 렌더링
  const filterButtons = FILTER_NAMES.map(name => (
    <button
      key={name}
      className="text-white px-4 py-1 bg-zinc-800 rounded-lg disabled:bg-white disabled:text-black"
      disabled={name == filter}
      onClick={() => setFilter(name)}
    >
      {name}
    </button>
  ))

  const videoList = videos.filter(FILTER_MAP[filter]).map(video => (
    <videoList
      key={video.id}
      id={video.id}
      img={video.img}
      name={video.name}
      type={video.type}
      // music={video.music}
      // travel={video.travel}
      // car={video.car}
    />
  ))

// carOption.map(car => (
//   <carOption
//     key={car.id}
//     id={car.id}
//     name={car.name}
//   />
// ))

  return (
    <>
      <header className="fixed w-full top-0 box-content pb-8 bg-black">
        <div className="flex justify-between h-12">
          <div className="flex items-center">
            <button
              onClick={menuClickButton}
              className="px-4 h-full bg-initial bg-none normal-case" >
              <svg 
                className="w-4 fill-white"
                xmlns="http://www.w3.org/2000/svg" 
                viewBox="0 0 448 512"
              >
                <path d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z"/>
              </svg>
            </button>
            <div className="flex items-center">
              <svg 
                className="w-8 fill-white"
                xmlns="http://www.w3.org/2000/svg" 
                viewBox="0 0 576 512"
              >
                <path d="M549.7 124.1c-6.3-23.7-24.8-42.3-48.3-48.6C458.8 64 288 64 288 64S117.2 64 74.6 75.5c-23.5 6.3-42 24.9-48.3 48.6-11.4 42.9-11.4 132.3-11.4 132.3s0 89.4 11.4 132.3c6.3 23.7 24.8 41.5 48.3 47.8C117.2 448 288 448 288 448s170.8 0 213.4-11.5c23.5-6.3 42-24.2 48.3-47.8 11.4-42.9 11.4-132.3 11.4-132.3s0-89.4-11.4-132.3zm-317.5 213.5V175.2l142.7 81.2-142.7 81.2z"/>
              </svg>
              <h1 className="ml-1 text-white font-semibold">
                MyTube
              </h1>
            </div>
          </div>
          <button 
            className="px-4 flex items-center" 
            onClick={searchClickButton}>
              <svg 
                className="w-4 fill-white"
                xmlns="http://www.w3.org/2000/svg" 
                viewBox="0 0 512 512">
                  <path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z"/> 
              </svg>
          </button>
        </div>
        <div className="flex gap-2 py-2 px-4">
          {filterButtons}
        </div>
      </header>

      <div
        style={{display: search ? "block" : null}}
        className="fixed bg-black inset-0 hidden">
        <div className="flex items-center mt-4 px-4">
          <svg
            onClick={searchClickButton}
            className="w-4 fill-white"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 448 512">
              <path d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.2 288 416 288c17.7 0 32-14.3 32-32s-14.3-32-32-32l-306.7 0L214.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z"/>
          </svg>
          <input
            type="text"
            placeholder="Search MyTube"
            className="w-full px-4 py-1 ml-2 bg-zinc-800 text-white outline-none rounded-full"
            ref={inputRef}
          />
        </div>
      </div>

      <nav
        style={{left: menu ? "0px" : null}}
        className="fixed top-0 -left-60 w-60 h-screen px-4 z-20 transition-all bg-black text-white ">
        <div className="my-4 flex items-center">
        <svg 
          className="w-8 fill-white"
          xmlns="http://www.w3.org/2000/svg" 
          viewBox="0 0 576 512"
        >
          <path d="M549.7 124.1c-6.3-23.7-24.8-42.3-48.3-48.6C458.8 64 288 64 288 64S117.2 64 74.6 75.5c-23.5 6.3-42 24.9-48.3 48.6-11.4 42.9-11.4 132.3-11.4 132.3s0 89.4 11.4 132.3c6.3 23.7 24.8 41.5 48.3 47.8C117.2 448 288 448 288 448s170.8 0 213.4-11.5c23.5-6.3 42-24.2 48.3-47.8 11.4-42.9 11.4-132.3 11.4-132.3s0-89.4-11.4-132.3zm-317.5 213.5V175.2l142.7 81.2-142.7 81.2z"/>
        </svg>
        <h1 className="ml-1 text-white font-semibold">MyTube</h1>
        </div>
        <ul>
          <li className="py-2">홈</li>
          <li className="py-2">구독</li>
          <li className="py-2">라이브러리</li>
        </ul>
      </nav>

      <div 
        onClick={menuClickButton}
        style={{display: menu ? "block" : null}}
        className="fixed inset-0 bg-black/[0.4] hidden">
      </div>
      <main className="mt-32 px-4 pb-8 bg-black">
        <ul>
          {/* {videoList.name} */}
          <li className="mb-8">
            <img className="w-full" src="/nat-cole-king.webp"/>
            <h3 className="font-semibold my-2 text-white">The Best of NAT KING COLE Greatest Hits</h3>
          </li>
          <li className="mb-8">
            <img className="w-full" src="/yiruma.webp"/>
            <h3 className="font-semibold my-2 text-white">YIRUMA - Best Playlist Ever</h3>
          </li>
          <li className="mb-8">
            <img className="w-full" src="/norway.webp"/>
            <h3 className="font-semibold my-2 text-white">16 Best Places to Visit in Norway</h3>
          </li>
          <li className="mb-8">
            <img className="w-full" src="/genesis.webp"/>
            <h3 className="font-semibold my-2 text-white">2023 Genesis G90 Review! $100,000 Rolls-Royce</h3>
          </li>
        </ul>
        <h3 className="text-lg my-4 font-semibold text-white">다음 중 어떤 차를 구매하시겠습니까?</h3>
        {/* <ol>
          <li className="mb-2">
              <input 
                type="radio"
                id={carOption.id}
                name="survey"
                className="peer hidden"
              />
              <label htmlFor={carOption.id} className="block p-2 border-2 rounded border-gray-400 text-gray-400 peer-checked:border-sky-600 peer-checked:text-sky-600">{carOption.name}</label>
            </li>
        </ol> */}
        <ol>
          <li className="mb-2">
            <input 
              type="radio"
              id={carOption[0].id}
              name="survey"
              className="peer hidden"
            />
            <label htmlFor={carOption[0].id} className="block p-2 border-2 rounded border-gray-400 text-gray-400 peer-checked:border-sky-600 peer-checked:text-sky-600">{carOption[0].name}</label>
          </li>
          <li className="mb-2">
            <input 
              type="radio"
              id={carOption[1].id}
              name="survey"
              className="peer hidden"
            />
            <label htmlFor={carOption[1].id} className="block p-2 border-2 rounded border-gray-400 text-gray-400 peer-checked:border-sky-600 peer-checked:text-sky-600">{carOption[1].name}</label>
          </li>
          <li className="mb-2">
            <input 
              type="radio"
              id={carOption[2].id}
              name="survey"
              className="peer hidden"
            />
            <label htmlFor={carOption[2].id} className="block p-2 border-2 rounded border-gray-400 text-gray-400 peer-checked:border-sky-600 peer-checked:text-sky-600">{carOption[2].name}</label>
          </li>
          <li className="mb-2">
            <input 
              type="radio"
              id={carOption[3].id}
              name="survey"
              className="peer hidden"
            />
            <label htmlFor={carOption[3].id} className="block p-2 border-2 rounded border-gray-400 text-gray-400 peer-checked:border-sky-600 peer-checked:text-sky-600">{carOption[3].name}</label>
          </li>
        </ol>
      </main>
    </>
  )
}