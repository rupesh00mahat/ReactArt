import React, { createContext, useContext, useState } from 'react'

export const PaintContext = createContext();

export const usePaintContext = () =>{
    return useContext(PaintContext);
}

export default function PaintProvider ({children}){
    const [strokeStyle, setStrokeStyle] = useState('#000');

return <PaintContext.Provider value={{strokeStyle, setStrokeStyle}}>
{children}
</PaintContext.Provider>
}