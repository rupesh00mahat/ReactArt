import React from "react";
import { FaEraser, FaPencilAlt } from "react-icons/fa";
import { GiSpray } from "react-icons/gi";
import { usePaintContext } from "../context/PaintContext";
import { Button, Slider, Typography } from "@mui/material";

function Tools() {
  const { setStrokeStyle, setStrokeWidth, strokeWidth } = usePaintContext();
  return (
    <div className="sidebar h-full bg-white !p-4 ">
      <Button
        onClick={() => {
          setStrokeStyle("#000");
        }}
        className="p-2 shadow-lg shadow-black/20 w-full !mt-4"
      >
        <FaPencilAlt size={20} />
        Line
      </Button>
      <Button
        onClick={() => {
          setStrokeStyle("#fff");
        }}
        className="p-2 shadow-lg shadow-black/20 w-full !mt-4"
      >
        <FaEraser size={20} />
        Eraser
      </Button>
      <Typography variant="h4" fontSize={'16px'} className="!mt-4">Width</Typography>
     <Slider
     
     size="small"
     value={strokeWidth}
     aria-label="Small"
     valueLabelDisplay="auto"
     className="w-full"
     max={10}
     onChange={(e,value)=>{
      setStrokeWidth(value);
     }}
     />
    </div>
  );
}

export default Tools;
