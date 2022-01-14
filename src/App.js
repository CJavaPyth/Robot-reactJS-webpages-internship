import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './Home';
import Navigating from './Navigating';
import Success from './Success';
import Fail from './Fail';

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/"> 
            <Home />
          </Route>
          <Route path="/navigating">
            <Navigating />
          </Route>
          <Route path="/success">
            <Success />
          </Route>
          <Route path="/fail">
            <Fail />
          </Route>
        </Switch>
 
    </div>
  </Router>
  );
}


export default App;
