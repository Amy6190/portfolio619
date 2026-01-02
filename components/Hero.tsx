import React from "react";
import { useNavigate } from "react-router-dom";
import { TECH_STACK, STATS, AVATAR_URL } from "../constants";

export const Hero: React.FC = () => {
  const navigate = useNavigate();

  const handleViewProjects = () => {
    const projectsSection = document.getElementById('work');
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleContactMe = () => {
    navigate('/contact');
  };
  return (
    <section className="relative z-10 pt-28 pb-20 lg:pt-40 lg:pb-32 transition-colors">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Text Content */}
          <div className="lg:col-span-7 space-y-8 order-2 lg:order-1 text-center lg:text-left">
            <div className="flex justify-center lg:justify-start">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 dark:bg-emerald-500/10 light:bg-emerald-500/5 border border-emerald-500/20 glass-card">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
                </span>
                <span className="text-[10px] font-bold text-emerald-400 dark:text-emerald-400 light:text-emerald-600 tracking-[0.1em] uppercase">
                  Open to Work & Collaborate
                </span>
              </div>
            </div>

            <div className="space-y-6">
              <h1 className="text-4xl sm:text-5xl lg:text-7xl font-black text-white dark:text-white light:text-slate-900 leading-[1.1] tracking-tight">
                Building{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-cyan-300 text-glow">
                  Scalable & Robust
                </span>{" "}
                <br className="hidden lg:block" /> MERN Applications
              </h1>
              <p className="text-lg text-slate-400 dark:text-slate-400 light:text-slate-600 max-w-2xl mx-auto lg:mx-0 font-light leading-relaxed">
                Full-Stack Engineer building scalable
                <span className="text-slate-200 dark:text-slate-200 light:text-slate-900 font-medium">
                  {" "}
                  React.js{" "}
                </span>
                applications and reliable
                <span className="text-slate-200 dark:text-slate-200 light:text-slate-900 font-medium">
                  {" "}
                  Node.js{" "}
                </span>
                microservices with modern
                <span className="text-slate-200 dark:text-slate-200 light:text-slate-900 font-medium">
                  {" "}
                  GenAI{" "}
                </span>
                &
                <span className="text-slate-200 dark:text-slate-200 light:text-slate-900 font-medium">
                  {" "}
                  Web3{" "}
                </span>
                integrations.
              </p>
            </div>

            <div className="flex flex-wrap gap-2.5 justify-center lg:justify-start">
              {TECH_STACK.map((tech) => (
                <span
                  key={tech}
                  className="px-3.5 py-1.5 rounded-lg bg-surface-dark dark:bg-surface-dark light:bg-slate-200 border border-slate-700/50 dark:border-slate-700/50 light:border-slate-300 text-slate-300 dark:text-slate-300 light:text-slate-700 text-xs font-mono tracking-tight high-contrast:border-white high-contrast:text-white"
                >
                  {tech}
                </span>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center lg:justify-start">
              <button 
                onClick={handleViewProjects}
                className="h-14 px-8 rounded-xl bg-primary hover:bg-primary-dark text-background-dark font-bold text-base transition-all duration-300 hover:scale-[1.02] shadow-[0_0_30px_rgba(43,173,238,0.25)] flex items-center justify-center gap-3 high-contrast:bg-hc-accent high-contrast:text-black high-contrast:shadow-none"
              >
                <span>View Projects</span>
                <span className="material-symbols-outlined text-[20px]">
                  layers
                </span>
              </button>
              <button 
                onClick={handleContactMe}
                className="h-14 px-8 rounded-xl glass-card hover:bg-white/5 dark:hover:bg-white/5 light:hover:bg-black/5 text-white dark:text-white light:text-slate-900 font-semibold text-base border border-slate-700/50 light:border-slate-300 hover:border-primary/50 transition-all duration-300 flex items-center justify-center gap-3"
              >
                <span>Contact Me</span>
                <span className="material-symbols-outlined text-[20px]">
                  mail
                </span>
              </button>
            </div>

            <div className="pt-10 border-t border-slate-800/60 light:border-slate-200 flex gap-12 justify-center lg:justify-start">
              {STATS.map((stat) => (
                <div key={stat.label}>
                  <p className="text-3xl font-black text-white dark:text-white light:text-slate-900">
                    {stat.value}
                  </p>
                  <p className="text-[10px] text-slate-500 dark:text-slate-500 light:text-slate-400 uppercase font-bold tracking-[0.15em] mt-1">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Visual Asset */}
          <div className="lg:col-span-5 order-1 lg:order-2 relative flex justify-center lg:justify-end">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-gradient-to-tr from-primary/20 to-secondary/20 rounded-full blur-[80px] pointer-events-none high-contrast:hidden"></div>

            <div className="relative w-full max-w-[440px] aspect-[4/5] rounded-[2rem] overflow-hidden border border-slate-700/30 dark:border-slate-700/30 light:border-slate-300 glass-card shadow-2xl group high-contrast:border-white">
              <div
                className="w-full h-full bg-cover bg-center transition-transform duration-1000 group-hover:scale-110"
                style={{ backgroundImage: `url('${AVATAR_URL}')` }}
              >
                <div className="absolute inset-0 bg-gradient-to-t from-background-dark/80 via-transparent to-transparent light:from-white/40"></div>
              </div>

              {/* Floating Badge 1 */}
              <div className="absolute bottom-8 left-8 z-20 glass-card p-4 rounded-2xl border border-white/10 dark:border-white/10 light:border-black/5 flex items-center gap-4 shadow-xl animate-float">
                <div className="size-11 bg-slate-800/50 light:bg-white/50 rounded-xl flex items-center justify-center border border-white/5">
                  <span className="material-symbols-outlined text-emerald-400">
                    developer_mode
                  </span>
                </div>
                <div>
                  <p className="text-[10px] text-slate-400 dark:text-slate-400 light:text-slate-600 font-mono uppercase tracking-wider">
                    MERN
                  </p>
                  <p className="text-sm font-bold text-white dark:text-white light:text-slate-900">
                    Developer
                  </p>
                </div>
              </div>

              {/* Floating Badge 2 */}
              <div className="absolute top-8 right-8 z-20 glass-card py-2.5 px-4 rounded-xl border border-white/10 dark:border-white/10 light:border-black/5 flex items-center gap-2.5 shadow-xl">
                <span className="size-2 rounded-full bg-primary animate-pulse"></span>
                <span className="text-[11px] font-bold text-white dark:text-white light:text-slate-900 font-mono uppercase tracking-widest">
                  System Active
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
