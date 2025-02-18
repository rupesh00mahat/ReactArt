import React, { useEffect, useState } from "react";
import { usePaintContext } from "../context/PaintContext";

function Canvas() {
  const [isPainting, setPaintingState] = useState(false);
  const [ctx, setCTX] = useState(undefined);
  const {strokeStyle} = usePaintContext();

  useEffect(() => {
    let myCanvas = document.querySelector("canvas");
    const ctx = myCanvas.getContext("2d");
    setCTX(ctx);
  }, []);

  const startDrawing = () => {
    setPaintingState(true);
    console.log('hello');
  };
  const stopDrawing = () => {
    setPaintingState(false);
    ctx.beginPath();
  };

  const draw = (e) => {
    if (isPainting) {
      const rect = e.target.getBoundingClientRect();
      console.log('rect', rect);
      ctx.lineWidth = 3;
      ctx.lineCap = "round";
      ctx.strokeStyle = strokeStyle;
      ctx.lineTo(e.clientX - rect.left, e.clientY - rect.top);
      ctx.stroke();
      ctx.beginPath();
      ctx.moveTo(e.clientX - rect.left, e.clientY - rect.top);
      console.log(ctx);
    }
  };

  return (
    <>
      
      <canvas
        className="bg-white block h-full w-full rounded-2xl !border-none"
        onMouseMove={draw}
        onMouseDown={startDrawing}
        onMouseUp={stopDrawing}
        width={'6080px'}
        height={'1080px'}
        id="my-canvas"
       
      ></canvas>
    </>
  );
}

export default Canvas;
