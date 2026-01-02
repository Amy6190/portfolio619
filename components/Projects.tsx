
import React, { useState } from 'react';

interface Project {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  image: string;
  tags: string[];
  role: string;
  categories: string[];
  url?: string | null;
}

const PROJECTS: Project[] = [
  {
    id: 'dactic',
    title: 'Dactic',
    subtitle: 'AI Survey Platform & Chat Dashboard',
    description: 'Scalable microservices architecture for real-time survey generation and analysis using LLMs. Implemented vector database search for instant insights.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBMJ6rCdvIn5QAPjKIeSuksUi1z6rvt73pQgeiGOoyXc4lbW0III0r0vXymwud9DCKPvOInhPRkIY4rSL1fMa4MprSCudCCoHwYINk0ZjOTcTlkrlnqsYqd5K3p3TCUuD-QrLnz-OZ7QIBjwcSk9K0enVKuuXBiyZ-TZIBiw80IeP7O8skbLibKPZQV-MlJ0IQpLFffD27wsnuaOZCE8Z8c31MuwKNhiSHz6rN0lY0ng8rgUqoegXtbMuD8w6Tv_PCFktmWe0LSuJA',
    tags: ['GenAI', 'Node.js', 'Redis'],
    role: 'Backend Lead',
    categories: ['GenAI', 'Backend'],
    url: 'https://app.dactic.io/login'
  },
  {
    id: 'stepmint',
    title: 'StepMint',
    subtitle: 'Web3 Fitness & Crypto Reward Platform',
    description: 'Move-to-earn dApp rewarding users with ERC-20 tokens. Engineered secure smart contracts for token distribution and vesting schedules.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDfrUF_G3VTsi4hwa-GT3SsarSrHNKU2pTmsr648zKfceoLaqceYmb-qMjMnbeCqJ_ZteKDZdGvyU2hpXT8p5AP2ZKwZBp4xUWPYBwpk1Y00AXROVoNkTRRSf14EduOl7hpBQVyfXpVVXF7A4uqw9HcQnN3DWnYp_FGG5T2MGiAHQJqQ_xMQtVR_KEKSi-VFqPimLTxs9EA9YFzS2CdSBnpQC7mNh5CiANYW1ZZtuC8z1K2sbSgT5mOIgf5n9TNWQ2aMu6GHJKmypI',
    tags: ['Web3', 'Solidity', 'React'],
    role: 'Smart Contract Eng.',
    categories: ['Web3'],
    url: 'https://stepmint.io/'
  },
  {
    id: 'sportsmint',
    title: 'SportsMint',
    subtitle: 'Web3 Fantasy Sports & NFT Platform',
    description: 'Decentralized fantasy league platform where player cards are tradable NFTs. Built the high-throughput scoring engine processing live game data.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD3HO836eo1drU4xIV65zvRPo-52UBbOk_v6FjA2r7RMWoq43Fwm8AsGt_CMdUNI_cCyOYJ6rgZ3DjrSVmGLO3_qKC_X74GibVSsyLT4pURnPYZpEd6YDCUWOn3W4AMusxa3sJy7E1b-pQqoO25ONY7QqSoiZA2sBaCYkWAvn5lq8GJcCF1LaHUbZkqkVH9rCbnY7dpVP3gzDKKzEtuhAt1HrzL77VQ7KpQVxs6VC6UQB5hLFsUmHrgLwl1zT2YY0OYmDifV4tML_c',
    tags: ['Web3', 'Node.js', 'MongoDB'],
    role: 'Full Stack Eng.',
    categories: ['Web3', 'Backend'],
    url: 'https://sportsmint.io/'
  },
  {
    id: 'nft-marketplace',
    title: 'NFT Marketplace',
    subtitle: 'Buy & Sell NFTs',
    description: 'Custom marketplace supporting ERC-721 and ERC-1155 standards. Features lazy minting and decentralized file storage integration.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDdZEMeAer2lvutkk7kXNfqfX2cNHm8i3VrPva5X0EmytK1BZwJ_gUoG1-JITtSGk5eycpOeEz6ioXgKzqdTvOtVU3LPTEpF32bwehZUuCEbHS8m_W6Lmx78enbyiqEFKuTkSnSI3W9pjSbZSaxTBZYowuUv4UEZ6SbQxLE5LJi8zx56Ltpgp_rKKQCetDQ8yX7CZNjrkRMYuxluMlKQXHmjYKBCP6UbOUVpnOwIxAeaaRAIgaPcw9oGbtjbyM4b781ZZKpnhCYTZM',
    tags: ['IPFS', 'Next.js', 'Hardhat'],
    role: 'Lead Architect',
    categories: ['Web3'],
    url: 'https://nft.mrmint.io/'
  },
  {
    id: 'silky-ex',
    title: 'Silky Ex.io',
    subtitle: 'Crypto Exchange & ICO Platform',
    description: 'High-performance centralized exchange engine handling 50k+ TPS. WebSocket integration for real-time order book updates.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCrM8pVKaRrowkHy4k6o67qwA0BTzRTyumxGby--5ZUQTad2d9rS_95T7-gu9XjM2mOWPy9gF2ySbCrZDBR90o8SFbVaapBtOYtJ8fid7WObD-xo5FfCThNokCd3rpox3KuSlxx1oOnkX8O1FJQyxjKP2TTrDm4o7NcXp1HLpTjyG24xQM03p11D2Zl1fGAWnEGDUt-q8mZ07o0LzUQUZ_0Ak8WzB4gRLtchmpDuVk-pHFGoixEYIFREw1laq1Lpl_SuRZOZJntVcQ',
    tags: ['Fintech', 'WebSocket', 'PostgreSQL'],
    role: 'Backend Engineer',
    categories: ['Fintech', 'Backend'],
    url: null // Discontinued project
  }
];

