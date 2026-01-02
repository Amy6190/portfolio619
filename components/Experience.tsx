import React from "react";

interface TimelineItemProps {
  period: string;
  company: string;
  role: string;
  type: string;
  description?: string;
  points: string[];
  tags: string[];
  isLeft?: boolean;
  isLast?: boolean;
}

const TimelineItem: React.FC<TimelineItemProps> = ({
  period,
  company,
  role,
  type,
  description,
  points,
  tags,
  isLeft,
  isLast,
}) => {
  return (
    <div
      className={`relative flex flex-col sm:flex-row items-start mb-16 group ${
        isLeft ? "" : "sm:flex-row-reverse"
      }`}
    >
      {/* Date & Company Column */}
      <div
        className={`sm:w-1/2 flex flex-col pt-1 sm:pt-0 pl-[70px] sm:pl-0 ${
          isLeft
            ? "sm:pr-12 sm:items-end sm:text-right"
            : "sm:pl-12 sm:items-start sm:text-left"
        }`}
      >
        <span className="text-primary font-black text-xl tracking-tight">
          {period}
        </span>
        <span className="text-slate-500 text-xs font-bold uppercase tracking-[0.2em] mt-1">
          {company}
        </span>
      </div>

      {/* Center Node */}
      <div className="absolute left-0 sm:left-1/2 sm:-ml-4 flex items-center justify-center w-14 h-14 sm:w-8 sm:h-8 z-20">
        <div
          className={`w-4 h-4 rounded-full border-2 transition-all duration-500 bg-background-dark ${
            isLeft
              ? "border-primary ring-4 ring-primary/20 shadow-[0_0_15px_rgba(43,173,238,0.5)] scale-110"
              : "border-slate-600 group-hover:border-primary"
          }`}
        >
          {isLeft && (
            <div className="absolute inset-0.5 rounded-full bg-primary animate-pulse"></div>
          )}
        </div>
      </div>

      {/* Content Card */}
      <div
        className={`sm:w-1/2 mt-4 sm:mt-0 pl-[70px] pr-4 sm:pr-0 w-full ${
          isLeft ? "sm:pl-12" : "sm:pr-12"
        }`}
      >
        <div className="glass-card rounded-3xl p-6 sm:p-8 hover:border-primary/30 transition-all duration-500 hover:-translate-y-1 border border-white/5">
          <div className="flex flex-col gap-1 mb-5">
            <h3 className="text-xl font-bold text-white group-hover:text-primary transition-colors duration-300">
              {role}
            </h3>
            <p className="text-slate-400 text-xs font-medium uppercase tracking-widest">
              {type}
            </p>
          </div>

          {description && (
            <p className="text-slate-400 text-sm mb-4 leading-relaxed font-light">
              {description}
            </p>
          )}

          <ul className="space-y-3 text-slate-300 mb-6 text-sm font-light">
            {points.map((point, i) => (
              <li key={i} className="flex items-start gap-3">
                <span className="material-symbols-outlined text-primary text-[18px] mt-0.5">
                  check_circle
                </span>
                <span>{point}</span>
              </li>
            ))}
          </ul>

          <div className="flex flex-wrap gap-2">
            {tags.map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 rounded-lg bg-surface-dark border border-slate-700/50 text-slate-300 text-[10px] font-bold tracking-wider uppercase group-hover:border-primary/20 transition-colors"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export const Experience: React.FC = () => {
  return (
    <section
      id="resume"
      className="relative py-24 md:py-32 bg-[#0a0f1d] overflow-hidden"
    >
      {/* Ambient background glows */}
      <div className="absolute top-[20%] right-[10%] w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-[10%] left-[5%] w-[400px] h-[400px] bg-secondary/5 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="container mx-auto px-6 max-w-5xl relative z-10">
        {/* Header */}
        <div className="mb-20 text-center sm:text-left">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-800/50 border border-slate-700 mb-6">
            <div className="w-2 h-2 rounded-full bg-primary animate-pulse"></div>
            <span className="text-[10px] font-bold text-primary tracking-[0.2em] uppercase">
              Career Roadmap
            </span>
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight mb-6 leading-tight">
            Professional{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-cyan-400 to-white text-glow">
              Evolution
            </span>
          </h2>
          <p className="text-lg text-slate-400 max-w-2xl leading-relaxed font-light">
            A timeline of technical leadership, scalable architecture, and
            full-stack innovation. From foundational support roles to
            architecting GenAI solutions.
          </p>
        </div>

        {/* Timeline Container */}
        <div className="relative">
          {/* Vertical Spine Line */}
          <div className="absolute left-[28px] sm:left-1/2 top-4 bottom-0 w-px bg-gradient-to-b from-primary via-primary/50 to-transparent sm:-ml-[0.5px]"></div>

          <TimelineItem
            period="2025 — Present"
            company="Valere Labs"
            role="Full Stack GenAI Engineer"
            type="On-site"
            description="Working on production-grade GenAI features using JavaScript/TypeScript, focusing on LLM integrations, orchestration, and scalable backend services."
            points={[
              "Built and maintained GenAI-powered backend services using Node.js and TypeScript.",
              "Integrated LLM APIs (OpenAI and similar providers) into existing systems using JavaScript-based workflows.",
              "Implemented prompt orchestration and chaining patterns with LangChain (JS) for chat and automation use cases.",
              "Designed scalable API layers to support GenAI-driven features across multiple applications.",
            ]}
            tags={["GenAI", "TypeScript", "Node.js", "LangChain (JS)"]}
            isLeft={true}
          />

          <TimelineItem
            period="2022 — 2025"
            company="Espsofttech"
            role="Full Stack Developer"
            type="On-site"
            description="Worked as a Full Stack Developer building scalable web applications with a strong focus on backend services, modern React interfaces, and Web3 integrations."
            points={[
              "Integrated Web3.js into React applications to interact with blockchain wallets and smart contracts.",
              "Built and maintained RESTful APIs using Node.js and Express for production-grade applications.",
              "Improved API performance and reliability through query optimization and better request handling.",
              "Collaborated closely with frontend, backend, and product teams to deliver multiple client-facing solutions.",
            ]}
            tags={["React", "Node.js", "Web3.js", "JavaScript"]}
            isLeft={false}
          />

          <TimelineItem
            period="Jan 2022 — Jun 2022"
            company="CodeBetter"
            role="MERN Stack Intern"
            type="Internship"
            description="Built a strong foundation in full-stack MERN development through hands-on projects and guided mentorship. Focused on writing clean code, understanding application flow, and building production-ready basics."
            points={[
              "Developed basic MERN applications with authentication and CRUD operations.",
              "Worked with MongoDB schemas, REST APIs, and Express middleware.",
              "Learned React fundamentals including state, props, and component architecture.",
              "Followed Git-based workflows and basic deployment practices.",
            ]}
            tags={["MERN", "React", "Node.js", "MongoDB"]}
            isLeft={true}
          />

          <TimelineItem
            period="2017 — 2022"
            company="Foundations"
            role="Operations & Technical Support"
            type="Amazon / TaskUs / Teleperformance"
            description="Strengthened professional foundations through large-scale operations and technical support roles. Developed strong communication, problem-solving, and process-driven thinking while supporting high-volume systems and end users."
            points={[
              "Handled technical support workflows for high-traffic platforms with strict SLAs.",
              "Improved communication skills through direct interaction with global users and teams.",
              "Learned structured problem diagnosis, escalation handling, and root-cause analysis.",
              "Worked within data-driven operational environments focused on reliability and efficiency.",
            ]}
            tags={["Tech Support", "Operations", "Communication", "Process"]}
            isLeft={false}
            isLast={true}
          />

          {/* End Marker */}
          <div className="absolute left-[24px] sm:left-1/2 sm:-ml-2 bottom-0 flex items-center justify-center w-8 h-8 z-10">
            <div className="w-3 h-3 rounded-full bg-slate-800 border border-slate-700"></div>
          </div>
        </div>

        {/* Action Button */}
        <div className="mt-20 flex justify-center sm:justify-end">
          <button 
            onClick={() => {
              const link = document.createElement('a');
              link.href = '/Amit_Mishra_Resume.pdf';
              link.download = 'Amit_Mishra_Resume.pdf';
              document.body.appendChild(link);
              link.click();
              document.body.removeChild(link);
            }}
            className="group relative flex items-center gap-5 rounded-2xl bg-gradient-to-r from-primary to-primary-dark px-8 py-5 text-background-dark shadow-xl shadow-primary/20 transition-all duration-300 hover:scale-[1.02] hover:shadow-primary/40"
          >
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white/20 text-background-dark transition-colors group-hover:bg-white/30">
              <span className="material-symbols-outlined font-bold">
                download
              </span>
            </div>
            <div className="flex flex-col items-start">
              <span className="text-[10px] font-black uppercase tracking-[0.2em] opacity-60">
                Full Portfolio
              </span>
              <span className="text-xl font-black leading-none">
                Download Resume
              </span>
            </div>
          </button>
        </div>
      </div>
    </section>
  );
};
