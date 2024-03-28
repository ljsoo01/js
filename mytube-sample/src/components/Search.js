import { useState, useEffect, useRef } from "react";

// 검색 데이터
const TITLES = [
  "autumn leaves not cole king",
  "all of me jhon legend",
  "a legend of ashitaka joe hisashi",
  "river flows in you yiruma",
  "midnight randevous casiopea",
  "i believe i can fly rkelly"
];

export default function Search({
  active,
  setActive
}) {
  // 검색어 저장
  const [query, setQuery] = useState("");
  const inputRef = useRef(null);    

  // 엘리먼트에 접근 후 오토포커스 호출
  useEffect(() => {
    if (active) {
      inputRef.current.focus();
    }
  })

  // 검색결과 (name - 각 title)
  const titleList = TITLES.filter(name => name.indexOf(query.toLocaleLowerCase()) > -1).map(name => (
    <li key={name} className="mb-2 text-white">
      {name}
    </li>
  ))

  // 검색창 닫기
  function handleClose() {
    setActive(false);
    // 기존 검색어 삭제
    setQuery("");
  };

  return (
    <>
      <div
        style={{ display: active && "block" }}
        className="fixed bg-black inset-0 hidden"
      >
        <div className="flex items-center mt-4 px-4">
          <svg
            onClick={handleClose}
            className="w-4 fill-white"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 448 512"
          >
              <path d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.2 288 416 288c17.7 0 32-14.3 32-32s-14.3-32-32-32l-306.7 0L214.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z"/>
          </svg>
          <input
            type="text"
            placeholder="Search MyTube"
            className="w-full px-4 py-1 ml-2 bg-zinc-800 text-white outline-none rounded-full"
            value={query}
            onChange={({ target }) => setQuery(target.value)}
            ref={inputRef}
          />
        </div>
        <ul className="my-4 px-4">
          {query.trim() && titleList}
        </ul>
      </div>
    </>
  )
};