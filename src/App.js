// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Home from './components/Home';
import Game from './components/Game';
import About from './components/About';
import NavBar from './components/NavBar';
import Login from './components/Login';
import { auth } from './firebase';
import { useAuthState } from 'react-firebase-hooks/auth';

const App = () => {
  const [user] = useAuthState(auth);

  return (
    <Router>
      {user ? <NavBar /> : null}
      <Routes>
        <Route path="/" element={user ? <Home /> : <Navigate to="/login" />} />
        <Route path="/game" element={user ? <Game /> : <Navigate to="/login" />} />
        <Route path="/about" element={user ? <About /> : <Navigate to="/login" />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </Router>
  );
};

export default App;
