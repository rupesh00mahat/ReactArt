import React, { useEffect, useState } from "react";

function Canvas() {
  const [isPainting, setPaintingState] = useState(false);
  const [ctx, setCTX] = useState(undefined);
  const [strokeStyle, setStrokeStyle] = useState(undefined);
  const colors = [
    "#FF5733", "#33FF57", "#3357FF", "#FF33A1", "#A133FF",
    "#FF8D33", "#33FF8D", "#8D33FF", "#FF3333", "#33FFD1"
  ];
  
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
    ctx.lineWidth = 10;
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
   <div style={{display: "flex", marginBottom: "20px", justifyContent: "center"}} className="colors">
    {colors.map((color)=>{
return <button onClick={()=>{setStrokeStyle(color)}}  style={{backgroundColor: color, height: "30px", width: "30px", border: "1px solid black"}} className="color">

</button >
    })}


   </div>
    <canvas
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
