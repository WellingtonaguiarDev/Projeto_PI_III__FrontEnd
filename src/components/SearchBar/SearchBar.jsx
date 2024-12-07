import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import { Search } from "react-bootstrap-icons";
import Form from 'react-bootstrap/Form';
import { InputGroup } from 'react-bootstrap';
import './SearchBar.css';

const SearchBar = ({ onSearch }) => {
    const [search, setSearch] = useState('');
    
    const handleSearchClick = () => {
        if (search.trim()) {
            onSearch(search);
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