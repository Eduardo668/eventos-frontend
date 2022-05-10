import React from "react";
import {Route, BrowserRouter} from 'react-router-dom';
import { Routes } from "react-router-dom";
import Home from './components/home-components/Home'


const Rotas = () =>{
    return (
        <BrowserRouter>
            <Routes>
                <Route element={<Home />} path="/"  />
            </Routes>
        </BrowserRouter>
    )
}

export default Rotas;