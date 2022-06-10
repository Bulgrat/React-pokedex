import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import React from "react";
import Login from "./pages/login";
import MeusPoke from "./pages/meusPoke";
import Listar from "./pages/listaTeste";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/meus" element={<MeusPoke />} />
        <Route path="/listar" element={<Listar />} />
      </Routes>
    </BrowserRouter>
    // <BrowserRouter>
    //   <div className="App">
    //     <h1>teste</h1>
    //     <Login></Login>
    //   </div>
    // </BrowserRouter>
  );
}

export default App;
