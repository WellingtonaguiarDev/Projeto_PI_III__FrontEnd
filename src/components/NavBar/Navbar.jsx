import React from "react";
import logo from "../../assets/images/logo.jpeg";
import { Link } from "react-router-dom";
import "./Navbar.css";


const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">
        <img src={logo} alt="Logo CallMar" className="logo-img" />
      </div>
      <div className="menu">
        <Link to="/">Inicio</Link>
        <Link to="/mapa">Mapa</Link>
        <Link to="/sobre-nos">Sobre Nós</Link>
        <Link to="/contato">Contato</Link>
        <Link to="/login">Login</Link>
      </div>
    </nav>
  );
};

export { Navbar };
