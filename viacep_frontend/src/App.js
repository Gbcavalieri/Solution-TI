import React from "react";
import { Routes, Route } from "react-router-dom";
import GerenciamentoUsuarios from './components/GerenciamentoUsuarios';
import ListarUsuarios from './components/ListarUsuarios';


function App() {
  return (
    <Routes>
      <Route path="/usuarios" element={<ListarUsuarios />} />
      <Route path="/" element={<GerenciamentoUsuarios />} /> {/* Página principal */}
      <Route 
        path="/editar" 
        element={
          <GerenciamentoUsuarios /> // Aqui você mantém a navegação e as props necessárias
        } 
      />
    </Routes>
  );
}

export default App;
