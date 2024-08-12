import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import CardNavigation from './CardNavigation';
import Login from './Login';

const Routing = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<CardNavigation />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </Router>
  );
};

export default Routing;
