import React from "react";
import { FaEraser, FaPencilAlt } from "react-icons/fa";
import { GiSpray } from "react-icons/gi";
import { usePaintContext } from "../context/PaintContext";

function Tools() {
  const { setStrokeStyle } = usePaintContext();
  return (
    <div className="sidebar h-full">
      <button
      onClick={()=>{
        setStrokeStyle('#000');
      }}
      className="p-2 shadow-lg shadow-black/20">
        <FaPencilAlt size={20} />
      </button>
      <button
        onClick={() => {
          setStrokeStyle("#fff");
        }}
        className="p-2 shadow-lg shadow-black/20"
      >
        <FaEraser size={20} />
      </button>
      <button className="p-2 shadow-lg shadow-black/20">
        <GiSpray size={20} />
      </button>
    </div>
  );
}

export default Tools;
