import { Button, Col, Container, FormControl, InputGroup } from "react-bootstrap";
import mp4 from "../../assets/videos/callmar.mp4";
import "./HomePage.css";
import { Search } from "react-bootstrap-icons";
import { useState } from "react";
import { useNavigate } from "react-router-dom";


const HomePage = () => {
  const [query, setQuery] = useState('');
  const navigate = useNavigate();

  const handleSearch = () => {
    if (query.trim()) {
      navigate(`/mapa${query}`);
    }
  };

  return (
    <>
      <video className="video-bg" autoPlay loop muted>
        <source src={mp4} type="video/mp4" />
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
        <Container fluid>
          <Col lg={5} id="searchBar">
            <InputGroup>
              <FormControl
                id="inputCustom"
                placeholder="Para onde vamos?"
                aria-label="Pesquisar"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
              />
              <Button
                id="buttonCustom"
                onClick={handleSearch}
              >
                <Search className="search-icon" id="iconCustom"/>
              </Button>
            </InputGroup>
          </Col>          
        </Container>
        
      </section>
    </>
  );
};

export { HomePage };