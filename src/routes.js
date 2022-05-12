import React from "react";
import {Route, BrowserRouter} from 'react-router-dom';
import { Routes } from "react-router-dom";
import Home from './components/home-components/Home'
import Eventos from './components/eventos-components/Eventos'
import AdicionarEvento from "./components/add-eventos-component/AdicionarEvento";

const Rotas = () =>{
    return (
        <BrowserRouter>
            <Routes>
                <Route element={<Home />} path="/home"  />
                <Route element={<Eventos />} path="/lista-eventos" />
                <Route element={<AdicionarEvento />} path="add-evento"/>
            </Routes> 
        </BrowserRouter>
    )
}

export default Rotas;