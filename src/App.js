import React from "react";
import "./App.css"; // Caso queira adicionar algum estilo global
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./components/HomePage";
import AboutPage from "./components/AboutPage";
import MapsPage from "./components/MapsPage";
import ContactPage from "./components/ContactPage";
import LoginPage from "./components/LoginPage";
import Cadastro from "./components/Cadastro";


const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/sobre-nos" element={<AboutPage />} />
        <Route path="/mapa" element={<MapsPage />} /> {/* Adiciona a rota para Maps */}
        <Route path="/contato" element={<ContactPage />} /> 
        <Route path="/login" element={<LoginPage />} /> 
        <Route path="/cadastro" element={<Cadastro />} /> 
      </Routes>
    </Router>
  );
};

export default App;
