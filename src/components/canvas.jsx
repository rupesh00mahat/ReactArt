import React, { useEffect, useState } from "react";

function Canvas() {
  const [isPainting, setPaintingState] = useState(false);
  const [ctx, setCTX] = useState(undefined);
  useEffect(() => {
    let myCanvas = document.querySelector("canvas");
    const ctx = myCanvas.getContext("2d");
    setCTX(ctx);
  }, [isPainting]);

  const startDrawing = () => {
    setPaintingState(true);
    ctx.beginPath();
  };
  const stopDrawing = () => {
    setPaintingState(false);
  };

  const draw = (e) => {
    if (isPainting) {
      ctx.lineWidth = 10;
      ctx.lineCap = "round";
      ctx.lineTo(e.clientX, e.clientY);
      ctx.stroke();
      ctx.beginPath();
      ctx.moveTo(e.clientX, e.clientY);
    }
  };

  return (
    <canvas
      onMouseMove={draw}
      onMouseDown={startDrawing}
      onMouseUp={stopDrawing}
      id="my-canvas"
      width={"500px"}
      height={"500px"}
    ></canvas>
  );
}

export default Canvas;
