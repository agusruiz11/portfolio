
import React from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, Download, Eye } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { toast } from '@/components/ui/use-toast';
import RaccoonLogo from './RaccoonLogo';

const HeroSection = () => {
  const handleViewProjects = () => {
    document.getElementById('projects').scrollIntoView({ behavior: 'smooth' });
  };

  const handleDownloadCV = () => {
    toast({
      title: "🚧 Esta función no está implementada aún",
      description: "¡Pero no te preocupes! Puedes solicitarla en tu próximo prompt! 🚀"
    });
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative hero-bg overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-20 left-10 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl"
          animate={{
            x: [0, 100, 0],
            y: [0, -50, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
        />
        <motion.div
          className="absolute bottom-20 right-10 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl"
          animate={{
            x: [0, -80, 0],
            y: [0, 60, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear"
          }}
        />
      </div>

      <div className="container mx-auto px-6 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          {/* Logo del Mapache - Estilo Nocturno */}
          <div className="flex justify-center -mb-20">
            <RaccoonLogo size={350} className="transition-all duration-300 hover:scale-105" />
          </div>

          <motion.h1 
            className="text-5xl md:text-7xl lg:text-8xl font-black mb-6 leading-tight"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            <span className="gradient-text">Agustín</span>
            <br />
            <span className="text-white">Mariano Ruiz</span>
          </motion.h1>

          <motion.p 
            className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto font-light"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Desarrollador Web Fullstack | React, Node.js & WordPress
          </motion.p>

          <motion.div 
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <Button 
              onClick={handleViewProjects}
              className="btn-primary flex items-center gap-2 text-lg px-8 py-4"
            >
              <Eye size={20} />
              Ver proyectos
            </Button>
            <Button 
              onClick={handleDownloadCV}
              variant="outline"
              className="btn-secondary flex items-center gap-2 text-lg px-8 py-4"
            >
              <Download size={20} />
              Descargar CV
            </Button>
          </motion.div>

          <motion.div
            className="floating-animation"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1 }}
          >
            <ChevronDown 
              size={32} 
              className="mx-auto text-gray-400 cursor-pointer hover:text-blue-400 transition-colors"
              onClick={() => document.getElementById('about').scrollIntoView({ behavior: 'smooth' })}
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
