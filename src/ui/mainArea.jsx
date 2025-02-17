import React, { useState } from "react";
import Canvas from "../components/canvas";
import { FaPencilAlt } from "react-icons/fa";
import { FaEraser } from "react-icons/fa6";
import { GiSpray } from "react-icons/gi";


function MainArea() {
  const [strokeStyle, setStrokeStyle] = useState(undefined);

  const colors = [
    "#000000", // Black
    "#808080", // Gray
    "#800000", // Maroon
    "#FF0000", // Red
    "#808000", // Olive
    "#FFFF00", // Yellow
    "#008000", // Green
    "#00FF00", // Lime
    "#008080", // Teal
    "#00FFFF", // Cyan
    "#000080", // Navy
    "#0000FF", // Blue
    "#800080", // Purple
    "#FF00FF", // Magenta
    "#808080", // Silver
    "#FFFFFF", // White
  ];

  return (
    <div className="bg-[#C0C0C0] !p-10">
      <div className="sidebar">
        <button className="p-2 shadow-lg shadow-black/20">
          <FaPencilAlt size={20}/>
        </button>
        <button className="p-2 shadow-lg shadow-black/20">
          <FaEraser size={20}/>
        </button>
        <button className="p-2 shadow-lg shadow-black/20">
          <GiSpray size={20}/>
        </button>
      </div>
      <div className="editor-area bg-[#808080] !p-0 ">
        <Canvas strokeStyle={strokeStyle} />
      </div>
      <div className="colors flex !py-4">
        <div
          style={{ backgroundColor: strokeStyle }}
          className="h-8 w-8 border-solid border-2 !mr-2"
        ></div>
        {colors.map((color) => {
          return (
            <button
              key={color}
              onClick={() => {
                setStrokeStyle(color);
              }}
              style={{
                backgroundColor: color,
              }}
              className="color h-8  w-8 border-ridge border-2  shadow-[inset_0_1px_1px_rgba(0,0,0,0.6)]"
            ></button>
          );
        })}
      </div>
    </div>
  );
}

export default MainArea;
