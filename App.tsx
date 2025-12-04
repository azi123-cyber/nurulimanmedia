import React, { useEffect } from 'react';
import { HashRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Background from './components/Background';
import Home from './pages/Home';
import Admissions from './pages/Admissions';
import Leadership from './pages/Leadership';
import Others from './pages/Others';

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

const App: React.FC = () => {
  return (
    <Router>
      <ScrollToTop />
      <div className="font-sans antialiased text-white selection:bg-emerald-500 selection:text-white min-h-screen flex flex-col">
        <Background />
        <Navbar />
        
        <main className="flex-grow relative z-10">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/ppdb" element={<Admissions />} />
            <Route path="/pengurus" element={<Leadership />} />
            <Route path="/lainnya" element={<Others />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </Router>
  );
};

export default App;