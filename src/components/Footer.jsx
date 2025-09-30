
import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Rocket } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-black/40 border-t border-white/10">
      <div className="container mx-auto px-6 py-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <div className="flex items-center justify-center gap-2 mb-4">
            <span className="text-gray-300">Construyendo experiencias digitales con pasión</span>
            <Rocket size={20} className="text-blue-400" />
          </div>
          
          <div className="flex items-center justify-center gap-2 text-gray-400">
            <span>© 2024 Agustín Mariano Ruiz. Hecho con</span>
            <Heart size={16} className="text-red-400 animate-pulse" />
            <span>en Buenos Aires</span>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
