import React from "react";
import "../assets/css/style.css"; // Caminho correto para o estilo da tela principal
import Navbar from "./Navbar";


const HomePage = () => {
  return (
    <>
      <Navbar />
      <video className="video-bg" autoPlay loop muted>
        <source src="/assets/videos/callmar.mp4" type="video/mp4" />
        Seu navegador não suporta a tag de vídeo.
      </video>
      <section className="centro">
        <h1>Simplifique sua procura</h1>
        <p>
          Com o CallMar você encontrará um novo jeito de curtir as praias
          do litoral pernambucano com segurança e tranquilidade
        </p>
        <div className="search-box">
          <input type="text" placeholder="Para onde vamos?" />
          <button type="submit">🔍</button>
        </div>
      </section>
    </>
  );
};

export default HomePage;
