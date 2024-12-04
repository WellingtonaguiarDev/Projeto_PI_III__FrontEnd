// src/components/MapsPage.js
import React from 'react';
import '../assets/css/maps.css';

const MapsPage = () => {
    return (
        <div>
            <nav className="navbar">
                <div className="logo">
                    <img src="../assets/images/logo.jpeg" alt="Logo CallMar" className="logo-img" />
                </div>
                <div className="menu">
                    <a href="/">Inicio</a>
                    <a href="/sobre-nos">Sobre Nós</a>
                    <a href="/mapa">Mapa</a>
                    <a href="/contato">Contato</a>
                    <a href="/login">Login</a>
                </div>
            </nav>
        </div>
    );
};

export default MapsPage;
