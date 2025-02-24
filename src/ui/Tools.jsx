import React from "react";
import { FaEraser, FaPencilAlt } from "react-icons/fa";
import { GiSpray } from "react-icons/gi";
import { usePaintContext } from "../context/PaintContext";
import { Button, Slider, Typography } from "@mui/material";
import Colors from "./Colors";
import Pencil from "../assets/images/pencil.png";

function Tools() {
  const {  setStrokeWidth, strokeWidth, ctx, setIsErasing } = usePaintContext();

  return (
    <div className="sidebar h-full bg-white !p-4 !min-w-[100px] !w-[300px]">
      <Button
        onClick={() => {
          setIsErasing(false);
          const canvas = document.getElementById('my-canvas');
          canvas.style.cursor = `url(${Pencil}) 16 16 auto`;

        }}
        className="p-2  w-full !mt-4 flex !justify-start gap-6"
      >
        <FaPencilAlt size={25} />
        <Typography fontSize={'16px'} color="#000">Line</Typography>
      </Button>
      <Button
        onClick={() => {
          setIsErasing(true);
        }}
        className="p-2  w-full !mt-4 flex !justify-start gap-6"
      >
        <FaEraser size={25} />
        <Typography fontSize={'16px'} color="#000">Eraser</Typography>

      </Button>
      <Typography color="#000" fontSize={"16px"} className="!mt-4">
        Width
      </Typography>
      <Slider
        size="small"
        value={strokeWidth}
        aria-label="Small"
        valueLabelDisplay="auto"
        className="w-full"
        max={10}
        onChange={(e, value) => {
          setStrokeWidth(value);
        }}
      />
      <Colors/>
      <Button
      onClick={()=>{ctx.clearRect(0,0,1000,600)}}
      sx={{background: '#E5E7EB', color: '#000', p: '10px 18px !important', fontSize: '16px'}} fullWidth >Clear Canvas</Button>
      <Button
      onClick={()=>{
        const canvas = document.getElementById('my-canvas');

        const image = canvas.toDataURL("image/png");
        const link = document.createElement("a");
        link.href = image;
        link.download = "canvas-image.png";
        link.click();
      }}
      sx={{mt: 2,background: '#764ABC', color: '#fff', p: '10px 18px !important', fontSize: '16px'}} fullWidth >Save as Image</Button>
    </div>
  );
}

export default Tools;
