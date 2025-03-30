import { createStore } from "redux";

// Ação para editar o usuário
const EDITAR_USUARIO = "EDITAR_USUARIO";

// Ação para editar o usuário
const editarUsuario = (usuario) => ({
  type: EDITAR_USUARIO,
  payload: usuario,
});

// Reducer
const usuarioReducer = (state = { usuarioParaEditar: null }, action) => {
  switch (action.type) {
    case EDITAR_USUARIO:
      return { ...state, usuarioParaEditar: action.payload };
    default:
      return state;
  }
};

// Criando a store
const store = createStore(usuarioReducer);

export { store, editarUsuario };
