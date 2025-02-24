import React, { createContext, useContext, useState } from 'react'

export const PaintContext = createContext();

export const usePaintContext = () =>{
    return useContext(PaintContext);
}

export default function PaintProvider ({children}){
    const [strokeStyle, setStrokeStyle] = useState('#000');
    const [strokeWidth, setStrokeWidth] = useState(3);
    const [isErasing, setIsErasing] = useState(false);
    const [ctx, setCTX] = useState(null);


return <PaintContext.Provider value={{strokeStyle, setStrokeStyle, strokeWidth, setStrokeWidth, ctx, setCTX, isErasing, setIsErasing}}>
{children}
</PaintContext.Provider>
}