import React, { useEffect, useState } from 'react';
import NavBar from '../NavBar';
import FooterH from '../FooterH';
import Evento from './Evento';

const lista_de_eventos_api = "http://localhost:8080/eventos/list"



const Eventos = ()=>{

   const [eventos, setEventos] = useState([]);
    

   const fetchListaDeEvento = async ()=>{
      const response = await fetch(lista_de_eventos_api);
      const data = await response.json();
      setEventos(data);
   }
   

   useEffect(()=>{
      fetchListaDeEvento();
   }, [])

    return (
      <>
        <div className={`overflow-x-hidden h-screen  bg-cover `}>
          <NavBar />
          <h1 className=" text-gray text-6xl font-bold relative top-[10rem] left-10 ">Eventos Disponiveis</h1>
          <div className="w-full relative mt-[15rem] flex justify-center items-center flex-wrap ">
            {
              eventos.length == 0 ? <h2 className=" text-gray   relative top-20 text-4xl font-bold">Nenhum evento encontrado</h2> :
              eventos.map(evento => (
                <Evento evento={evento} />
              ))
            }
          </div>
          <FooterH/>
        </div>
       
        </>
    )
   
}

export default Eventos;
