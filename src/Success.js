import { Container, Row, Col, Table, Alert, Form, Button} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';

function Success() {
    return (
        <header className='success'>
            <Container>
                <Row className='mb-5' md> 
                    <h1>Destination reached. Pls collect your items.</h1>
                    <h2>Please send the Robot back home now.</h2>
                </Row>
                <Row className='mb-5' md>
                    <Col sm={12} style={{paddingRight: 50}}>
                        <Link to="/" className = "btn btn-primary" type="submit" size="lg">Go Home</Link>
                    </Col>
                </Row>
            </Container>
        </header>
    )
}

export default Success;