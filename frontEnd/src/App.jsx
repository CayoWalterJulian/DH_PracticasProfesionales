import React from 'react';
import './App.css';
import './main.jsx';
import { Route, Routes } from 'react-router-dom';
import NavBar from './components/NavBar.jsx';
import HomePage from './components/HomePage.jsx';
import SearchTalent from './components/SearchTalent.jsx';
import Aspirants from './components/Aspirants.jsx';
import Postulate from './components/Postulate.jsx';
import Login from './components/Login.jsx';
import Register from './components/Register.jsx';
import ProfessionalDetail from './components/ProfessionalDetail.jsx';

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <NavBar />
      <div className="flex-1">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/search-talent" element={<SearchTalent />} />
          <Route path="/aspirants" element={<Aspirants />} />
          <Route path="/postulate" element={<Postulate />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/professional/:id" element={<ProfessionalDetail />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
