import { Button, Col, Container, FormControl, InputGroup } from "react-bootstrap";
import mp4 from "../../assets/videos/callmar.mp4";
import { getGeocode } from "../../utils/getGeocode";
import { getWeather } from "../../utils/getWeather";
import "./HomePage.css";
import { Search } from "react-bootstrap-icons";
import { useState } from "react";
import { useNavigate } from "react-router-dom";


const HomePage = () => {
  const navigate = useNavigate(); // Hook de navegação
  const [search, setSearch] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const getData = async () => {
      setIsLoading(true);
      
      try {
          // Busca simultânea de geocodificação e dados meteorológicos
          const [geocode, weather] = await Promise.all([
              getGeocode(search),
              getWeather(search)
          ]);

          // Validações dos dados obtidos
          if (!geocode) {
              throw new Error('Não foi possível encontrar as coordenadas da praia');
          }

          if (!weather) {
              throw new Error('Não foi possível obter os dados meteorológicos');
          }

          
          navigate("/mapa", { 
              state: { 
                  target: geocode.properties.address.formattedAddress,
                  geocodeData: geocode,
                  weatherData: weather 
              } 
          });

      } catch (error) {
          console.error("Erro ao obter os dados:", error);
      } finally {
          setIsLoading(false);
      }
  };

  const handleSearchClick = () => {
      if (search.trim()) {
          getData();
      } else {
          console.error('Por favor, digite o nome de uma praia.');
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
        <Container>
          <Col lg={5} id="searchBar">
            <InputGroup id="inputGroup">
              <FormControl
                id="inputCustom"
                placeholder="Para onde vamos?"
                aria-label="Pesquisar"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
              <Button
                id="buttonCustom"
                onClick={handleSearchClick}
                disabled={isLoading}
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