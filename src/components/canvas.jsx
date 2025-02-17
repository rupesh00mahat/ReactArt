import React, { useEffect, useState } from "react";

function Canvas({strokeStyle}) {
  const [isPainting, setPaintingState] = useState(false);
  const [ctx, setCTX] = useState(undefined);
 

  useEffect(() => {
    let myCanvas = document.querySelector("canvas");
    const ctx = myCanvas.getContext("2d");
    setCTX(ctx);
  }, []);

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
      ctx.lineWidth = 3;
      ctx.lineCap = "round";
      ctx.strokeStyle = strokeStyle;
      ctx.lineTo(e.clientX - rect.left, e.clientY - rect.top);
      ctx.stroke();
      ctx.beginPath();
      ctx.moveTo(e.clientX - rect.left, e.clientY - rect.top);
    }
  };

  return (
    <>
      
      <canvas
        className="bg-white"
        onMouseMove={draw}
        onMouseDown={startDrawing}
        onMouseUp={stopDrawing}
        id="my-canvas"
        width={"500px"}
        height={"500px"}
      ></canvas>
    </>
  );
}

export default Canvas;
