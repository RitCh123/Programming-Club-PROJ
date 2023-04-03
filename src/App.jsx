import React from 'react';

import "./App.css";

import { Route, Routes } from "react-router-dom";

import Home from "./Home.jsx";

import Login from "./Login.jsx";

function App() {

  return (

    <Routes>

      <Route path="/" element={<Home />}></Route>

      <Route path="/login" element={<Login />}></Route>
      
    </Routes>
    
  )
  
}

export default App;