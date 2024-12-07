import {Alert, Card, Row } from "react-bootstrap";
import './Flashcard.css';

const Flashcard = ({ risks }) => {

    if (!risks || risks.length === 0) {
        return (
            <Card id="Card">
                <Card.Header>Avisos</Card.Header>
                <Card.Body>
                    <Alert variant="success">
                        <p>Boa notícia! Nenhum risco identificado para esta praia.</p>
                        <p>Aproveite seu dia com tranquilidade! 🏖️</p>
                    </Alert>
                </Card.Body>
            </Card>
        );
    }

    return (    
        <Card id="Card">
            <Card.Header>Avisos</Card.Header>
                <Card.Body>
                <Alert variant="warning">
                    {risks.map((risks, index) =>(
                        <Row key={index}>
                            <Card.Img src={require(`../../assets/images/img-flashcard/${risks.icon}`)} id="icon" className="col-3" />
                            <Card.Text className="col">{risks.message}</Card.Text>
                        </Row>

                    ))}
                    </Alert>
                </Card.Body>
        </Card>
        
    );
};

export { Flashcard };