import React, { createContext, useContext, useState } from 'react'

export const PaintContext = createContext();

export const usePaintContext = () =>{
    return useContext(PaintContext);
}

export default function PaintProvider ({children}){
    const [strokeStyle, setStrokeStyle] = useState('#000');
    const [strokeWidth, setStrokeWidth] = useState(3);


return <PaintContext.Provider value={{strokeStyle, setStrokeStyle, strokeWidth, setStrokeWidth}}>
{children}
</PaintContext.Provider>
}