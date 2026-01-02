
import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
import { EMAILJS_CONFIG } from '../emailjs.config';

export const Contact: React.FC = () => {
  const [copied, setCopied] = useState(false);
  const [formState, setFormState] = useState({ name: '', email: '', title: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const copyEmail = () => {
    navigator.clipboard.writeText('imamydgr8@gmail.com');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      await emailjs.send(
        EMAILJS_CONFIG.SERVICE_ID,
        EMAILJS_CONFIG.TEMPLATE_ID,
        {
          name: formState.name,
          from_email: formState.email,
          title: formState.title,
          message: formState.message
        },
        EMAILJS_CONFIG.PUBLIC_KEY
      );
      
      setSubmitStatus('success');
      setFormState({ name: '', email: '', title: '', message: '' });
      setTimeout(() => setSubmitStatus('idle'), 5000);
    } catch (error) {
      setSubmitStatus('error');
      setTimeout(() => setSubmitStatus('idle'), 5000);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormState(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <section id="contact" className="relative py-24 md:py-32 overflow-hidden bg-[#0a0f1d]">
      {/* Background Effects */}
      <div className="absolute top-0 right-0 h-[600px] w-[600px] bg-primary/5 blur-[120px] rounded-full pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 h-[500px] w-[500px] bg-purple-500/5 blur-[120px] rounded-full pointer-events-none"></div>

      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start">
          
          {/* Left Column: Context & Links */}
          <div className="lg:col-span-5 flex flex-col gap-10">
            <div className="flex flex-col gap-6">
              <div className="inline-flex w-fit items-center gap-3 rounded-full border border-primary/20 bg-primary/10 px-4 py-1.5 text-[10px] font-bold text-primary uppercase tracking-widest">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                </span>
                Open for new opportunities
              </div>
              <h2 className="text-4xl lg:text-6xl font-black tracking-tight text-white leading-tight">
                Let's Build <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-cyan-300 text-glow">Scalable Systems</span>
              </h2>
              <p className="text-slate-400 text-lg leading-relaxed max-w-md font-light">
                Specializing in high-performance backend architecture, Node.js microservices, and Web3 integrations. Let's discuss how I can help scale your engineering team.
              </p>
            </div>

            <div className="flex flex-col gap-5 mt-4">
              {/* Email Card */}
              <div 
                onClick={copyEmail}
                className="group flex items-center justify-between p-5 rounded-2xl border border-slate-800 bg-surface-dark/30 hover:bg-surface-dark/50 hover:border-primary/30 transition-all cursor-pointer"
              >
                <div className="flex items-center gap-5">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-slate-800/80 text-primary border border-white/5">
                    <span className="material-symbols-outlined">mail</span>
                  </div>
                  <div>
                    <p className="text-[10px] text-slate-500 font-bold uppercase tracking-widest mb-0.5">Direct Email</p>
                    <p className="text-white font-bold">imamydgr8@gmail.com</p>
                  </div>
                </div>
                <button className="text-slate-500 group-hover:text-primary transition-colors">
                  <span className="material-symbols-outlined">{copied ? 'done' : 'content_copy'}</span>
                </button>
              </div>

              {/* LinkedIn & GitHub Row */}
              <div className="flex gap-4">
                <a 
                  href="https://www.linkedin.com/in/amit-mishra-b96ba6164/" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center gap-3 p-5 rounded-2xl border border-slate-800 bg-surface-dark/30 hover:bg-[#0077b5]/10 hover:border-[#0077b5]/50 transition-all group"
                >
                  <span className="text-slate-400 group-hover:text-[#0077b5] transition-colors material-symbols-outlined">work</span>
                  <span className="text-white font-bold group-hover:text-[#0077b5] text-sm tracking-wide">LinkedIn</span>
                </a>
                <a 
                  href="https://github.com/Amy6190" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center gap-3 p-5 rounded-2xl border border-slate-800 bg-surface-dark/30 hover:bg-white/10 hover:border-white/30 transition-all group"
                >
                  <span className="text-slate-400 group-hover:text-white transition-colors material-symbols-outlined font-bold">terminal</span>
                  <span className="text-white font-bold group-hover:text-white text-sm tracking-wide">GitHub</span>
                </a>
              </div>

              {/* Calendar Card */}
              <div className="relative overflow-hidden rounded-3xl border border-primary/20 bg-gradient-to-br from-surface-dark/40 to-[#0a151d] p-8 shadow-2xl group hover:border-primary/50 transition-all cursor-pointer">
                <div className="absolute top-0 right-0 -mt-6 -mr-6 h-32 w-32 rounded-full bg-primary/5 blur-2xl group-hover:bg-primary/10 transition-all"></div>
                <div className="relative z-10 flex flex-col gap-4">
                  <div className="flex items-center gap-3 text-primary text-sm font-bold tracking-[0.1em] uppercase">
                    <span className="material-symbols-outlined text-xl">calendar_month</span>
                    <span>Schedule a Call</span>
                  </div>
                  <h3 className="text-2xl font-black text-white">Book a 15-min Intro</h3>
                  <p className="text-slate-400 text-sm font-light leading-relaxed">Skip the email tag. Pick a time that works for you directly on my calendar.</p>
                  <div className="mt-2 flex items-center text-sm font-bold text-primary group-hover:translate-x-2 transition-transform">
                    Select a time <span className="material-symbols-outlined text-lg ml-2">arrow_forward</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7">
            <form 
              className="relative flex flex-col gap-8 rounded-3xl border border-white/5 bg-white/[0.02] p-8 md:p-12 backdrop-blur-3xl shadow-2xl border-t-white/10"
              onSubmit={handleSubmit}
            >
              {/* Form Header */}
              <div className="border-b border-slate-800 pb-8">
                <h3 className="text-2xl font-bold text-white mb-2">Send a message</h3>
                <p className="text-slate-400 text-sm font-light">I usually respond within 24 hours to high-quality project inquiries.</p>
              </div>

              <div className="grid grid-cols-1 gap-8">
                {/* Name Field */}
                <div className="flex flex-col gap-3">
                  <label className="text-xs font-bold text-slate-400 uppercase tracking-widest" htmlFor="name">Full Name</label>
                  <div className="relative">
                    <input 
                      className="peer w-full rounded-xl border border-slate-800 bg-surface-dark/50 px-5 py-4 text-white placeholder-slate-600 focus:border-primary focus:ring-1 focus:ring-primary transition-all outline-none text-sm" 
                      id="name" 
                      name="name"
                      placeholder="Jane Doe" 
                      type="text"
                      value={formState.name}
                      onChange={handleInputChange}
                      required
                    />
                    <span className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-slate-600 peer-focus:text-primary transition-colors material-symbols-outlined">person</span>
                  </div>
                </div>

                {/* Email Field */}
                <div className="flex flex-col gap-3">
                  <label className="text-xs font-bold text-slate-400 uppercase tracking-widest" htmlFor="email">Work Email</label>
                  <div className="relative">
                    <input 
                      className="peer w-full rounded-xl border border-slate-800 bg-surface-dark/50 px-5 py-4 text-white placeholder-slate-600 focus:border-primary focus:ring-1 focus:ring-primary transition-all outline-none text-sm" 
                      id="email" 
                      name="email"
                      placeholder="jane@company.com" 
                      type="email"
                      value={formState.email}
                      onChange={handleInputChange}
                      required
                    />
                    <span className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-slate-600 peer-focus:text-primary transition-colors material-symbols-outlined">alternate_email</span>
                  </div>
                </div>

                {/* Title Field */}
                <div className="flex flex-col gap-3">
                  <label className="text-xs font-bold text-slate-400 uppercase tracking-widest" htmlFor="title">Project Title</label>
                  <div className="relative">
                    <input 
                      className="peer w-full rounded-xl border border-slate-800 bg-surface-dark/50 px-5 py-4 text-white placeholder-slate-600 focus:border-primary focus:ring-1 focus:ring-primary transition-all outline-none text-sm" 
                      id="title" 
                      name="title"
                      placeholder="Web App Development" 
                      type="text"
                      value={formState.title}
                      onChange={handleInputChange}
                      required
                    />
                    <span className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-slate-600 peer-focus:text-primary transition-colors material-symbols-outlined">title</span>
                  </div>
                </div>
              </div>

              {/* Message Field */}
              <div className="flex flex-col gap-3">
                <label className="text-xs font-bold text-slate-400 uppercase tracking-widest" htmlFor="message">Project Details</label>
                <textarea 
                  className="w-full resize-none rounded-xl border border-slate-800 bg-surface-dark/50 px-5 py-4 text-white placeholder-slate-600 focus:border-primary focus:ring-1 focus:ring-primary transition-all outline-none text-sm min-h-[160px]" 
                  id="message" 
                  name="message"
                  placeholder="Tell me about the engineering challenges you're facing or the system you want to build..."
                  value={formState.message}
                  onChange={handleInputChange}
                  required
                ></textarea>
              </div>

              {/* Submit Button */}
              <button 
                className={`group relative flex w-full items-center justify-center gap-3 rounded-xl py-5 text-sm font-black transition-all active:scale-[0.98] ${
                  isSubmitting 
                    ? 'bg-slate-600 cursor-not-allowed' 
                    : submitStatus === 'success'
                    ? 'bg-green-600 hover:bg-green-700'
                    : submitStatus === 'error'
                    ? 'bg-red-600 hover:bg-red-700'
                    : 'bg-primary hover:bg-primary-dark shadow-xl shadow-primary/20'
                } text-background-dark`}
                type="submit"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <>
                    <span className="animate-spin material-symbols-outlined text-xl">progress_activity</span>
                    <span>Sending...</span>
                  </>
                ) : submitStatus === 'success' ? (
                  <>
                    <span className="material-symbols-outlined text-xl">check_circle</span>
                    <span>Message Sent!</span>
                  </>
                ) : submitStatus === 'error' ? (
                  <>
                    <span className="material-symbols-outlined text-xl">error</span>
                    <span>Failed to Send</span>
                  </>
                ) : (
                  <>
                    <span>Send Message</span>
                    <span className="material-symbols-outlined text-xl group-hover:translate-x-1 transition-transform">send</span>
                  </>
                )}
              </button>

              <div className="flex items-center justify-center gap-3 pt-2">
                <span className="material-symbols-outlined text-slate-600 text-sm">lock</span>
                <p className="text-[10px] font-bold text-slate-600 uppercase tracking-widest">Your data is secure. No spam, ever.</p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
