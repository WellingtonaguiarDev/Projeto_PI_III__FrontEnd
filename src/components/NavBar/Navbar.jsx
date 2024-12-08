import React from "react";
import logo from "../../assets/images/logo.jpeg";
import { Link } from "react-router-dom";
import { useAuth } from "../../authcontext"; // Importando o hook useAuth
import "./Navbar.css";
import { Button } from "react-bootstrap";

const Navbar = () => {
  const { user, logout } = useAuth();

  const getInitial = (name) => {
    if (name && name.length > 0) {
      return name.charAt(0).toUpperCase();
    }
    return "";
  };

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
        {user ? (
            <Button onClick={logout} className="btn-logout">Logout</Button>
            
             
        ) : (
          <Link to="/login">Login</Link>
          
        )}
        

      </div>
      
    </nav>
  );
};

export { Navbar };
