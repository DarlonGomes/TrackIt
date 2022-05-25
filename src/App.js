import React from "react"
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import DataProvider from "./context/UserContext";
import Login from "./authentication/Login";
import SignIn from "./authentication/SignIn"
import Hoje from "./onboard/Hoje";
export default function App (){
  return (
    <DataProvider>
      <BrowserRouter>
      <Routes>
          <Route path="/" element={<Login/>} />
          <Route path="/cadastro" element={<SignIn/>} />
          <Route path="/hoje" element={<Hoje/>} />
      </Routes>
      </BrowserRouter>
    </DataProvider>
  )  
}