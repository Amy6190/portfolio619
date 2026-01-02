
import React, { useState } from 'react';

interface ExpertiseCardProps {
  title: string;
  description: string;
  icon: string;
  skills: string[];
  backgroundImage: string;
  className?: string;
}

const ExpertiseCard: React.FC<ExpertiseCardProps> = ({ title, description, icon, skills, backgroundImage, className = "" }) => (
  <div className={`group relative flex flex-col h-full min-h-[340px] overflow-hidden rounded-3xl glass-card transition-all duration-500 hover:-translate-y-2 border border-white/5 hover:border-primary/40 ${className}`}>
    {/* Dynamic Background Image */}
    <div 
      className="absolute inset-0 bg-cover bg-center opacity-20 group-hover:scale-105 transition-transform duration-700 mix-blend-overlay pointer-events-none" 
      style={{ backgroundImage: `url('${backgroundImage}')` }}
    />
    <div className="absolute inset-0 bg-gradient-to-t from-background-dark via-background-dark/95 to-background-dark/40" />
    
    <div className="relative z-10 flex flex-col h-full p-8 md:p-10">
      <div className="flex items-center justify-between mb-auto">
        <div className="w-14 h-14 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-background-dark transition-all duration-300 shadow-[0_0_20px_rgba(43,173,238,0.15)]">
          <span className="material-symbols-outlined text-[32px]">{icon}</span>
        </div>
        <span className="material-symbols-outlined text-slate-600 group-hover:text-primary transition-colors duration-300">arrow_outward</span>
      </div>
      
      <div className="mt-8">
        <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-primary transition-colors duration-300">{title}</h3>
        <p className="text-sm text-slate-400 mb-6 leading-relaxed font-light">{description}</p>
        <div className="flex flex-wrap gap-2">
          {skills.map((skill) => (
            <span 
              key={skill} 
              className="px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 text-[11px] font-mono font-medium text-slate-300 group-hover:border-primary/20 transition-colors cursor-default"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </div>
  </div>
);

export const Expertise: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  
  const expertiseData = [
    {
      title: "Backend & Architecture",
      description: "Building robust microservices and scalable APIs designed for high availability.",
      icon: "dns",
      skills: ['Node.js', 'Express.js', 'Microservices', 'REST APIs', 'WebSockets', 'Socket.IO'],
      backgroundImage: "https://images.unsplash.com/photo-1558494949-ef526b0042a0?q=80&w=2668&auto=format&fit=crop"
    },
    {
      title: "Databases & Messaging",
      description: "Designing efficient data models and implementing reliable message queues.",
      icon: "database",
      skills: ['MongoDB', 'PostgreSQL', 'MySQL', 'Redis', 'RabbitMQ'],
      backgroundImage: "https://images.unsplash.com/photo-1544383835-bda2bc66a55d?q=80&w=2121&auto=format&fit=crop"
    },
    {
      title: "Frontend Engineering",
      description: "Crafting responsive, accessible, and performant user interfaces.",
      icon: "code",
      skills: ['React.js', 'Next.js', 'TypeScript', 'Tailwind', 'Framer Motion'],
      backgroundImage: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=2564&auto=format&fit=crop"
    },
    {
      title: "Web3 & GenAI",
      description: "Integrating blockchain technologies and LLMs into production applications.",
      icon: "smart_toy",
      skills: ['Web3.js', 'Solidity', 'OpenAI API', 'LangChain', 'Vector DBs'],
      backgroundImage: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=2565&auto=format&fit=crop"
    },
    {
      title: "DevOps & Infrastructure",
      description: "Streamlining development lifecycles with modern CI/CD pipelines, containerization, and cloud infrastructure management.",
      icon: "cloud_sync",
      skills: ['AWS (EC2, S3, Lambda)', 'Docker & K8s', 'GitHub Actions', 'Terraform', 'Linux'],
      backgroundImage: "https://images.unsplash.com/photo-1667372393119-c85c020799a3?q=80&w=2670&auto=format&fit=crop"
    }
  ];

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % (expertiseData.length - 2));
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + (expertiseData.length - 2)) % (expertiseData.length - 2));
  };

  return (
    <section id="expertise" className="relative py-24 md:py-32 bg-[#0a0f1d]">
      {/* Decorative background elements */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-[100px] pointer-events-none"></div>
      <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-purple-900/5 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16 space-y-4">
          <div className="inline-block px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-[10px] font-bold uppercase tracking-[0.2em]">
            Core Competencies
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white leading-tight">
            Technical <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-cyan-400 text-glow">Expertise</span>
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto font-light leading-relaxed">
            Engineering scalable solutions with a modern tech stack. Specialized in high-performance backend systems, distributed architectures, and intuitive frontend experiences.
          </p>
        </div>

        {/* Carousel Container */}
        <div className="relative">
          {/* Navigation Arrows */}
          <button 
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-primary/20 border border-primary/40 flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-all duration-300 shadow-lg backdrop-blur-sm"
          >
            <span className="material-symbols-outlined">chevron_left</span>
          </button>
          
          <button 
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-primary/20 border border-primary/40 flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-all duration-300 shadow-lg backdrop-blur-sm"
          >
            <span className="material-symbols-outlined">chevron_right</span>
          </button>

          {/* Carousel Track */}
          <div className="overflow-hidden mx-16">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * (100 / 3)}%)` }}
            >
              {expertiseData.map((item, index) => (
                <div key={index} className="w-1/3 flex-shrink-0 px-4">
                  <ExpertiseCard 
                    title={item.title}
                    description={item.description}
                    icon={item.icon}
                    skills={item.skills}
                    backgroundImage={item.backgroundImage}
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center mt-8 space-x-2">
            {Array.from({ length: expertiseData.length - 2 }).map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  currentIndex === index ? 'bg-primary w-8' : 'bg-white/20 hover:bg-white/40'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
