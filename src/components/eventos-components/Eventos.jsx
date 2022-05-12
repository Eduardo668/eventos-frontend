import React, { useEffect, useState } from 'react';
import NavBar from '../NavBar';
import FooterH from '../FooterH';
import Evento from './Evento';

const lista_de_eventos_api = "http://localhost:8080/eventos/list"
const linkTestApi = "https://test-api-student1.herokuapp.com/rota/list"


const Eventos = ()=>{

   const [eventos, setEventos] = useState([]);
    

   const fetchListaDeEvento = async ()=>{
      const response = await fetch(linkTestApi);
      const data = await response.json();
      setEventos(data);
   }
   let a = "g"

   useEffect(()=>{
      fetchListaDeEvento();
   }, [])

    return (
        <div className={`overflow-x-hidden  bg-cover `}>
          <NavBar />
          <h1 className=" ">Eventos Disponiveis</h1>
          <div className="w-full relative mt-[15rem] flex justify-center items-center flex-wrap ">
            {
              eventos.map(evento => (
                <Evento evento={evento} />
              ))
            }
          </div>
        </div>
    )
}

export default Eventos;
