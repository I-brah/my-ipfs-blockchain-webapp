// src/layouts/MainLayout.js
import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import Home from '../pages/Home';
import Blocks from '../pages/Blocks';
import IPFS from '../pages/IPFS';

const MainLayout = () => {
  return (
    <Router>
      <div style={{ display: 'flex' }}>
        <nav style={{ width: '200px', padding: '20px', background: '#f0f0f0' }}>
          <ul style={{ listStyle: 'none', padding: 0 }}>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/blocks">Blocks</Link></li>
            <li><Link to="/ipfs">IPFS</Link></li>
          </ul>
        </nav>
        <div style={{ flex: 1, padding: '20px' }}>
        </div>
      </div>
    </Router>
  );
};

export default MainLayout;
