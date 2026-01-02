
import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { NAV_ITEMS } from '../constants';
import { ThemeToggle } from './ThemeToggle';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'glass-nav h-16' : 'bg-transparent h-20'}`}>
      <div className="max-w-7xl mx-auto px-6 h-full flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="size-9 bg-gradient-to-br from-primary to-blue-600 rounded-lg flex items-center justify-center shadow-lg shadow-primary/20 high-contrast:bg-hc-accent high-contrast:shadow-none">
            <span className="material-symbols-outlined text-white high-contrast:text-black text-[20px]">terminal</span>
          </div>
          <div className="flex flex-col">
            <h2 className="text-white dark:text-white light:text-slate-900 text-base font-bold leading-none tracking-tight">Amit Mishra</h2>
            <span className="text-[10px] text-slate-400 light:text-slate-500 font-mono mt-0.5">&lt;engineer /&gt;</span>
          </div>
        </div>

        <nav className="hidden md:flex items-center gap-8">
          {NAV_ITEMS.map((item) => (
            <Link 
              key={item.label}
              to={item.href} 
              className="text-slate-300 dark:text-slate-300 light:text-slate-600 text-sm font-medium hover:text-primary light:hover:text-primary transition-colors relative group"
            >
              {item.label}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
            </Link>
          ))}
          <button 
            onClick={() => {
              const link = document.createElement('a');
              link.href = '/Amit_Mishra_Resume.pdf';
              link.download = 'Amit_Mishra_Resume.pdf';
              document.body.appendChild(link);
              link.click();
              document.body.removeChild(link);
            }}
            className="text-slate-300 dark:text-slate-300 light:text-slate-600 text-sm font-medium hover:text-primary light:hover:text-primary transition-colors relative group"
          >
            Resume
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
          </button>
        </nav>

        <div className="flex items-center gap-4">
          <ThemeToggle />
          <div className="hidden md:flex">
            <button 
              onClick={() => navigate('/contact')}
              className="group relative px-5 py-2 bg-primary/10 hover:bg-primary/20 text-primary border border-primary/30 hover:border-primary rounded-lg text-sm font-semibold transition-all duration-300"
            >
              <span className="relative z-10 flex items-center gap-2">
                Hire Me
                <span className="material-symbols-outlined text-sm transition-transform group-hover:translate-x-1">arrow_forward</span>
              </span>
            </button>
          </div>

          <button className="md:hidden text-white dark:text-white light:text-slate-900 p-2">
            <span className="material-symbols-outlined">menu</span>
          </button>
        </div>
      </div>
    </header>
  );
};
