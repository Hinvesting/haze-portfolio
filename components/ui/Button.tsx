import React from 'react';
import { motion } from 'framer-motion';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  variant?: 'primary' | 'outline';
  href?: string;
}

export const Button: React.FC<ButtonProps> = ({ 
  children, 
  variant = 'primary', 
  href, 
  className = '', 
  ...props 
}) => {
  const baseStyles = "px-8 py-3 rounded-md font-heading font-bold text-sm tracking-wide uppercase transition-all duration-300 ease-in-out";
  
  const variants = {
    primary: "bg-gold text-midnight hover:bg-gold-hover shadow-[0_0_15px_rgba(241,196,15,0.4)] hover:shadow-[0_0_25px_rgba(241,196,15,0.6)]",
    outline: "border-2 border-gold text-gold hover:bg-gold hover:text-midnight"
  };

  const content = (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className={`${baseStyles} ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </motion.button>
  );

  if (href) {
    return <a href={href}>{content}</a>;
  }

  return content;
};