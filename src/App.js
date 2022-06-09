import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Loginpage from "./pages/login";
import MeusPoke from "./pages/meusPoke";
import Listar from "./pages/listaTeste";


import { UserContext } from "./auth";

export default function App() {
  const { currentUser } = React.useContext(UserContext);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Loginpage />} />
        <Route path="/meus" element={<MeusPoke />} />
        <Route path="/listar" element={<Listar />} />
        <Route path="*" element={<Navigate to="/login" replace />}/>
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