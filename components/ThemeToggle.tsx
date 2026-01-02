
import React, { useState, useEffect } from 'react';

type Theme = 'light' | 'dark' | 'high-contrast';

export const ThemeToggle: React.FC = () => {
  const [theme, setTheme] = useState<Theme>(() => {
    const saved = localStorage.getItem('theme') as Theme;
    return saved || 'dark';
  });

  useEffect(() => {
    const root = window.document.documentElement;
    root.classList.remove('light', 'dark', 'high-contrast');
    root.classList.add(theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  const cycleTheme = () => {
    setTheme(prev => {
      if (prev === 'dark') return 'light';
      if (prev === 'light') return 'high-contrast';
      return 'dark';
    });
  };

  const getIcon = () => {
    if (theme === 'dark') return 'dark_mode';
    if (theme === 'light') return 'light_mode';
    return 'contrast';
  };

  return (
    <button 
      onClick={cycleTheme}
      className="size-10 rounded-xl bg-white/5 dark:bg-white/5 light:bg-black/5 high-contrast:bg-white border border-white/10 dark:border-white/10 light:border-black/10 high-contrast:border-black flex items-center justify-center transition-all hover:scale-105 group"
      title={`Switch theme (current: ${theme})`}
    >
      <span className="material-symbols-outlined text-[20px] text-primary high-contrast:text-black group-hover:rotate-12 transition-transform">
        {getIcon()}
      </span>
    </button>
  );
};
