import React, { useState, useEffect } from 'react';
import { SearchBar } from '../SearchBar';
import { AzureWeather } from '../Weather';
import { MapaAzure } from '../Map';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import { useLocation, useNavigate } from 'react-router-dom';
import { getGeocode } from '../../utils/getGeocode';
import { getWeather } from '../../utils/getWeather';
import risksData from '../../utils/riskData';
import './Dashboard.css';

const Dashboard = () => {
    const location = useLocation();
    const navigate = useNavigate();
    
    const [searchData, setSearchData] = useState(null);
    const [listRisks, setRisks] = useState([]);

    // Efeito para carregar dados iniciais da navegação
    useEffect(() => {
        if (location.state) {
            setSearchData(location.state);
            const nameBeach = location.state.target.split(',')[0].trim();
            checkForRisks(nameBeach)
        }
        
    }, [location.state]);

    const checkForRisks = (searchTerm) => {
        const risks = risksData[searchTerm];

        if (risks) {
            setRisks(risks.risks);
        } else {
            setRisks([]);
        }
    };

    // Função para realizar nova pesquisa depois que estiver na página do mapa
    const handleNewSearch = async (searchTerm) => {
        try {
            const geocodeData = await getGeocode(searchTerm);
            const target = geocodeData.properties.address.formattedAddress;
            const weatherData = await getWeather(searchTerm);

            const newSearchData = {
                target,
                geocodeData,
                weatherData
            };

            setSearchData(newSearchData);
            checkForRisks(target.split(',')[0].trim())
            navigate('/mapa', {
                state: newSearchData,
                replace: true
            });
        } catch (error) {
            console.error('Erro na nova busca', error);
            alert('Erro ao buscar dados. Tente novamente.');
        }
    };

    return (
        <Container>
            <Col>
                <Row id='RowFirst'>
                    <SearchBar onSearch={handleNewSearch} />
                </Row>
                    <Row>
                    <Col lg={8} xs={12}>
                        <MapaAzure  coord={ searchData?.geocodeData.geometry?.coordinates } Listrisks={listRisks} />
                    </Col>
                    <Col>
                    <AzureWeather target={ searchData?.target } data={ searchData?.weatherData } />
                    </Col>
                </Row>
                
            </Col>
        </Container>
    );
};

export { Dashboard };