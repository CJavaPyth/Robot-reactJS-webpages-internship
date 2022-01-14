import { Container, Row, Col, Table, Alert, Form, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import ToggleButton from "react-bootstrap/ToggleButton";
import ToggleButtonGroup from "react-bootstrap/ToggleButtonGroup";
import React from 'react';


function Home() {

    const [value, setValue] = React.useState(2);
    const handleChange = val => setValue(val);

    return (
        <header className="App-header">
        <Container>
            <Row className='mb-5' md> 
                <Row>
                    <h5>Robot Battery:  <u>95.17%</u></h5>
                    <h1>You are at: HOME</h1>
                </Row>
            </Row>
            <Row className='mb-5' md>
                <Alert variant='success'>Choose your goal: </Alert>
            </Row>
            <Row md>
                <Form onSubmit={console.log}>
                    <Table striped bordered hover variant="dark">
                    <thead>
                        <tr>
                        <th>Table #</th>
                        <th>Coordinates</th>
                        <th>Select</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                        <td>
                            <Form.Group>
                                <Form.Label>1</Form.Label>
                            </Form.Group>
                        </td>
                        <td>1.11, 1.11, -0.00143</td>
                        <td>
                            <Form.Group>
                                <Form.Check name='table' type='radio'/>
                            </Form.Group>
                        </td>
                        </tr>
                        <tr>
                        <td>2</td>
                        <td>2.22, 2.22, -0.0263</td>
                        <td>
                            <Form.Group>
                                <Form.Check name='table' type='radio' value='ee' onClick={handleChange}/>
                            </Form.Group>
                        </td>
                        </tr>
                        <tr>
                        <td>3</td>
                        <td>3.33, 3.33, -0.00567</td>
                        <td>
                            <Form.Group>
                                <Form.Check name='table' type='radio'/>
                            </Form.Group>
                        </td>
                        </tr>
                        <tr>
                        <td>4</td>
                        <td>4.44, 4.44, -0.00122</td>
                        <td>
                            <Form.Group>
                                <Form.Check name='table' type='radio'/>
                            </Form.Group>                 
                        </td>
                        </tr>
                        <tr>
                        <td>5</td>
                        <td>5.55, 5.55, -0.0454</td>
                        <td>
                            <Form.Group>
                                <Form.Check name='table' type='radio'/>
                            </Form.Group>                
                        </td>
                        </tr>
                        <tr>
                        <td>6</td>
                        <td>6.66, 6.66, -0.00133</td>
                        <td>
                            <Form.Group>
                                <Form.Check name='table' type='radio'/>
                            </Form.Group>                  
                        </td>
                        </tr>
                    </tbody>
                    
                    </Table>
                </Form>
            </Row>
            <Row>
                <Col sm={10}></Col>
                <Col sm={1} style={{paddingLeft: 50}}>
                    <Link to="/navigating" className = "btn btn-success" type="submit" size="lg">GO</Link>
                </Col>
            </Row>
        </Container>
    </header>
    )
}

export default Home;