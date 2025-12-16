
import React from 'react';
import { motion } from 'framer-motion';
import { Code, Database, Palette, Server, Smartphone, Globe } from 'lucide-react';

const AboutSection = () => {
  const skills = [
    { name: 'React', icon: Code, color: '#61DAFB' },
    { name: 'Node.js', icon: Server, color: '#339933' },
    { name: 'PHP', icon: Code, color: '#777BB4' },
    { name: 'Laravel', icon: Server, color: '#FF2D20' },
    { name: 'TailwindCSS', icon: Palette, color: '#06B6D4' },
    { name: 'WordPress', icon: Globe, color: '#21759B' },
    { name: 'MySQL', icon: Database, color: '#4479A1' },
    { name: 'Responsive', icon: Smartphone, color: '#00D4AA' }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <section id="about" className="section-padding bg-black/20">
      <div className="container mx-auto px-6">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={containerVariants}
          className="max-w-6xl mx-auto"
        >
          <motion.h2 
            variants={itemVariants}
            className="text-4xl md:text-5xl font-bold text-center mb-16"
          >
            Sobre <span className="gradient-text">mí</span>
          </motion.h2>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div variants={itemVariants} className="space-y-6">
              <div className="glass-card p-8">
                <h3 className="text-2xl font-semibold mb-4 gradient-text">Mi historia</h3>
                <p className="text-gray-300 leading-relaxed mb-4">
                  Soy un desarrollador web apasionado por crear experiencias digitales excepcionales. 
                  Con más de 5 años de experiencia, me especializo en el desarrollo fullstack utilizando 
                  tecnologías modernas como React y Node.js.
                </p>
                <p className="text-gray-300 leading-relaxed">
                  Mi enfoque se centra en escribir código limpio, escalable y mantener las mejores 
                  prácticas de desarrollo. Creo firmemente que la tecnología debe servir para 
                  resolver problemas reales y mejorar la vida de las personas.
                </p>
              </div>
            </motion.div>

            <motion.div variants={itemVariants} className="flex justify-center">
              <div className="relative">
                <div className="w-80 h-80 rounded-full overflow-hidden glass-card p-2">
                  <img 
                    alt="Foto de perfil de Agustín Mariano Ruiz"
                    className="w-full h-full object-cover rounded-full"
                   src="./public/mapache-small.png" />
                </div>
                <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-r from-blue-500 to-emerald-500 rounded-full blur-xl opacity-60"></div>
                <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-gradient-to-r from-emerald-500 to-blue-500 rounded-full blur-xl opacity-40"></div>
              </div>
            </motion.div>
          </div>

          <motion.div variants={itemVariants} className="mt-16">
            <h3 className="text-3xl font-semibold text-center mb-12">
              Mis <span className="gradient-text">habilidades</span>
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {skills.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  variants={itemVariants}
                  whileHover={{ scale: 1.05 }}
                  className="glass-card p-6 text-center group cursor-pointer skill-icon"
                >
                  <skill.icon 
                    size={48} 
                    className="mx-auto mb-4 transition-colors duration-300"
                    style={{ color: skill.color }}
                  />
                  <h4 className="font-semibold text-white group-hover:text-blue-400 transition-colors">
                    {skill.name}
                  </h4>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
