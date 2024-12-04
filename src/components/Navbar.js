import React from "react";
import "../assets/css/style.css"; // Ajuste o caminho conforme necessário
import { Link } from "react-router-dom";


const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">
        <img src="/assets/images/logo.jpeg" alt="Logo CallMar" className="logo-img" />
      </div>
      <div className="menu">
        <Link to="/">Inicio</Link>
        <Link to="/sobre-nos">Sobre Nós</Link>
        <Link to="/mapa">Mapa</Link>
        <Link to="/contato">Contato</Link>
        <Link to="/login">Login</Link>
      </div>
    </nav>
  );
};

export default Navbar;
