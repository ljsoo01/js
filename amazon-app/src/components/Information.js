import { useState, useEffect } from "react";

const INFO = [
  { id: "i0", name: "Features" },
  { id: "i1", name: "Details" },
  { id: "i2", name: "Measurements" },
];

export default function Information() {

  const [activeToggle, setActiveToggle] = useState(false);

  // 아코디언 기능 처리
  const acordionBtn = () => {
    setActiveToggle(activeToggle => (!activeToggle));
  }

  const infoList = INFO.map(information => 
  (
    <li key={information.id} className="mb-1">
      <button 
        onClick={acordionBtn}
        className="w-full px-4 py-2 bg-gray-100 flex justify-between"
      >
        {information.name}
        <span>{(activeToggle === true) ? "-" : "+"}  </span>
      </button>
      <div 
        onClick={information.id === information.name}
        className=" transition-all hidden"
        style={{display: activeToggle ? "block" : null }}
      >
        <p className="p-2">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi exercitationem dolor, laboriosam alias magni maiores repellendus aut temporibus!
        </p>
      </div>
    </li>
  ))

  return(
    <>
      <h3 className="my-4 font-semibold">Product information</h3>
      <ul>
        {infoList}
      </ul>
      {/* <div 
        className="overflow-hidden transition-all hidden"
        style={{display: active && "0px"}}
      >
        <p className="p-2">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi exercitationem dolor, laboriosam alias magni maiores repellendus aut temporibus!
        </p>
      </div> */}


    </>
  )
};