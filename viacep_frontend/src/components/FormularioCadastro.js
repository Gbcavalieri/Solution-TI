import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { cadastrarUsuario, atualizarUsuario } from "../services/apiUsuarios";
import { buscarEndereco } from "../services/viacep";

const FormularioCadastro = ({ usuarioParaEditar, setUsuarioParaEditar }) => {
  const [usuario, setUsuario] = useState({
    nome: "",
    cpf: "",
    cep: "",
    logradouro: "",
    bairro: "",
    cidade: "",
    estado: "",
  });

  const navigate = useNavigate();

  useEffect(() => {
    if (usuarioParaEditar) {
      setUsuario(usuarioParaEditar);
    }
  }, [usuarioParaEditar]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUsuario({ ...usuario, [name]: value });
  };

  const handleCepBlur = async () => {
    if (usuario.cep.length === 8) {
      const endereco = await buscarEndereco(usuario.cep);
      if (endereco) {
        setUsuario({
          ...usuario,
          logradouro: endereco.logradouro,
          bairro: endereco.bairro,
          cidade: endereco.localidade,
          estado: endereco.uf,
        });
      }
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (usuarioParaEditar) {
      await atualizarUsuario(usuario);
    } else {
      await cadastrarUsuario(usuario);
    }
    setUsuarioParaEditar(null);
    navigate("/usuarios");
  };

  return (
    <div>
      <h2>{usuarioParaEditar ? "Editar Usuário" : "Cadastrar Usuário"}</h2>
      <form onSubmit={handleSubmit}>
        <label>Nome:</label>
        <input type="text" name="nome" value={usuario.nome} onChange={handleChange} required />

        <label>CPF:</label>
        <input
          type="text"
          name="cpf"
          value={usuario.cpf}
          onChange={handleChange}
          disabled={!!usuarioParaEditar}
          required
        />

        <label>CEP:</label>
        <input type="text" name="cep" value={usuario.cep} onChange={handleChange} onBlur={handleCepBlur} required />

        <label>Logradouro:</label>
        <input type="text" name="logradouro" value={usuario.logradouro} onChange={handleChange} required />

        <label>Bairro:</label>
        <input type="text" name="bairro" value={usuario.bairro} onChange={handleChange} required />

        <label>Cidade:</label>
        <input type="text" name="cidade" value={usuario.cidade} onChange={handleChange} required />

        <label>Estado:</label>
        <input type="text" name="estado" value={usuario.estado} onChange={handleChange} required />

        <button type="submit">Salvar</button>
        <button type="button" onClick={() => navigate("/usuarios")}>
          Cancelar
        </button>
      </form>
    </div>
  );
};

export default FormularioCadastro;