const CATEGORIES = ['All', 'Web3', 'GenAI', 'Backend', 'Fintech'];

export const Projects: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState('All');

  const filteredProjects = PROJECTS.filter(p => 
    activeFilter === 'All' || p.categories.includes(activeFilter)
  );

  return (
    <section id="work" className="relative py-24 md:py-32 bg-[#0a0f1d]">
      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        {/* Section Header */}
        <div className="flex flex-col gap-6 mb-16 md:flex-row md:items-end md:justify-between border-b border-slate-800 pb-10">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <div className="h-px w-8 bg-primary"></div>
              <span className="text-primary text-[10px] font-bold uppercase tracking-[0.2em]">Portfolio</span>
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white leading-tight">
              Featured <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-cyan-400 text-glow">Projects</span>
            </h2>
            <p className="mt-4 text-slate-400 max-w-2xl font-light leading-relaxed">
              A selection of scalable systems, Web3 protocols, and AI-driven platforms I've engineered.
            </p>
          </div>
        </div>

        {/* Filter Chips */}
        <div className="flex flex-wrap gap-3 mb-12">
          {CATEGORIES.map(cat => (
            <button
              key={cat}
              onClick={() => setActiveFilter(cat)}
              className={`px-6 py-2 rounded-full text-sm font-bold transition-all duration-300 border ${
                activeFilter === cat 
                  ? 'bg-primary border-primary text-background-dark shadow-[0_0_20px_rgba(43,173,238,0.3)]' 
                  : 'bg-surface-dark border-slate-700 text-slate-400 hover:text-white hover:border-slate-500'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div 
              key={project.id}
              onClick={() => project.url && window.open(project.url, '_blank')}
              className={`group glass-card rounded-3xl border border-white/5 overflow-hidden hover:border-primary/40 transition-all duration-500 hover:shadow-[0_0_30px_rgba(43,173,238,0.05)] flex flex-col h-full ${project.url ? 'cursor-pointer' : 'cursor-default opacity-75'}`}
            >
              <div className="relative h-56 w-full overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-[#161b2c] via-[#161b2c]/20 to-transparent z-10 opacity-60"></div>
                <div 
                  className="w-full h-full bg-cover bg-center transition-transform duration-1000 group-hover:scale-110" 
                  style={{ backgroundImage: `url('${project.image}')` }}
                ></div>
                <div className="absolute top-4 right-4 z-20">
                  <div className="size-10 bg-black/40 backdrop-blur-md rounded-full flex items-center justify-center border border-white/10 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <span className="material-symbols-outlined text-[20px]">arrow_outward</span>
                  </div>
                </div>
              </div>

              <div className="flex flex-col flex-1 p-6 gap-5">
                <div>
                  <h3 className="text-2xl font-bold text-white mb-1 group-hover:text-primary transition-colors duration-300">{project.title}</h3>
                  <p className="text-xs font-bold text-primary font-mono tracking-wider uppercase opacity-80">{project.subtitle}</p>
                </div>
                <p className="text-slate-400 text-sm leading-relaxed line-clamp-3 font-light">
                  {project.description}
                </p>
                <div className="mt-auto pt-5 border-t border-slate-800 flex flex-col gap-5">
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map(tag => (
                      <span 
                        key={tag}
                        className="inline-flex items-center px-2.5 py-1 rounded-lg text-[10px] font-bold tracking-wider uppercase bg-white/5 text-slate-300 border border-white/5 group-hover:border-primary/20 transition-colors"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] text-slate-500 font-mono font-bold tracking-widest uppercase">Role: {project.role}</span>
                    {project.url ? (
                      <button className="text-sm font-bold text-white hover:text-primary flex items-center gap-1 group/btn transition-colors duration-300">
                        View Live
                        <span className="material-symbols-outlined text-[18px] transition-transform group-hover/btn:translate-x-1">open_in_new</span>
                      </button>
                    ) : (
                      <span className="text-sm font-bold text-slate-500 flex items-center gap-1">
                        Discontinued
                        <span className="material-symbols-outlined text-[18px]">block</span>
                      </span>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}

          {/* Placeholder Card */}
          {/* <div className="group glass-card rounded-3xl border border-slate-700/50 border-dashed overflow-hidden hover:border-slate-500 transition-all duration-300 flex flex-col h-full opacity-60 hover:opacity-100">
            <div className="flex flex-col flex-1 p-8 items-center justify-center min-h-[400px] text-center gap-6">
              <div className="size-20 rounded-2xl bg-slate-800/50 flex items-center justify-center border border-white/5 transition-transform duration-500 group-hover:scale-110">
                <span className="material-symbols-outlined text-slate-500 text-4xl">add</span>
              </div>
              <div>
                <h3 className="text-xl font-bold text-slate-300">New Project</h3>
                <p className="text-slate-500 text-sm mt-2 font-light">Currently architecting something innovative in DeFi.</p>
              </div>
            </div>
          </div> */}
        </div>
      </div>
    </section>
  );
};
