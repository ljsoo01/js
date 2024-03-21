import { useState, useEffect } from "react";
import Mytube from "./components/video";

const SEED = [
  { id: "mytube-0", img: "/blackpink.jpg", name: "The Best of NAT KING COLE Greatest Hits" },
  { id: "mytube-1", name: "YIRUMA - Best Playlist Ever" },
  { id: "mytube-2", name: "16 Best Places to Visit in Norway" },
  { id: "mytube-3", name: "2023 Genesis G90 Review! $100,000 Rolls-Royce" },
]

function saveData(videos) {
  localStorage.setItem("videosData", JSON.stringify(videos));
}

if (!localStorage.getItem("videosData")) {
  saveData(SEED);
}

const FILTER_MAP = {
  전체: () => true,
  음악: (videos) => videos.music,
  여행: (videos) => videos.travel,
  자동차: (videos) => videos.car 
}

// 필터 이름 - 전체, 음악, 여행, 자동차
const FILTER_NAMES = Object.keys(FILTER_MAP);

export default function App() {
  const initialVideos = JSON.parse(localStorage.getItem("videosData"));
  const [videos, setVideos] = useState(initialVideos);
  // 현재 적용중인 필터
  const [filter, setFilter] = useState("전체");

  console.log(videos);

  useEffect(() => {
    saveData(videos);
  }, [videos])

  useEffect(() => {
    document.title = "MyTube"
  }, [])

  // 검색 기능 처리
  function search() {

  }

  // 필터 버튼 렌더링
  const filterButtons = FILTER_NAMES.map(name => (
    <button
      key={name}
      className="text-white px-4 py-1 bg-zinc-800 rounded-lg disabled: bg-white disabled: text-black"
      disabled={name == filter}
      onClick={() => setFilter(name)}
    >
      {name}
    </button>
  ))

  const videoList = videos.filter(FILTER_MAP[filter]).map(video => (
    <videos 
      key={video.id}
      id={video.id}
      img={video.img}
      name={video.name}
    />
  ))

  return (
    <>
      <header className="fixed w-full top-0 box-content bg-black">
        <div className="flex justify-between h-12">
          <div className="flex items-center">
            <button className="px-4 h-full bg-initial bg-none normal-case" >
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
          <button className="px-4 flex items-center">
            <svg 
              className="w-4 fill-white"
              xmlns="http://www.w3.org/2000/svg" 
              viewBox="0 0 512 512">
                <path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z"/> 
            </svg>
          </button>
        </div>
        <div className="flex text-white gap-2 py-2 px-4">
          {filterButtons}
        </div>
      </header>

      {/* <main className="mt-32 px-4 pb-8">
        {}
      </main> */}
    </>
  )
}