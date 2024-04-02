import { useEffect, useState } from "react";
import Product from "./components/Product";
import Information from "./components/Information"

export default function App() {

  const [scrollBtn, setScrollBtn] = useState(false);
  const [scrollY, setScrolly] = useState(0);

  const handleFollow = () => {
    if(scrollY > 100) {
      setScrollBtn(true);
    } else {
      setScrollBtn(false);
    }
  }

  const moveTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth'});
    setScrolly(0);
    setScrollBtn(false)
  };

  return (
    <>
      <header className="border-b fixed top-0 left-0 z-10 w-full bg-white">
        <div className="flex justify-center h-12 items-center">
          <img 
            className="h-6" 
            src="https://tvvmvn.github.io/blackboard/images/logo.png" 
            alt="logo">
          </img>
        </div>
      </header>

      <main className="mt-16 max-w-md mx-auto px-4 pb-8">
        <small className="text-xs text-blue-400 font-semibold">SAMSUNG</small>
        <h3 className="mb-4 text-gray-800">Galaxy S24 512GB Amber Yellow</h3>

        <Product />

        <h3 className="font-bold my-4">From the manufacture</h3>
        <img src="https://tvvmvn.github.io/blackboard/images/catalog.png" alt="catalog.png"></img>

        <Information />
      </main>

      {/* 위로 올라가기 */}
      <svg 
        onClick={moveTop}
        className="fixed w-8 right-4 bottom-8 opacity-50"
        xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
          <path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM377 271c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0l-87-87-87 87c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9L239 167c9.4-9.4 24.6-9.4 33.9 0L377 271z"/>
      </svg>
    </>
  )
}