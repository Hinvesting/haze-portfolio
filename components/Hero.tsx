import React from 'react';
import { motion } from 'framer-motion';
import { Button } from './ui/Button';
import { ArrowRight } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <section className="min-h-screen flex items-center justify-center px-6 md:px-12 py-20 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#34495E] to-midnight -z-10"></div>
      <div className="absolute top-20 right-20 w-72 h-72 bg-gold opacity-5 blur-[120px] rounded-full pointer-events-none"></div>
      <div className="absolute bottom-20 left-20 w-96 h-96 bg-blue-500 opacity-5 blur-[120px] rounded-full pointer-events-none"></div>

      <div className="max-w-7xl w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        
        {/* Left Content */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="space-y-6 z-10"
        >
          <div className="inline-block px-3 py-1 border border-gold/30 rounded-full bg-gold/10 backdrop-blur-sm">
            <span className="text-gold text-xs font-bold tracking-wider uppercase">AI Architect & Builder</span>
          </div>
          
          <h1 className="font-heading text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight text-white">
            Building the <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold to-[#F7DC6F]">Future</span> of Automated Business.
          </h1>
          
          <p className="text-text-light text-lg md:text-xl font-sans max-w-lg leading-relaxed border-l-4 border-gold pl-4">
            From Restaurant GM to AI Software Architect. I build systems that scale and tools that think.
          </p>
          
          <div className="pt-4">
            <Button onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}>
              <span className="flex items-center gap-2">
                View My Work <ArrowRight size={18} />
              </span>
            </Button>
          </div>
        </motion.div>

        {/* Right Content - Profile Image */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="flex justify-center lg:justify-end relative z-10"
        >
          <div className="relative w-72 h-72 md:w-80 md:h-80 lg:w-96 lg:h-96">
            {/* Outer Glow/Shadow */}
            <div className="absolute inset-0 rounded-full bg-gold/20 blur-2xl transform scale-110"></div>
            
            {/* Border Container */}
            <div className="relative w-full h-full rounded-full border-[3px] border-gold shadow-[0_0_30px_rgba(241,196,15,0.3)] bg-midnight p-1">
               {/* Image Wrapper */}
               <div className="w-full h-full rounded-full overflow-hidden bg-midnight-dark relative">
                  <img 
                    src="/images/profile.png"
                    alt="Haze - AI Software Architect" 
                    className="w-full h-full object-cover object-center hover:scale-105 transition-transform duration-500"
                    width={500}
                    height={500}
                  />
               </div>
            </div>
            
            {/* Floating Badge */}
            <motion.div 
              animate={{ y: [0, -8, 0] }}
              transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
              className="absolute bottom-4 -left-4 md:bottom-8 md:-left-8 bg-midnight/90 border border-gold/40 p-3 rounded-lg shadow-lg backdrop-blur-md flex items-center gap-3"
            >
              <div className="w-2 h-2 bg-gold rounded-full animate-pulse"></div>
              <div>
                <span className="block font-heading font-bold text-white text-sm">Haze</span>
                <span className="block text-[10px] text-gold uppercase tracking-wider">AI Architect</span>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};