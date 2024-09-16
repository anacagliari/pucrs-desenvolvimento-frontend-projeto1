import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import './App.css';
import CarList from './pages/CarList/CarList';
import MyFooter from './components/MyFooter/MyFooter';
import MyHeader from './components/MyHeader/MyHeader';
import NavBar from './components/NavBar/NavBar';
import NotFound from './pages/NotFound/NotFound';
import About from './pages/About/About';
import Home from './pages/Home/Home';

export default function App() {
  return (
    <Router>
    <body className="container App">
      <MyHeader title="Projeto fase 2 - CRUD para uma coleção de Carrinhos HotWheels" />
      <NavBar />
      <main className="content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/cars" element={<CarList />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <MyFooter />
    </body>
  </Router>
  );
}
