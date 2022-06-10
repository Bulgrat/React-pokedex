import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Loginpage from "./pages/login";
import MeusPoke from "./pages/meusPoke";
import Listar from "./pages/lista";
import RegisterPage from "./pages/register";

import { UserContext } from "./auth";

export default function App() {
  const { currentUser } = React.useContext(UserContext);

  if (!currentUser) {
    return (
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Loginpage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="*" element={<Navigate to="/login" replace />} />
        </Routes>
      </BrowserRouter>
    )
  }
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Loginpage />} />
        <Route path="/meus" element={<MeusPoke />} />
        <Route path="/listar" element={<Listar />} />
        <Route path="*" element={<Navigate to="/login" replace />} />
        <Route path="/" element={<MeusPoke />} />
      </Routes>
    </BrowserRouter>
  )
}