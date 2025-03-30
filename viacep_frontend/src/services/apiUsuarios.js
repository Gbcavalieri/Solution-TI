import axios from "axios";

const API_URL = "http://localhost:8080/usuarios";

export const listarUsuarios = async () => {
  const response = await axios.get(API_URL);
  return response.data;
};

export const cadastrarUsuario = async (usuario) => {
  await axios.post(API_URL, usuario);
};

export const atualizarUsuario = async (usuario) => {
  await axios.put(`${API_URL}/${usuario.cpf}`, usuario);
};

export const excluirUsuario = async (cpf) => {
  await axios.delete(`${API_URL}/${cpf}`);
};
export const buscarUsuarioPorCpf = async (cpf) => {
  try {
    const response = await axios.get(`${API_URL}/${cpf}`); // Fazendo a requisição para buscar o usuário pelo CPF
    return response.data; // Retorna os dados do usuário
  } catch (error) {
    console.error('Erro ao buscar usuário:', error);
    return null; // Retorna null em caso de erro
  }
};