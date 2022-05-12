import React from "react";
import { Container } from "react-bootstrap";

const Apresentation = ()=>{
    return (
        <>
        <Container className="h-screen w-full">
           <h1 className="font-mono relative top-[10rem] mb-10 text-white text-7xl">Enhanced House</h1>
           <button onClick={()=>window.location.href = "/lista-eventos"} className="w-[25rem] hover:transition duration-700 ease-in hover:animate-bounce  font-sans text-3xl text-white p-3 rounded-lg bg-gradient-to-r  from-sky-500 to-blue-800  relative top-[9rem] ">Ver eventos disponiveis</button>
        </Container>
        </>
    )
}

export default Apresentation;