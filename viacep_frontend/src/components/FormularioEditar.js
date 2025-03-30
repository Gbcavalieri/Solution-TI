
import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { buscarUsuarioPorCpf, atualizarUsuario } from "../services/apiUsuarios"; // Certifique-se de que a função está importada corretamente

const FormularioCadastro = () => {
  const [usuario, setUsuario] = useState({
    nome: "",
    cpf: "",
    cep: "",
    logradouro: "",
    bairro: "",
    cidade: "",
    estado: "",
  });
  const { cpf } = useParams(); // Pegando o parâmetro da URL
  const navigate = useNavigate();

  useEffect(() => {
    if (cpf) {
      // Buscar os dados do usuário com o CPF
      const carregarUsuario = async () => {
        const dados = await buscarUsuarioPorCpf(cpf);
        if (dados) {
          setUsuario(dados);
        } else {
          // Lidar com o erro, como redirecionar ou exibir mensagem
          navigate("/usuarios");
        }
      };
      carregarUsuario();
    }
  }, [cpf, navigate]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUsuario({ ...usuario, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await atualizarUsuario(usuario);
    navigate("/usuarios");
  };
  

  return (
    <div>
      <h2>Editar Usuário</h2>
      <form onSubmit={handleSubmit}>
        <label>Nome:</label>
        <input
          type="text"
          name="nome"
          value={usuario.nome}
          onChange={handleChange}
          required
        />
        
        <label>CPF:</label>
        <input
          type="text"
          name="cpf"
          value={usuario.cpf}
          onChange={handleChange}
          disabled={true} // O CPF é desabilitado para edição
          required
        />
        
        <label>CEP:</label>
        <input
          type="text"
          name="cep"
          value={usuario.cep}
          onChange={handleChange}
          required
        />
        
        <label>Logradouro:</label>
        <input
          type="text"
          name="logradouro"
          value={usuario.logradouro}
          onChange={handleChange}
          required
        />
        
        <label>Bairro:</label>
        <input
          type="text"
          name="bairro"
          value={usuario.bairro}
          onChange={handleChange}
          required
        />
        
        <label>Cidade:</label>
        <input
          type="text"
          name="cidade"
          value={usuario.cidade}
          onChange={handleChange}
          required
        />
        
        <label>Estado:</label>
        <input
          type="text"
          name="estado"
          value={usuario.estado}
          onChange={handleChange}
          required
        />
        
        <button type="submit">Salvar</button>
      </form>
    </div>
  );
};

export default FormularioCadastro;
