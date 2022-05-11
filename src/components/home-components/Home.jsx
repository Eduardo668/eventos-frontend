import React, { useState } from "react";
import NavBar from "./NavBar";


export default function Home(){

    const [backgroundColorPage, setBackgroundColor] = useState("");

    return (
        
        <div className={`${backgroundColorPage} h-screen bg-stone-700`}>
          <NavBar />
          
        </div>
        
        
    )
}

 