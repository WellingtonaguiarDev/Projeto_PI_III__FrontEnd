import React from "react";
import "../assets/css/sobrenos.css"; // Caminho correto para o estilo da página "Sobre Nós"
import Navbar from "./Navbar";


const AboutPage = () => {
  return (
    <>
      <Navbar />
      <section className="sobre-nos">
        <div className="container">
          <h1>Sobre Nós</h1>
          <p>
            Na Callmar, nossa missão é agilizar o processo de localização das
            áreas de risco nas praias do litoral do nordeste de Pernambuco. Nosso
            objetivo é fornecer uma plataforma amigável que torne toda experiência
            de lazer mais suave e segura.
          </p>
          <button className="saiba-mais">Saiba mais</button>
        </div>
        <div className="image-container">
          <img
            src="/assets/images/image1.png"
            alt="Imagem de um celular com a logo da Callmar"
            className="image-responsiva"
          />
        </div>
      </section>
    </>
  );
};

export default AboutPage;
