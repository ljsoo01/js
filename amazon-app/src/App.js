import { useState } from "react";
import Information from "./components/Information";

// 핸드폰 이미지
const Images = [
  { id: "i0", src: "https://tvvmvn.github.io/blackboard/images/product-1.jpeg"},
  { id: "i1", src: "https://tvvmvn.github.io/blackboard/images/product-2.jpeg"},
  { id: "i2", src: "https://tvvmvn.github.io/blackboard/images/product-3.jpeg"}
]

export default function App() {

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

        <h3 className="font-bold my-4">From the manufacture</h3>
        <img src="https://tvvmvn.github.io/blackboard/images/catalog.png" alt="catalog.png"></img>
      </main>
    </>
  )
}