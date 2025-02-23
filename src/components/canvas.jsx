import React, { useEffect, useRef, useState } from "react";
import { usePaintContext } from "../context/PaintContext";

function Canvas() {
  const [isPainting, setPaintingState] = useState(false);
  const [ctx, setCTX] = useState(undefined);
  const { strokeStyle, strokeWidth } = usePaintContext();
  const canvasRef = useRef(null);

  useEffect(() => {
    const myCanvas = canvasRef.current;
    const ctx = myCanvas.getContext("2d");
    const scale = window.devicePixelRatio;

    myCanvas.width = 6080 * scale;
    myCanvas.height = 1080 * scale;
    ctx.scale(scale, scale);
    ctx.lineCap = "round";
    ctx.strokeStyle = strokeStyle;
    setCTX(ctx);
  }, []);

  useEffect(()=>{
    ctx? ctx.lineWidth = strokeWidth: null;
  },[strokeWidth])

  const startDrawing = () => {
    setPaintingState(true);
  };
  const stopDrawing = () => {
    setPaintingState(false);
    ctx.beginPath();
  };

  const draw = (e) => {
    if (isPainting) {
      const rect = e.target.getBoundingClientRect();
      console.log("rect", rect);

      console.log(
        "e.clientX",
        e.clientX,
        "rect.left",
        rect.left,
        "rect.top",
        rect.top,
        "e.clientY",
        e.clientY
      );
      ctx.lineTo(e.clientX - rect.left, e.clientY - rect.top);
      console.log("x and y", e.clientX - rect.left, e.clientY - rect.top);
      ctx.stroke();
      ctx.beginPath();
      ctx.moveTo(e.clientX - rect.left, e.clientY - rect.top);
    }
  };

  return (
    <>
      <canvas
        ref={canvasRef}
        style={{ width: "6080px", height: "1080px" }}
        className="bg-white block h-full w-full rounded-2xl !border-none"
        onMouseMove={draw}
        onMouseDown={startDrawing}
        onMouseUp={stopDrawing}
        width={"6080px"}
        height={"1080px"}
        id="my-canvas"
      ></canvas>
    </>
  );
}

export default Canvas;
