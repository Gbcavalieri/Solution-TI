import React, { useState, useEffect } from "react";
import { listarUsuarios, excluirUsuario } from "../services/apiUsuarios";
import { useNavigate } from "react-router-dom";

const ListarUsuarios = ({ setUsuarioParaEditar }) => { // Verifica se está sendo passada corretamente
  console.log(setUsuarioParaEditar); 
  // Verifique se a prop está sendo passada corretamente
  const [usuarios, setUsuarios] = useState([]);
  const navigate = useNavigate();

  // Função para carregar os usuários
  const carregarUsuarios = async () => {
    const dados = await listarUsuarios();
    setUsuarios(dados);
  };

  useEffect(() => {
    carregarUsuarios();
  }, []);

  // Função para editar um usuário
  const handleEditar = (usuario) => {
    console.log("Botão Editar clicado para:", usuario); // Debug no console
    if (setUsuarioParaEditar && typeof setUsuarioParaEditar === 'function') {
      console.log("setUsuarioParaEditar está sendo chamado.");
      setUsuarioParaEditar(usuario);
      navigate("/editar"); // Navegar para a página de edição
    } else {
      console.error('setUsuarioParaEditar não está definido corretamente');
    }
  };

  // Função para excluir um usuário
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
              <button onClick={() => handleEditar(usuario)}>Editar</button>
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
