/* eslint-disable react/jsx-props-no-spreading */
import { Routes, Route, useLocation } from 'react-router-dom';
import { useEffect, useState, useLayoutEffect } from 'react';
import Aos from 'aos';
import Dropdown from './components/DropDown/Dropdown';
import Navbar from './components/Navbar/Navbar';
import './GlobalStyles.scss';
import Footer from './components/Footer/Footer';
import Home from './pages/index';
import Contact from './pages/Contact';
import About from './pages/About';
import Tips from './pages/Tips';
import Travels from './pages/Travels';
import 'aos/dist/aos.css';

function App() {
  const [isActive, SetIsActive] = useState(false);
  const location = useLocation();

  const toggle = () => {
    SetIsActive(!isActive);
  };

  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  useEffect(() => {
    Aos.init({});
  }, []);

  return (
    <div className="App">
      <Navbar toggle={toggle} />
      <Dropdown isActive={isActive} toggle={toggle} />
      <Routes>
        <Route path="/dolcevita" element={<Home />} />
        <Route path="/travels" element={<Travels />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/tips" element={<Tips />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
