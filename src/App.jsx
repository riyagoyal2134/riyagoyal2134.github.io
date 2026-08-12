import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Nav from './components/Nav';
import Footer from './components/Footer';

import Home from './pages/Home';
import Experience from './pages/Experience';
import Research from './pages/Research';
import Education from './pages/Education';
import Awards from './pages/Awards';
import Contact from './pages/Contact';

function App() {
  return (
    <>
      <Header />
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/experience" element={<Experience />} />
        <Route path="/research" element={<Research />} />
        <Route path="/education" element={<Education />} />
        <Route path="/awards" element={<Awards />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;