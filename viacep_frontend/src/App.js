import React from "react";
import { Routes, Route } from "react-router-dom";
import GerenciamentoUsuarios from './components/GerenciamentoUsuarios';
import ListarUsuarios from './components/ListarUsuarios';
import FormularioCadastro from './components/FormularioCadastro';
import FormularioEditar from './components/FormularioEditar';



function App() {
  return (
    <Routes>
      <Route path="/usuarios" element={<ListarUsuarios />} />
      <Route path="/" element={<GerenciamentoUsuarios />} />
      <Route path="/editar/:cpf" element={<FormularioEditar />} /> Parametro na URL

    </Routes>
  );
}

export default App;
