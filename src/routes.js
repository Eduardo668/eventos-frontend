import React from "react";
import {Route, BrowserRouter} from 'react-router-dom';
import { Routes } from "react-router-dom";
import Home from './components/home-components/Home'
import Eventos from './components/eventos-components/Eventos'


const Rotas = () =>{
    return (
        <BrowserRouter>
            <Routes>
                <Route element={<Home />} path="/home"  />
                <Route element={<Eventos />} path="/lista-eventos" />
            </Routes>
        </BrowserRouter>
    )
}

export default Rotas;