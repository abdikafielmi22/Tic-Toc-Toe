// src/AppRouter.js
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import Game from './components/Game';
import About from './components/About';
import NavBar from './components/Navbar';

const App = () => {
  return (
    <Router>
      <NavBar />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/game" component={Game} />
        <Route path="/about" component={About} />
      </Switch>
    </Router>
  );
};

export default App;
