import React, { useEffect } from 'react';
import { HashRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import CustomCursor from './components/CustomCursor';
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

const pageVariants = {
  initial: {
    opacity: 0,
    y: 20,
  },
  in: {
    opacity: 1,
    y: 0,
  },
  out: {
    opacity: 0,
    y: -20,
  },
};

const pageTransition = {
  type: 'tween',
  ease: 'anticipate',
  duration: 0.5,
};

const App: React.FC = () => {
  const location = useLocation();
  return (
    <>
      <CustomCursor />
      <Background />
      <ScrollToTop />
      <div className="font-sans antialiased text-white selection:bg-emerald-500 selection:text-white min-h-screen flex flex-col">
        <Navbar />
        
        <main className="flex-grow relative">
          <Routes>
            {/* Hapus rute lama dan ganti dengan AnimatePresence */}
          </Routes>
          <AnimatePresence mode="wait">
            <motion.div
              key={location.pathname}
              initial="initial"
              animate="in"
              exit="out"
              variants={pageVariants}
              transition={pageTransition}
            >
              <Routes location={location}>
                <Route path="/" element={<Home />} />
                <Route path="/ppdb" element={<Admissions />} />
                <Route path="/pengurus" element={<Leadership />} />
                <Route path="/lainnya" element={<Others />} />
              </Routes>
            </motion.div>
          </AnimatePresence>
        </main>

        <Footer />
      </div>
    </>
  );
};

const RootApp = () => (
  <Router>
    <App />
  </Router>
);

export default RootApp;