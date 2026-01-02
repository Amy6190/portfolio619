import React from "react";

export const About: React.FC = () => {
  return (
    <section id="about" className="relative py-24 md:py-32 overflow-hidden">
      {/* Decorative Orbs specific to this section */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-primary/10 blur-[120px] rounded-full -translate-x-1/2 -translate-y-1/2 pointer-events-none"></div>
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-secondary/5 blur-[100px] rounded-full translate-x-1/3 translate-y-1/3 pointer-events-none"></div>

      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        {/* Section Header */}
        <header className="mb-16 flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-slate-800 pb-8">
          <div className="flex flex-col gap-3">
            <div className="flex items-center gap-2">
              <span className="h-1 w-8 bg-primary rounded-full"></span>
              <span className="text-primary font-bold tracking-[0.2em] text-xs uppercase">
                About Me
              </span>
            </div>
          
          </div>
      
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Profile Card & Quick Stats */}
          <div className="lg:col-span-5 flex flex-col gap-8">
            {/* Main Profile Card */}
            <div className="glass-card rounded-3xl p-8 relative overflow-hidden group border border-white/5 hover:border-primary/20 transition-all duration-500">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary via-purple-500 to-transparent opacity-70"></div>

              <div className="flex flex-col gap-8">
                {/* Headshot & Role */}
                <div className="flex flex-col sm:flex-row gap-6 items-start sm:items-center">
                  <div className="relative">
                    <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-2xl overflow-hidden border-2 border-white/10 shadow-2xl">
                      <img
                        alt="Senior Engineer"
                        className="w-full h-full object-cover filter grayscale group-hover:grayscale-0 transition-all duration-700 scale-100 group-hover:scale-110"
                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuBt-W43lVksKCRyaykv30afeontWmTmusCCwAIv0M3DGWZ0Xl0dX7CSLyRe-a2llYP6NWxNMDMF8fTz4tho3IlSSL-R60BzlXpBHCYcbiMZNHQw-Yu0bZWffTMSQa11do9Kg1HxbbzK-B8cXIt73hx0CyuOMVEoqpxJt5dbhIjUtDR7WHDpPdQAUOHuWo2FJnFEWEmAcfC_mBGpXa33u63FfzinjavnwSfmrRVdnKDOtKRLkP_pqmA6FSsSTZw0CjEUICPFWjgjo1Q"
                      />
                      {/* Floating Badge 1 – Compact Skill Pill */}
                      <div className="absolute bottom-2 left-2 z-20 flex items-center gap-1.5 rounded-full bg-black/60 backdrop-blur px-2.5 py-1 border border-white/10 shadow-md">
                        <span className="material-symbols-outlined text-[12px] text-emerald-400">
                          database
                        </span>
                        <span className="text-[10px] font-semibold text-white uppercase tracking-wide">
                          MERN Dev
                        </span>
                      </div>

                      {/* Floating Badge 2 – Status Indicator */}
                      <div className="absolute top-2 right-2 z-20 flex items-center gap-1.5 rounded-full bg-black/60 backdrop-blur px-2 py-1 border border-white/10">
                        <span className="size-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                        <span className="text-[9px] font-mono text-white uppercase tracking-wider">
                          Active
                        </span>
                      </div>
                    </div>
                    <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-emerald-500 rounded-full border-4 border-[#161b2c] flex items-center justify-center">
                      <span className="block w-2 h-2 bg-white rounded-full animate-pulse"></span>
                    </div>
                  </div>
                  <div className="flex flex-col">
                    <h3 className="text-2xl font-black text-white leading-tight">
                      Senior Full Stack
                      <br />
                      Engineer
                    </h3>
                    <p className="text-primary font-mono text-xs mt-2 font-bold tracking-widest uppercase">
                      Node.js • GenAI • Web3
                    </p>
                  </div>
                </div>

                {/* Short Bio */}
                <div className="space-y-4">
                  <p className="text-slate-300 leading-relaxed text-sm md:text-base font-light">
                    I specialize in building scalable, high-performance systems.
                    With a strong foundation in{" "}
                    <span className="text-primary font-semibold">Node.js</span>{" "}
                    and recent focus on{" "}
                    <span className="text-primary font-semibold">GenAI</span>{" "}
                    integrations, I turn complex backend challenges into
                    reliable microservices.
                  </p>
                </div>

                {/* CTA Button */}
                <button className="group/btn relative w-full overflow-hidden rounded-xl bg-surface-dark px-6 py-4 text-white border border-slate-700 hover:border-primary/50 transition-all duration-300">
                  <div className="relative z-10 flex items-center justify-center gap-3">
                    <span className="material-symbols-outlined text-[20px] transition-transform group-hover/btn:-translate-y-0.5 group-hover/btn:translate-x-0.5">
                      download
                    </span>
                    <span className="text-sm font-bold tracking-wider">
                      Download CV
                    </span>
                  </div>
                </button>
              </div>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-3 gap-4">
              {[
                {
                  value: "3+",
                  label: "Years Exp",
                  color: "border-t-primary/40",
                },
                {
                  value: "50+",
                  label: "Microservices",
                  color: "border-t-purple-500/40",
                },
                {
                  value: "15+",
                  label: "Web3 Projs",
                  color: "border-t-cyan-400/40",
                },
              ].map((stat) => (
                <div
                  key={stat.label}
                  className={`glass-card p-4 rounded-2xl flex flex-col items-center justify-center text-center border-t-2 ${stat.color} hover:-translate-y-1 transition-transform duration-300`}
                >
                  <span className="text-2xl font-black text-white">
                    {stat.value}
                  </span>
                  <span className="text-[10px] text-slate-500 uppercase tracking-widest font-bold mt-1">
                    {stat.label}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Skills & Timeline */}
          <div className="lg:col-span-7 flex flex-col gap-8">
            {/* Technical Arsenal */}
            <div className="glass-card rounded-3xl p-8 border border-white/5">
              <div className="flex items-center gap-3 mb-8 border-b border-slate-800 pb-5">
                <span className="material-symbols-outlined text-primary text-2xl">
                  terminal
                </span>
                <h3 className="text-lg font-bold text-white uppercase tracking-[0.2em]">
                  Technical Arsenal
                </h3>
              </div>
              <div className="flex flex-wrap gap-3">
                {[
                  { label: "Node.js", highlight: false },
                  { label: "Express", highlight: false },
                  { label: "WebSockets", highlight: false },
                  { label: "GraphQL", highlight: false },
                  { label: "GenAI (LLMs)", highlight: "primary" },
                  { label: "Web3/Solidity", highlight: "secondary" },
                  { label: "Docker", highlight: false },
                  { label: "Kubernetes", highlight: false },
                  { label: "AWS", highlight: false },
                  { label: "Redis", highlight: false },
                ].map((skill) => (
                  <div
                    key={skill.label}
                    className={`px-4 py-2 rounded-xl text-sm font-medium transition-all duration-300 cursor-default border ${
                      skill.highlight === "primary"
                        ? "bg-primary/10 border-primary/30 text-primary"
                        : skill.highlight === "secondary"
                        ? "bg-secondary/10 border-secondary/30 text-secondary"
                        : "bg-surface-dark border-slate-700/50 text-slate-300 hover:border-primary/30 hover:bg-slate-800"
                    }`}
                  >
                    {skill.label}
                  </div>
                ))}
              </div>
            </div>

            {/* Career Timeline */}
            <div className="glass-card rounded-3xl p-8 border border-white/5 flex-grow">
              <div className="flex items-center gap-3 mb-10 border-b border-slate-800 pb-5">
                <span className="material-symbols-outlined text-primary text-2xl">
                  history_edu
                </span>
                <h3 className="text-lg font-bold text-white uppercase tracking-[0.2em]">
                  Career Progression
                </h3>
              </div>

              <div className="relative pl-4">
                {/* Vertical Line */}
                <div className="absolute left-0 top-2 bottom-4 w-0.5 bg-slate-800">
                  <div className="absolute top-0 left-0 w-full h-[60%] bg-gradient-to-b from-primary to-transparent"></div>
                </div>

                {/* Timeline Items */}
                <div className="space-y-12">
                  {[
                    {
                      role: "Senior Engineer",
                      period: "2023 — Present",
                      description:
                        "Leading backend architecture for scalable GenAI applications.",
                      points: [
                        "Implemented LLM microservices reducing latency by 40%.",
                        "Architected secure Web3 payment gateways.",
                      ],
                      active: true,
                    },
                    {
                      role: "Full Stack Developer",
                      period: "2021 — 2023",
                      description:
                        "Core developer for a high-volume Crypto Exchange Platform.",
                      points: [
                        "Built high-frequency trading modules with Node.js.",
                        "Optimized database queries for millions of transactions.",
                      ],
                      active: false,
                    },
                    {
                      role: "Backend Developer",
                      period: "2020 — 2021",
                      description:
                        "Specialized in Real-time Communication Systems.",
                      points: [],
                      active: false,
                    },
                  ].map((item, idx) => (
                    <div key={idx} className="relative pl-10 group">
                      {/* Dot */}
                      <div
                        className={`absolute left-[-17px] top-1.5 h-4 w-4 rounded-full border-2 z-10 transition-all duration-500 ${
                          item.active
                            ? "border-primary bg-background-dark shadow-[0_0_15px_rgba(43,173,238,0.5)] scale-110"
                            : "border-slate-600 bg-background-dark group-hover:border-primary"
                        }`}
                      >
                        {item.active && (
                          <div className="absolute inset-[3px] rounded-full bg-primary animate-pulse"></div>
                        )}
                      </div>

                      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline gap-2 mb-3">
                        <h4
                          className={`text-xl font-bold transition-colors ${
                            item.active
                              ? "text-white"
                              : "text-slate-400 group-hover:text-white"
                          }`}
                        >
                          {item.role}
                        </h4>
                        <span
                          className={`text-[10px] font-mono font-bold px-2 py-1 rounded border tracking-widest ${
                            item.active
                              ? "text-primary bg-primary/10 border-primary/20"
                              : "text-slate-500 border-slate-700"
                          }`}
                        >
                          {item.period}
                        </span>
                      </div>

                      <p className="text-slate-400 text-sm mb-3 font-light leading-relaxed">
                        {item.description}
                      </p>
                      {item.points.length > 0 && (
                        <ul className="space-y-2">
                          {item.points.map((pt, i) => (
                            <li
                              key={i}
                              className="flex items-start gap-2 text-xs text-slate-500"
                            >
                              <span className="material-symbols-outlined text-[14px] text-primary/50 mt-0.5">
                                check_circle
                              </span>
                              <span>{pt}</span>
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
