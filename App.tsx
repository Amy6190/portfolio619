
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { Assistant } from './components/Assistant';
import { HomePage } from './pages/HomePage';
import { ContactPage } from './pages/ContactPage';

const App: React.FC = () => {
  return (
    <Router>
      <div className="min-h-screen relative overflow-hidden flex flex-col selection:bg-primary selection:text-white bg-background-dark dark:bg-background-dark light:bg-slate-50 high-contrast:bg-black">
        {/* Background Decorator Blobs - Hidden in High Contrast */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute inset-0 bg-grid-pattern dark:bg-grid-pattern light:bg-grid-pattern-light bg-[length:40px_40px] opacity-[0.03] dark:opacity-[0.03] light:opacity-[0.1] high-contrast:hidden"></div>
          <div className="blob bg-primary w-[600px] h-[600px] -top-[300px] -left-[100px] opacity-10 high-contrast:hidden"></div>
          <div className="blob bg-secondary w-[800px] h-[800px] bottom-0 -right-[200px] opacity-[0.05] high-contrast:hidden"></div>
          <div className="blob bg-blue-600 w-96 h-96 top-1/4 right-0 opacity-10 animate-pulse high-contrast:hidden"></div>
        </div>

        <Navbar />

        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/contact" element={<ContactPage />} />
          </Routes>
        </main>

        <Footer />

        <Assistant />
      </div>
    </Router>
  );
};

export default App;
