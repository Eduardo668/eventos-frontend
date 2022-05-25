import React from "react";


const Evento = ({ evento })=>{

     return (
         <>
            <div className={" relative m-[1.5rem] bg-dark w-[23rem] rounded-[30px] h-[30rem]  "}>
               <img className="w-full h-full bg-cover rounded-[30px] opacity-80 relative" src={evento.fotoLink} alt="" />
               <div className="relative bottom-[10rem]">
               <h3 className=" p-3 w-full rounded-t-[30px] bg-gradient-to-r  from-indigo-500 to-purple-900 text-white font-bold z-10 text-[1.5rem] relative bottom-[20rem] mb-4">{evento.nome_evento}</h3>
                <h3 className="p-2 w-[20rem] bg-gradient-to-r  from-indigo-500 to-purple-900 rounded-r-[30px] text-white font-bold z-10 text-[1.5rem] relative bottom-[20rem] mb-4 ">Local - {evento.local}</h3>
                <h3 className="p-2 w-[20rem] bg-gradient-to-r  from-indigo-500 to-purple-900 rounded-r-[30px] text-white font-bold z-10 text-[1.5rem] relative bottom-[20rem] mb-4 ">Preço -  R${evento.preco}</h3>
                <h3 className="p-2 w-[20rem] bg-gradient-to-r  from-indigo-500 to-purple-900 rounded-r-[30px] text-white font-bold z-10 text-[1.5rem] relative bottom-[20rem] mb-4 ">Data - {evento.dataEvento} </h3>
               </div>
               <button className="bg-gradient-to-r hover:animate-pulse from-indigo-500 z-10 p-3  to-purple-900 rounded-[30px] relative text-3xl bottom-[25rem] left-[5.2rem] text-white">Ver detalhes</button>
                
            </div>
         </>
     )
}


export default Evento;