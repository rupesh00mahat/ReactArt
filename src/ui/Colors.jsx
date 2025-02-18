import React from "react";
import { usePaintContext } from "../context/PaintContext";

function Colors() {

    const {strokeStyle, setStrokeStyle} = usePaintContext();

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
    "#FFFFFF", // White
  ];
  return (
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
  );
}

export default Colors;
