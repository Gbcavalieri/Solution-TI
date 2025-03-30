import React, { useState, useEffect } from "react";
import { listarUsuarios, excluirUsuario } from "../services/apiUsuarios";
import { useNavigate } from "react-router-dom";

const ListarUsuarios = () => {
  const [usuarios, setUsuarios] = useState([]);
  const navigate = useNavigate();

  const carregarUsuarios = async () => {
    const dados = await listarUsuarios();
    setUsuarios(dados);
  };

  useEffect(() => {
    carregarUsuarios();
  }, []);

  const handleEditar = (cpf) => {
    navigate(`/editar/${cpf}`); // Navega para a página de edição com o CPF como parâmetro
  };
  const handleExcluir = async (cpf) => {
    await excluirUsuario(cpf);
    carregarUsuarios();
  };

  return (
    <div>
      <h2>Usuários Cadastrados</h2>
      <ul>
        {Array.isArray(usuarios) && usuarios.length > 0 ? (
          usuarios.map((usuario) => (
            <li key={usuario.cpf}>
              {usuario.nome} - {usuario.cpf} - {usuario.cep} - {usuario.logradouro} - {usuario.bairro} - {usuario.cidade} - {usuario.estado}
              <button onClick={() => handleEditar(usuario.cpf)}>Editar</button>
              <button onClick={() => handleExcluir(usuario.cpf)}>Excluir</button>
            </li>
          ))
        ) : (
          <li>Nenhum usuário encontrado</li>
        )}
      </ul>
      <button onClick={() => navigate("/")}>Cadastrar Novo Usuário</button>
    </div>
  );
};

export default ListarUsuarios;
