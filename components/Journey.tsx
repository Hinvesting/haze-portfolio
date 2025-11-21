import React from 'react';
import { motion } from 'framer-motion';

export const Journey: React.FC = () => {
  return (
    <section className="py-24 bg-midnight-dark relative overflow-hidden">
      <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(#F1C40F 1px, transparent 1px)', backgroundSize: '30px 30px' }}></div>
      
      <div className="max-w-4xl mx-auto px-6 md:px-12 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-heading text-sm font-bold text-gold uppercase tracking-[0.3em] mb-4">
            The Pivot
          </h2>
          
          <h3 className="font-heading text-3xl md:text-5xl font-bold text-white mb-10 leading-tight">
            From Operational Chaos to <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400">Algorithmic Order.</span>
          </h3>
          
          <div className="bg-[#2C3E50] p-8 md:p-12 rounded-2xl border-l-4 border-gold shadow-2xl">
            <p className="font-heading text-xl md:text-2xl font-medium text-white leading-relaxed italic">
              "7 years in operations taught me exactly how businesses break. Now, I use code and AI to build systems that <span className="text-gold underline decoration-2 underline-offset-4">can't break</span>."
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};