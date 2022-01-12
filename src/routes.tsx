import React from "react";
import { BrowserRouter,  Route, Routes } from 'react-router-dom';

import Navbar from "./components/Navbar";
import HomePage from "./components/HomePage";
import Cart from "./components/Cart";

const Router : React.FC = ()=>{
    return(
        <div>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={
                        <Navbar>
                            <HomePage/>
                        </Navbar>
                    }/>
                    <Route path="/cart" element={
                        <Navbar>
                            <Cart/>
                        </Navbar>
                    }/>
                </Routes>
            </BrowserRouter>
        </div>
    )
}

export default Router;