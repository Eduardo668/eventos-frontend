import React, { useState } from "react";
import NavBar from "../NavBar";
import Apresentation from "./Apresentation"
import FooterH from "../FooterH";

export default function Home(){

    const [backgroundColorPage, setBackgroundColor] = useState("");

    return (
        <>
        <div className={`${backgroundColorPage} overflow-x-hidden bg-backgroudHome1 bg-cover `}>
          <NavBar />
          <Apresentation />
          <FooterH />
        </div>
       
        </>
        
        
    )
}

 