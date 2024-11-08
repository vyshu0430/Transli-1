// Importing required React libraries and components
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

// Import components (pages)
import About from './components/About';
import Profile from './components/Profile';
import Transli from './components/transli';
import Registration from './components/Registration';
import Home from './components/Home';
import Contact from './components/contact';
import Login from './components/Login';
import Dashboard from './components/Dashboard';

function App() {
  return (
    <Router>
      <div>
        {/* Your shared layout or header could go here */}
        
        <Routes>
          {/* Define routes for each page */}
          <Route path="/Home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/transli" element={<Transli />} />
          <Route path="/registration" element={<Registration />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
        
        {/* Your shared footer could go here */}
      </div>
    </Router>
  );
}

export default App;
