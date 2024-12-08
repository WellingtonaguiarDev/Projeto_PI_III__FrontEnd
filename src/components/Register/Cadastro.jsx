import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios'; // Adicionado para integração com a API
import "./Cadastro.css"; 

const Cadastro = () => {
  const [formData, setFormData] = useState({
    fullname: '',
    email: '',
    password: '',
    confirmPassword: ''
  });

  const [message, setMessage] = useState(null); // Estado para mensagens de sucesso/erro

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      setMessage("As senhas não coincidem!");
      return;
    }

    try {
      const response = await axios.post('https://oceanmap-api.onrender.com/api/register', {
        name: formData.fullname,
        email: formData.email,
        password: formData.password,
      });
      
      setMessage("Cadastro realizado com sucesso!");
      console.log(response.data);
      setFormData({
        fullname: '',
        email: '',
        password: '',
        confirmPassword: ''
      });
    } catch (error) {
      console.error("Erro ao cadastrar:", error.response?.data || error.message);
      setMessage("Erro ao realizar cadastro. Tente novamente.");
    }
  };

  return (
    <>
      <main className="content">
        <h1>Crie sua conta</h1>
        <form className="register-form" onSubmit={handleSubmit}>
          <label htmlFor="fullname">Nome Completo</label>
          <input
            type="text"
            id="fullname"
            name="fullname"
            placeholder="Digite seu nome completo"
            value={formData.fullname}
            onChange={handleChange}
            required
          />

          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Digite seu email"
            value={formData.email}
            onChange={handleChange}
            required
          />

          <label htmlFor="password">Senha</label>
          <input
            type="password"
            id="password"
            name="password"
            placeholder="Digite sua senha"
            value={formData.password}
            onChange={handleChange}
            required
          />

          <label htmlFor="confirm-password">Confirmar Senha</label>
          <input
            type="password"
            id="confirm-password"
            name="confirmPassword"
            placeholder="Confirme sua senha"
            value={formData.confirmPassword}
            onChange={handleChange}
            required
          />

          <button type="submit">Cadastrar</button>
        </form>
        {message && <p className="message">{message}</p>} {/* Mensagem de feedback */}
        <p className="redirect">
          Já possui uma conta? <Link to="/login">Faça login</Link>.
        </p>
      </main>
    </>
  );
};

export { Cadastro };
