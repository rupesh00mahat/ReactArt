import React, { useEffect, useRef, useState } from "react";
import { usePaintContext } from "../context/PaintContext";
import Pencil from "../assets/images/pencil.png";
import Eraser from "../assets/images/eraser.png";

function Canvas() {
  const [isPainting, setPaintingState] = useState(false);
  const { strokeStyle, strokeWidth, ctx, setCTX, isErasing } = usePaintContext();
  const canvasRef = useRef(null);

  useEffect(() => {
    const myCanvas = canvasRef.current;
    const ctx = myCanvas.getContext("2d");
    const scale = window.devicePixelRatio || 1;
    const rect = myCanvas.getBoundingClientRect();
    myCanvas.width = rect.width * scale;
    myCanvas.height = rect.height * scale;
    ctx.scale(scale, scale);
    ctx.lineCap = "round";
    ctx.strokeStyle = strokeStyle;
    ctx.fillStyle = "white";
    ctx.fillRect(0, 0, rect.width,rect.height); // Fill entire canvas
    setCTX(ctx);
  }, []);
  useEffect(()=>{
    if(ctx){
      ctx.strokeStyle = strokeStyle;
    }
  }, [strokeStyle])

  useEffect(()=>{
    ctx? ctx.lineWidth = strokeWidth: null;
  },[strokeWidth])

  const startDrawing = () => {
    if(!isErasing){
      setPaintingState(true);
    }
  };
  const stopDrawing = () => {
    setPaintingState(false);
    ctx.beginPath();
  };

  const eraseAtPoint = (x, y, size = 20) => {
    ctx.clearRect(x - size / 2, y - size / 2, size, size);
  };

  const draw = (e) => {
    const rect = e.target.getBoundingClientRect();

    if(isErasing){
eraseAtPoint(e.clientX - rect.left, e.clientY - rect.top, 20);
    }
    if (isPainting) {

     
      ctx.lineTo(e.clientX - rect.left, e.clientY - rect.top);
      ctx.stroke();
      ctx.beginPath();
      ctx.moveTo(e.clientX - rect.left, e.clientY - rect.top);
    }
  };

  return (
    <>
      <canvas
        ref={canvasRef}
        style={{ 
          width: "100%",
           height: "100%",
          cursor: `url(${isErasing? Eraser :Pencil}) 16 16, auto`
          }}
        className="bg-white block h-full w-full rounded-2xl !border-none"
        onMouseMove={draw}
        onMouseDown={startDrawing}
        onMouseUp={stopDrawing}
       
        id="my-canvas"
      ></canvas>
    </>
  );
}

export default Canvas;
