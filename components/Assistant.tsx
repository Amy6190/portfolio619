
import React, { useState, useRef, useEffect } from 'react';
import { gemini } from '../services/geminiService';
import { ChatMessage } from '../types';

export const Assistant: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMsg: ChatMessage = { role: 'user', content: input };
    setMessages(prev => [...prev, userMsg]);
    setInput('');
    setIsLoading(true);

    const response = await gemini.chat(input, messages);
    const assistantMsg: ChatMessage = { role: 'assistant', content: response || 'Error' };
    
    setMessages(prev => [...prev, assistantMsg]);
    setIsLoading(false);
  };

  return (
    <div className="fixed bottom-6 right-6 z-[100] flex flex-col items-end">
      {isOpen && (
        <div className="w-[350px] sm:w-[400px] h-[500px] glass-card rounded-2xl mb-4 shadow-2xl overflow-hidden flex flex-col border border-primary/20">
          <div className="p-4 bg-primary/10 border-b border-primary/20 flex justify-between items-center">
            <div className="flex items-center gap-2">
              <span className="size-2 bg-emerald-500 rounded-full animate-pulse"></span>
              <span className="font-bold text-sm text-white">AI Assistant</span>
            </div>
            <button onClick={() => setIsOpen(false)} className="text-slate-400 hover:text-white">
              <span className="material-symbols-outlined text-lg">close</span>
            </button>
          </div>
          
          <div ref={scrollRef} className="flex-1 overflow-y-auto p-4 space-y-4">
            {messages.length === 0 && (
              <div className="text-center py-10 space-y-2">
                <span className="material-symbols-outlined text-4xl text-primary opacity-50">smart_toy</span>
                <p className="text-slate-400 text-sm">Ask me anything about my projects, stack, or experience!</p>
              </div>
            )}
            {messages.map((msg, i) => (
              <div key={i} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[85%] p-3 rounded-2xl text-sm ${msg.role === 'user' ? 'bg-primary text-background-dark font-medium rounded-tr-none' : 'bg-surface-dark border border-slate-700 text-slate-200 rounded-tl-none'}`}>
                  {msg.content}
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-surface-dark border border-slate-700 p-3 rounded-2xl rounded-tl-none">
                  <div className="flex gap-1">
                    <div className="size-1.5 bg-primary rounded-full animate-bounce"></div>
                    <div className="size-1.5 bg-primary rounded-full animate-bounce [animation-delay:-0.15s]"></div>
                    <div className="size-1.5 bg-primary rounded-full animate-bounce [animation-delay:-0.3s]"></div>
                  </div>
                </div>
              </div>
            )}
          </div>

          <div className="p-4 border-t border-slate-800 bg-background-dark/50">
            <div className="relative">
              <input 
                type="text" 
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                placeholder="Type a message..."
                className="w-full bg-surface-dark border border-slate-700 rounded-xl px-4 py-2 text-sm text-white focus:outline-none focus:border-primary transition-colors"
              />
              <button 
                onClick={handleSend}
                disabled={isLoading}
                className="absolute right-2 top-1.5 text-primary hover:text-primary-dark disabled:opacity-50"
              >
                <span className="material-symbols-outlined">send</span>
              </button>
            </div>
          </div>
        </div>
      )}
      
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="size-14 bg-primary rounded-full flex items-center justify-center shadow-lg shadow-primary/30 hover:scale-110 transition-transform duration-200 group relative"
      >
        <span className="material-symbols-outlined text-background-dark font-bold text-[28px]">
          {isOpen ? 'close' : 'chat'}
        </span>
        {!isOpen && (
          <span className="absolute -top-1 -right-1 flex h-4 w-4">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-4 w-4 bg-emerald-500 border-2 border-background-dark"></span>
          </span>
        )}
      </button>
    </div>
  );
};
