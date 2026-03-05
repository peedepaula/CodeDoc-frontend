import api from "@/api.js"; // a instância do Axios que criamos

const TOKEN_KEY = "token_sufla";

// Salvar token no localStorage
export const salvarToken = (token) => {
  localStorage.setItem(TOKEN_KEY, token);
};

// Recuperar token
export const pegarToken = () => {
  return localStorage.getItem(TOKEN_KEY);
};

// Remover token (logout)
export const removerToken = () => {
  localStorage.removeItem(TOKEN_KEY);
};

// Login
export const login = async (email, senha) => {
  try {
    const response = await api.post("/entrar", {
      email_usuario: email,
      senha_usuario: senha,
    });

    salvarToken(response.data.access_token);
    return response.data;
  } catch (error) {
    console.error("Erro no login:", error.response?.data || error.message);
    throw error;
  }
};

// Registrar
export const registrar = async (nome, email, senha) => {
  try {
    const response = await api.post("/registrar", {
      nome_usuario: nome,
      email_usuario: email,
      senha_usuario: senha,
    });

    return response.data;
  } catch (error) {
    console.error("Erro no registro:", error.response?.data || error.message);
    throw error;
  }
};

// Configurar Axios para enviar token em todas as requisições
export const configurarAxios = () => {
  api.interceptors.request.use((config) => {
    const token = pegarToken();
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  });
};