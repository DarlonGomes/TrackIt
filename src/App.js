import React from "react"
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from "./Authentication/Login";
import SignIn from "./Authentication/SignIn"
export default function App (){
  return (
      <BrowserRouter>
      <Routes>
          <Route path="/" element={<Login/>} />
          <Route path="/cadastro" element={<SignIn/>} />
      </Routes>
      </BrowserRouter>
  )  
}