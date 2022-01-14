import { Container, Row, Col, Table, Alert, Form, Button} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';

function Fail() {
    return (
        <header className='fail'>
            <Container>
                <Row className='mb-5' md> 
                    <h1>Destination could not be reached.</h1>
                    <h2>The robot will head home now.</h2>
                </Row>
                <Row className='mb-5' md>
                    <Col sm={12} style={{paddingRight: 50}}>
                        <Link to="/" className = "btn btn-primary" type="submit" size="lg">Okay</Link>
                    </Col>
                </Row>
            </Container>
        </header>
    )
}

export default Fail;