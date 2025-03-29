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
