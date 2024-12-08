import React, { createContext, useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { loginUser, register } from "./services/authService";  // Corrigido para os imports corretos

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  // Manter a sessão ao recarregar
  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      try {
        setUser(JSON.parse(storedUser));
      } catch (error) {
        console.error("Erro ao analisar o usuário armazenado:", error);
        localStorage.removeItem("user");
      }
    }
  }, []);

  // Alterado para usar loginUser da autenticação
  const login = async (email, password) => {
    try {
      const response = await loginUser(email, password); // Função correta do authService
      const userData = response.data;
      setUser(userData);
      localStorage.setItem("user", JSON.stringify(userData));
      navigate("/dashboard");
    } catch (error) {
      console.error("Erro ao fazer login:", error.message);
      alert("Credenciais inválidas!");
    }
  };

  // Alterado para usar o register da autenticação
  const registerUser = async (name, email, password) => {  // Renomeado para evitar conflitos com o método de login
    try {
      await register(name, email, password); // Função correta do authService
      alert("Cadastro realizado com sucesso! Faça login.");
      navigate("/login");
    } catch (error) {
      console.error("Erro ao cadastrar:", error.message);
      alert("Erro no registro, tente novamente.");
    }
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem("user");
    navigate("/login");
  };

  return (
    <AuthContext.Provider value={{ user, login, register: registerUser, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};

export { AuthProvider };
