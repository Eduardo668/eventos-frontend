import React from "react";
import NavBar from "../NavBar";
import FooterH from "../FooterH";
import Formulario from "./Form";

const AdicionarEvento = ()=>{
    return (
        <>
        <div className={`overflow-x-hidden  h-screen bg-backgroundAddEvento  bg-cover `}>
          <NavBar />
            <Formulario />
          <FooterH/>
        </div>
        </>
    )
}

export default AdicionarEvento;