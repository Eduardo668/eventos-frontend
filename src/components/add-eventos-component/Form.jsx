import React from "react";
import { Container, FormCheck , Form, FormLabel} from "react-bootstrap";

const Formulario = ()=>{
    return (
    <>
      <div className="container-fluid flex justify-center items-center flex-wrap mt-[8rem] ml-[16rem] rounded-[30px] w-[50rem] relative bg-gradient-to-r z-10 from-indigo-500 to-purple-900 h-[40rem] ">
         <h1 className="text-white relative ml-[10rem] top-[5rem] font-bold text-6xl">Cadastrar Evento</h1>
         <div className=" block ml-auto mr-auto z-20 relative top-20">
             <Form>
                 <Form.Group>
                     <Form.Label>Nome do evento</Form.Label>
                     <Form.Control className="w-[10rem]" type={"text"} />
                 </Form.Group>
             </Form>
         </div>
      </div>
    </>
    )
}

export default Formulario;