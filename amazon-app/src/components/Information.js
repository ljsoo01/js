import { useState, useEffect } from "react";

const INFO = [
  { id: "i0", name: "Features" },
  { id: "i1", name: "Details" },
  { id: "i2", name: "Measurements" },
];

export default function Information() {

  useEffect(() => {
    
  })

  const infoList = INFO.map(information => 
  (
    <li key={information.id} className="mb-1">
      <button 
        className="w-full px-4 py-2 bg-gray-100 flex justify-between"
      >
        {information.name}
        <span>+</span>
      </button>
    </li>
  ))

  return(
    <>
      <h3 className="my-4 font-semibold">Product information</h3>
      <ul>
        {infoList}
      </ul>
      <div>
        <p className="p-2">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi exercitationem dolor, laboriosam alias magni maiores repellendus aut temporibus!
        </p>
      </div>
    </>
  )
};