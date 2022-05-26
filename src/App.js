import React from "react"
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import DataProvider from "./context/UserContext";
import { ProgressProvider } from "./context/ProgressContext";
import Login from "./authentication/Login";
import SignIn from "./authentication/SignIn"
import Today from './onboard/today-route/Today.js'
import History from "./onboard/history-route/History";
import Habits from "./onboard/habits-route/Habits";
export default function App (){
  return (
    <DataProvider>
      <ProgressProvider>
        <BrowserRouter>
          <Routes>
              <Route path="/" element={<Login/>} />
              <Route path="/cadastro" element={<SignIn/>} />
              <Route path="/hoje" element={<Today/>} />
              <Route path="/habitos" element={<Habits/>} />
              <Route path="/historico" element={<History/>} />
          </Routes>
        </BrowserRouter>
      </ProgressProvider>
    </DataProvider>
  )  
}