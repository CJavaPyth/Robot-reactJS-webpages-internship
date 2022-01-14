import { Container, Row, Col, Table, Alert, Form, Button, Spinner } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';

function Navigating() {
    return (
        <header className='navigate'>
            <Container>
                <Row className='mb-5' md> 
                    <h1>Navigating to Table ...</h1>
                </Row>
                <Row className='mb-5' md>
                    <Col sm={6} style={{paddingLeft: 620}}>
                        <Spinner animation="grow" variant="light" size='lg' />
                    </Col>
                </Row>
                <Row className='mb-5' md>
                    <Col sm={3} style={{paddingLeft: 530}}>
                        <Link to="/fail" className = "btn btn-danger" type="submit" size="lg">Fail</Link>
                    </Col>
                    <Col sm={1} style={{paddingLeft: 100}}>
                        <Link to="/success" className = "btn btn-success" type="submit" size="lg">Success</Link>
                    </Col>
                </Row>
            </Container>
        </header>
    )
}

export default Navigating;