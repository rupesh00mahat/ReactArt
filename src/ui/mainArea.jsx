import React from "react";
import Canvas from "../components/canvas";
import Tools from "./Tools";
import Colors from "./Colors";

function MainArea() {
  return (
    <div className="bg-[#C0C0C0] !p-10 h-full">
     <div className="flex gap-10 h-full">
     <Tools />
      <div className="editor-area  bg-[#F5F5F5] !p-5 h-full">
        <Canvas />
      </div>
     </div>
    </div>
  );
}

export default MainArea;
