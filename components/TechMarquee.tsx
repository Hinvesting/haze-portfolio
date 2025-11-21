import React from 'react';

const skills = [
  "Next.js",
  "React",
  "TypeScript",
  "Python",
  "Gemini API",
  "OpenAI",
  "Make.com",
  "Stripe",
  "Google Apps Script",
  "PostgreSQL",
  "Tailwind CSS",
  "Node.js"
];

export const TechMarquee: React.FC = () => {
  return (
    <section className="py-10 bg-midnight-dark border-y border-white/5 overflow-hidden relative">
      <div className="absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-midnight-dark to-transparent z-10"></div>
      <div className="absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-midnight-dark to-transparent z-10"></div>
      
      <div className="flex w-full">
        <div className="flex min-w-full animate-marquee items-center gap-8 md:gap-16 px-4">
          {[...skills, ...skills, ...skills].map((skill, idx) => (
            <span 
              key={idx} 
              className="font-heading text-xl md:text-2xl font-bold text-white/20 whitespace-nowrap hover:text-gold transition-colors duration-300 cursor-default"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};