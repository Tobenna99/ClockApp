import React from 'react';
import { BrowserRouter as Router, Link, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import AlarmClock from "./components/AlarmClock";
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        
        <Routes>
          <Route exact path="/" element={<HomePage />} />
          <Route path="/alarm-clock" element={<AlarmClock />} />
        </Routes>
        
      </div>
    </Router>
  );
}

export default App;
