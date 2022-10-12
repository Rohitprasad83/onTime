import React from 'react';
// import { Home } from './pages/home/Home';
import { Routes, Route } from 'react-router-dom';
import { Home, Login, Register, Error404 } from './pages/index.js';

import './App.css';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="*" element={<Error404 />} />
      </Routes>
    </div>
  );
}

export default App;
