import React from 'react';
import './App.css';
import './main.jsx';
import { Route, Routes } from 'react-router-dom';
import NavBar from './components/NavBar.jsx';
import HomePage from './components/HomePage.jsx';
import Aspirants from './components/Aspirants.jsx';
import Postulate from './components/Postulate.jsx';
import Login from './components/Login.jsx';
import Register from './components/Register.jsx';
import ProfessionalDetail from './components/ProfessionalDetail.jsx';
import About from './components/About.jsx';
import Contact from './components/Contact.jsx';
import Footer from './components/Footer.jsx';

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <NavBar />
      <div className="flex-1 pt-24">
        <Routes>
          <Route path="/" element={
            <>
              <section id="home">
                <HomePage />
              </section>
              <section id="about">
                <About />
              </section>
              <section id="contact">
                <Contact />
              </section>
            </>
          } />
          <Route path="/" element={
            <>
              <section id="about">
                <About />
              </section>
              <section id="contact">
                <Contact />
              </section>
            </>
          } />

          <Route path="/aspirants" element={<Aspirants />} />
          <Route path="/postulate" element={<Postulate />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/professional/:id" element={<ProfessionalDetail />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
