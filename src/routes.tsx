import React from "react";
import { BrowserRouter,  Route, Routes } from 'react-router-dom';

import Navbar from "./components/Navbar";
import HomePage from "./components/HomePage";
import Cart from "./components/Cart";
import Signup from "./components/Account/Signup";
import Login from "./components/Account/Login";
import Dashboard from "./components/Dashboard";


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
                    <Route path="/account-signup" element={
                        <Signup/>
                    }/>
                    <Route path="/account-login" element={
                        <Login/>
                    }/>
                     <Route path="/dashboard" element={
                        <Dashboard/>
                    }/>
                </Routes>
            </BrowserRouter>
        </div>
    )
}

export default Router;