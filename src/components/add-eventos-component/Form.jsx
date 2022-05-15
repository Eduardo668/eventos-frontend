import React from "react";
import {useEffect, useState} from 'react'
import { Container, FormCheck , Form, FormLabel} from "react-bootstrap";

const API_URL_SAVE = "http://localhost:8080/eventos/addEvento"

const Formulario = ()=>{
    
     const [evento, setEvento] = useState({
         "nome_evento": "",
         "local": "",
         "preco": 0,
         "dataEvento": "",
         "fotoEvento": "" 
     })

    const saveEvento =  (evento)=>{
        evento.preventDefaut();
         fetch(API_URL_SAVE, {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(evento)
        });
    }

    
     useEffect(()=>{
      
     }, [])

    return (
    <>
      <div className="relative top-5  container-fluid  rounded-[30px] w-[65%]  bg-gradient-to-r z-10 from-indigo-500 to-purple-900 h-[38rem] ">
           <h1 className="text-white font-bold text-center text-[3rem] relative top-7">Cadastrar evento</h1>
           <div className="relative items-center justify-center block flex-wrap left-[5rem] top-[5rem]">
                <form action="">
                    <div className="mb-3">
                        <label htmlFor="inputEventName" className="text-white form-label font-semibold">Nome do evento</label>
                        <input id="inputEventName" onChange={(e)=>{
                            setEvento(evento.nome_evento = e.target.value)
                        }} className="form-control w-[30%]" type="text" />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="inputEventLocal" className="text-white form-label font-semibold">Local do evento</label>
                        <input id="inputEventLocal" onChange={(e)=>{
                            setEvento(evento.local = e.target.value)
                        }} className="form-control w-[30%]" type="text" />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="inputEventPreco" className="text-white form-label font-semibold">Preço</label>
                        <input id="inputEventPreco" placeholder="R$" onChange={(e)=>{
                            setEvento(evento.preco = e.target.value)
                        }} className="form-control w-[30%]" type="number" />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="inputEventDate" className="text-white form-label font-semibold">Data do evento</label>
                        <input id="inputEventDate"  onChange={(e)=>{
                            setEvento(evento.dataEvento = e.target.value)
                        }} className="form-control w-[30%]" type="date" />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="inputEventDate" className="text-white form-label font-semibold">Imagem relacionada ao evento</label>
                        <input id="inputEventDate" onChange={(e)=>{
                            setEvento(evento.dataEvento = e.target.value)
                        }} className="form-control w-[9rem]" type="file" accept="image/png, image/jpeg" />
                    </div>
                </form>
           </div>
      </div>
    </>
    )
}

export default Formulario;