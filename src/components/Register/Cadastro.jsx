import React, { useState } from 'react';
import { Navbar } from '../NavBar';
import { Link } from 'react-router-dom';
import "./Cadastro.css"; 

const Cadastro = () => {
  const [formData, setFormData] = useState({
    fullname: '',
    email: '',
    password: '',
    confirmPassword: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Adicione a lógica para processar o formulário de cadastro
    console.log(formData);
  };

  return (
    <>
      <Navbar />
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
        <p className="redirect">
          Já possui uma conta? <Link to="/login">Faça login</Link>.
        </p>
      </main>
    </>
  );
};

export { Cadastro };
