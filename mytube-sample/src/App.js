import { useState } from 'react';
import Survey from './components/Survey';
import Search from './components/Search';
import SideBar from './components/SideBar';

// 비디오 썸네일 데이터
const VIDEOS = [
  { id: "v0", name: "The Best of NAT KING COLE Greatest Hits", src: "https://tvvmvn.github.io/mytube/images/nat-cole-king.webp", category: "music" },
  { id: "v1", name: "YIRUMA - Best Playlist Ever", src: "https://tvvmvn.github.io/mytube/images/yiruma.webp", category: "music" },
  { id: "v2", name: "16 Best Places to Visit in Norway", src: "https://tvvmvn.github.io/mytube/images/norway.webp", category: "travel" },
  { id: "v3", name: "2023 Genesis G90 Review! $100,000 Rolls-Royce", src: "https://tvvmvn.github.io/mytube/images/genesis.webp", category: "car" },
]

// 필터맵 - 필터 조건 그룹
const FILTER_MAP = {
  전체: () => true,
  음악: ({ category }) => category === "muisic",
  여행: ({ category }) => category === "travel",
  자동차: ({ category }) => category === "car",
}

// 필터 이름 - 전체, 음악, 여행, 자동차
const FILTER_NAMES = Object.keys(FILTER_MAP);

export default function App() {
  // 현재 필터
  const [filter, setFilter] = useState("전체");
  // 사이드바 나타남 관리
  const [sideBarActive, setSideBarActive] = useState(false);
  // 검색창 나타남 관리
  const [searchActive, setSearchActive] = useState(false);

  // 필터 버튼
  const filterButtons = FILTER_NAMES.map(name => (
    <button
      key={name}
      className="px-4 py-1 bg-zinc-800 text-white disabled:bg-white disabled:text-black rounded-lg "
      onClick={() => setFilter(name)}
      disabled={name === filter}
    >
      {name}
    </button>
  ))

  // 썸네일 리스트
  const videoList = VIDEOS.filter(FILTER_MAP[filter]).map(video => (
    <li key={video.id} className="mb-8">
      <img
        className="w-full"
        src={video.src}
      />
      <h3 className="text-white font-semibold my-2">
        {video.name}
      </h3>
    </li>
  ))

  return (
    <>
      <header className="fixed w-full top-0 box-content bg-black">
        <div className="flex justify-between h-12">
          {/* 메뉴버튼 / 로고 */}
          <div className="flex items-center">
            {/* 메뉴버튼 */}
            <button
              onClick={() => setSideBarActive(true)}
              className="px-4 h-full"
            >
              <svg 
                className="w-4 fill-white"
                xmlns="http://www.w3.org/2000/svg" 
                viewBox="0 0 448 512"
              >
                <path d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z"/>
              </svg>
            </button>
            {/* 로고 */}
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
            onClick={() => searchActive(true)}>
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
    </>
  )
};