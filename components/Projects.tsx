import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, Layout, CreditCard, Settings, Database } from 'lucide-react';
import { Project } from '../types';

const projects: Project[] = [
  {
    id: '1',
    title: 'Cinematic Studio AI',
    tag: 'Creative Suite',
    description: 'Full-stack AI content production engine integrating text, image, and video generation for automated storytelling.',
    link: '#',
    icon: Layout
  },
  {
    id: '2',
    title: 'QuillNexus Pro',
    tag: 'SaaS Product',
    description: 'Automated marketing content platform with multi-tenant architecture, user management, and seamless Stripe integration.',
    link: '#',
    icon: CreditCard
  },
  {
    id: '3',
    title: 'GrowthDriveSystem',
    tag: 'Internal Tool',
    description: 'Complex CRM & Fulfillment Engine built on Google Workspace & Apps Script automation for high-volume operations.',
    link: '#',
    icon: Database
  }
];

export const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-24 px-6 md:px-12 max-w-7xl mx-auto">
      <div className="mb-16">
        <h2 className="font-heading text-3xl md:text-4xl font-bold text-white mb-4">
          Featured <span className="text-gold">Projects</span>
        </h2>
        <div className="h-1 w-20 bg-gold rounded-full"></div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[minmax(300px,auto)]">
        {projects.map((project, index) => {
          const Icon = project.icon || Settings;
          
          // Bento Grid sizing logic - First item spans 2 cols on large screens for visual interest
          const gridClass = index === 0 ? "md:col-span-2" : "md:col-span-1";

          return (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className={`${gridClass} group relative bg-[#34495E]/40 border border-white/10 rounded-2xl p-8 overflow-hidden hover:border-gold/50 transition-all duration-300 hover:shadow-[0_0_30px_rgba(44,62,80,0.6)] flex flex-col justify-between`}
            >
              {/* Background Decoration */}
              <div className="absolute top-0 right-0 p-32 bg-gold/5 rounded-full blur-3xl -mr-16 -mt-16 group-hover:bg-gold/10 transition-all duration-500"></div>

              <div className="relative z-10">
                <div className="flex justify-between items-start mb-6">
                  <div className="p-3 bg-midnight rounded-lg border border-white/10 group-hover:border-gold text-gold">
                    <Icon size={24} />
                  </div>
                  <div className="px-3 py-1 bg-white/5 rounded-full border border-white/10">
                    <span className="text-xs font-semibold text-text-light uppercase tracking-wider">{project.tag}</span>
                  </div>
                </div>

                <h3 className="font-heading text-2xl font-bold text-white mb-3 group-hover:text-gold transition-colors">
                  {project.title}
                </h3>
                <p className="text-text-light/80 font-sans leading-relaxed">
                  {project.description}
                </p>
              </div>

              <div className="relative z-10 mt-8 pt-6 border-t border-white/5">
                <a 
                  href={project.link} 
                  className="inline-flex items-center gap-2 text-white font-semibold hover:text-gold transition-colors group/link"
                >
                  View Project 
                  <ArrowUpRight size={18} className="group-hover/link:translate-x-1 group-hover/link:-translate-y-1 transition-transform" />
                </a>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};