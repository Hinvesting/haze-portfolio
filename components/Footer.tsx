import React from 'react';
import { Youtube, Linkedin, Github, Mail } from 'lucide-react';
import { SocialLink } from '../types';

const socialLinks: SocialLink[] = [
  {
    name: 'LinkedIn',
    url: 'https://www.linkedin.com/in/newmoneymillionaires757/',
    icon: Linkedin
  },
  {
    name: 'YouTube',
    url: 'https://www.youtube.com/@Haze-AI-z76',
    icon: Youtube
  },
  {
    name: 'GitHub',
    url: 'https://github.com/Hinvesting',
    icon: Github
  }
];

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#1a252f] border-t border-white/5 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8 mb-12">
          
          <div className="text-center md:text-left">
            <h2 className="font-heading text-2xl font-bold text-white tracking-wide">
              HAZE <span className="text-gold">AI</span>
            </h2>
            <p className="text-text-light/60 text-sm mt-2">
              Architecting the future, one algorithm at a time.
            </p>
          </div>

          <div className="flex gap-6">
            {socialLinks.map((link) => (
              <a
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 flex items-center justify-center rounded-full bg-white/5 text-white hover:bg-gold hover:text-midnight transition-all duration-300"
                aria-label={link.name}
              >
                <link.icon size={20} />
              </a>
            ))}
          </div>
        </div>

        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-text-light/40">
          <p>&copy; {new Date().getFullYear()} Haze AI. All rights reserved.</p>
          <p className="mt-2 md:mt-0">Designed for High Conversion</p>
        </div>
      </div>
    </footer>
  );
};