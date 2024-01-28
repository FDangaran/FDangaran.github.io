import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import './normalize.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import Homepage from './Homepage'
import Login from './Login';
import Register from './Register';

class App extends Component {
  render () {
      return (
        <Router>
        <Helmet>
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        </Helmet>
          <Routes>
            <Route path="/Login" element={<Login />} />
            <Route path="/Register" element={<Register />} />
            <Route path="/Homepage" element={<Homepage />} />
          </Routes>
        </Router>
      )
  }
}

export default App;