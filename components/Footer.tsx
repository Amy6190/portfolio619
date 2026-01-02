
import React from 'react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative w-full border-t border-white/5 bg-[#0a0f1d]/90 backdrop-blur-md pt-20 pb-10 overflow-hidden">
      {/* Glow Effect Background */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-[800px] h-[300px] bg-primary/5 blur-[120px] pointer-events-none rounded-full"></div>
      
      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        {/* Top Section: Tagline */}
        <div className="flex flex-col items-center justify-center text-center mb-16">
          <h2 className="text-white text-3xl md:text-5xl font-black tracking-tight leading-tight max-w-3xl">
            Building full-stack & <br className="hidden sm:block"/>
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-cyan-400 text-glow">MERN stack apps.</span>
          </h2>
          <p className="mt-6 text-[#92b7c9] text-lg font-light max-w-xl">
            Engineering reliability for the modern web with precision and performant architecture.
          </p>
        </div>

        {/* Middle Section: Tech Stack Ticker */}
        <div className="w-full mb-20">
          <div className="flex flex-wrap justify-center gap-10 md:gap-20 opacity-60 hover:opacity-100 transition-opacity duration-500">
            {[
              { icon: 'dns', label: 'Node.js' },
              { icon: 'smart_toy', label: 'GenAI' },
              { icon: 'token', label: 'Web3' },
              { icon: 'terminal', label: 'DevOps' },
              { icon: 'database', label: 'Postgres' },
            ].map((tech) => (
              <div key={tech.label} className="group flex flex-col items-center gap-3 relative">
                <div className="p-4 rounded-2xl bg-white/5 group-hover:bg-primary/10 border border-white/5 group-hover:border-primary/20 transition-all duration-300">
                  <span className="material-symbols-outlined text-4xl text-[#92b7c9] group-hover:text-primary group-hover:scale-110 transition-transform duration-300">{tech.icon}</span>
                </div>
                <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-all duration-300 absolute -bottom-8">
                  {tech.label}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Bar: Navigation & Info */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-10 border-t border-white/10 pt-10">
          {/* Left: Copyright */}
          <div className="order-3 md:order-1 text-center md:text-left">
            <div className="flex items-center gap-2 justify-center md:justify-start mb-1">
              <span className="material-symbols-outlined text-primary text-sm">terminal</span>
              <span className="text-white font-bold text-sm">Amit Mishra</span>
            </div>
            <p className="text-slate-500 text-xs font-mono uppercase tracking-widest">
              © 2025 Software Engineer. All Rights Reserved.
            </p>
          </div>

          {/* Center: Social Links */}
          <div className="order-2 flex items-center gap-4">
            {[
              { icon: 'code', label: 'Projects', href: '#work' },
              { icon: 'work', label: 'LinkedIn', href: 'https://www.linkedin.com/in/amit-mishra-b96ba6164/' },
              { icon: 'hub', label: 'GitHub', href: 'https://github.com/Amy6190' },
              { icon: 'mail', label: 'Contact', href: 'mailto:imamydgr8@gmail.com' },
            ].map((social) => (
              <a 
                key={social.label}
                href={social.href} 
                target={social.href.startsWith('http') ? '_blank' : undefined}
                rel={social.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                aria-label={social.label} 
                className="group relative p-3 rounded-xl bg-white/5 border border-white/5 hover:border-primary/30 transition-all duration-300"
              >
                <span className="material-symbols-outlined text-xl text-[#92b7c9] group-hover:text-primary transition-colors">{social.icon}</span>
                <span className="absolute -top-10 left-1/2 -translate-x-1/2 px-2 py-1 bg-primary text-background-dark text-[10px] font-bold rounded-lg opacity-0 group-hover:opacity-100 transition-all pointer-events-none uppercase tracking-wider">
                  {social.label}
                </span>
              </a>
            ))}
          </div>

          {/* Right: Location & Back to Top */}
          <div className="order-1 md:order-3 flex items-center gap-8 w-full md:w-auto justify-between md:justify-end">
            <div className="flex items-center gap-3 text-slate-400 text-sm font-medium">
              <span className="material-symbols-outlined text-xl text-primary animate-pulse">location_on</span>
              <span className="tracking-wide">Based in Indore, India</span>
            </div>
            <button 
              onClick={scrollToTop}
              aria-label="Back to top" 
              className="flex items-center justify-center size-12 rounded-2xl bg-white/5 hover:bg-primary text-primary hover:text-background-dark border border-white/5 hover:border-primary transition-all duration-300 group"
            >
              <span className="material-symbols-outlined text-2xl font-bold group-hover:-translate-y-1 transition-transform">arrow_upward</span>
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
