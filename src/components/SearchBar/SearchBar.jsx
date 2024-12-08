import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import { Search } from "react-bootstrap-icons";
import Form from 'react-bootstrap/Form';
import { InputGroup } from 'react-bootstrap';
import { useAuth } from '../../authcontext'; 
import { saveSearchHistory } from '../../services/authService'; 
import './SearchBar.css';

const SearchBar = ({ onSearch }) => {
    const [search, setSearch] = useState('');
    const { user } = useAuth();

    const handleSearchClick = async () => {
        if (search.trim()) {
            onSearch(search);
            if (user) {
                try {
                    console.log(`Salvando histórico de busca para o usuário ${user.id} com a praia ${search}`);
                    await saveSearchHistory(user.id, search);
                } catch (error) {
                    console.error("Erro ao salvar histórico de busca:", error.message);
                }
            }
            setSearch('');
        } else {
            alert('Por favor, digite o nome de uma praia.'); 
        }
    };

    return (
        <Container>
            <Col className='justify-content-md-center'>
                <InputGroup id='inputGroup'>
                    <Form.Control
                        type='text'
                        id="inputCustom"
                        aria-describedby="TextHelpBlock"
                        size='md'
                        placeholder='Para onde vamos?'
                        value={search}
                        name='praia'
                        onChange={(e) => setSearch(e.target.value)}
                    />
                    <Button
                        onClick={handleSearchClick}
                        id="buttonCustom"
                    >
                        <Search className="search-icon" id="iconCustom" />
                    </Button>
                </InputGroup>
            </Col>
        </Container>
    );
};

export { SearchBar };