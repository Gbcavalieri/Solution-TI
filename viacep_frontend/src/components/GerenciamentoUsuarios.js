import React, { useState } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import FormularioCadastro from "./FormularioCadastro";
import ListarUsuarios from "./ListarUsuarios";
import FormularioEditar from "./FormularioEditar"

function GerenciamentoUsuarios() {
  const [usuarioParaEditar, setUsuarioParaEditar] = useState(null);
  const navigate = useNavigate();

  const handleUsuarioSalvo = () => {
    navigate("/usuarios"); // Redireciona para a lista após salvar
  };

  return (
    <div>
      <h1>Gerenciamento de Usuários</h1>
      <Routes>
        <Route
          path="/"
          element={
            <FormularioCadastro
              usuarioParaEditar={usuarioParaEditar}
              setUsuarioParaEditar={setUsuarioParaEditar}
              onUsuarioSalvo={handleUsuarioSalvo}
            />
          }
        />
        <Route
          path="/usuarios"
          element={
            <ListarUsuarios setUsuarioParaEditar={setUsuarioParaEditar} /> // Passando a função
          }
        />
        <Route
          path="/editar"
          element={
            <FormularioEditar
              usuarioParaEditar={usuarioParaEditar}
              setUsuarioParaEditar={setUsuarioParaEditar}
              onUsuarioSalvo={handleUsuarioSalvo}
            />
          }
        />
      </Routes>
    </div>
  );
}

export default GerenciamentoUsuarios;
