import { useState } from "react";

// 핸드폰 이미지
const IMAGES = [
  { id: "i0", src: "https://tvvmvn.github.io/blackboard/images/product-1.jpeg", show: true},
  { id: "i1", src: "https://tvvmvn.github.io/blackboard/images/product-2.jpeg", show: false},
  { id: "i2", src: "https://tvvmvn.github.io/blackboard/images/product-3.jpeg", show: false}
];

export default function Product() {
  const [filter, setFilter] = useState(true);

  const ImagesShow = IMAGES.map((image) => (
    <img className="h-full object-cover" src={image.src}>
    </img>
  ));

  return (
    <>
      {/* 이미지 넘기기 */}
      <div className="border mx-auto w-inherit h-80 relative flex justify-center">
        {ImagesShow}
        <button
          className="absolute top-0 left-0 h-full px-2 text-4xl text-gray-400"
        >
          ❮
        </button>
        <button
          className="absolute top-0 right-0 h-full px-2 text-4xl text-gray-400"
        >
          ❯
        </button>
      </div>

      {/* <div>
        <span className="w-2 h-2 mx-1 rounded-full bg-gray-200"></span>
        <span></span>
        <span></span>
      </div> */}

      {/* 가격 */}
      <div className="text-4xl font-semibold my-8">$799</div>

      <button
        onClick={() => alert('장바구니에 추가되었습니다.')}
        type="button" 
        className="w-full p-3 bg-yellow-400 font-semibold rounded-full "
      >
        Add To Cart
      </button>
    </>
  )
}