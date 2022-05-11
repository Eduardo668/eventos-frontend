import React, { useState } from "react";
import NavBar from "./NavBar";


export default function Home(){

    const [backgroundColorPage, setBackgroundColor] = useState("");

    return (
        
        <div className={`${backgroundColorPage}`}>
          <NavBar />
          
        </div>
        
        
    )
}

 