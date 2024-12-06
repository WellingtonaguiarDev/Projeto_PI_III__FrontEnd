import React from "react";
import { Navbar } from '../NavBar';
import "./Contact.css";

const ContactPage = () => {
  return (
    <>
    <Navbar />
    <div className="content">
      <h1>Como podemos ajudar?</h1>
      <form className="contact-form">
        <label htmlFor="name">Nome</label>
        <input type="text" id="name" name="name" placeholder="Nome completo" required />

        <label htmlFor="email">Email</label>
        <input type="email" id="email" name="email" placeholder="exemplo@gmail.com" required />

        <label htmlFor="message">Sua Mensagem</label>
        <textarea id="message" name="message" rows="5" placeholder="Digite sua mensagem aqui..." required></textarea>

        <button type="submit">Enviar</button>
      </form>
    </div>
    </>
  );
};

export { ContactPage };
