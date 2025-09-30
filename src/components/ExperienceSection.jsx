
import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, GraduationCap, Award } from 'lucide-react';

const ExperienceSection = () => {
  const experiences = [
    {
      type: 'work',
      title: 'Senior Full Stack Developer',
      company: 'TechCorp Solutions',
      period: '2022 - Presente',
      description: 'Liderazgo de equipo de desarrollo, arquitectura de aplicaciones web escalables y mentoring de desarrolladores junior.',
      icon: Briefcase
    },
    {
      type: 'work',
      title: 'Desarrollador Frontend',
      company: 'Digital Agency Pro',
      period: '2020 - 2022',
      description: 'Desarrollo de interfaces de usuario modernas con React y Vue.js para clientes corporativos y startups.',
      icon: Briefcase
    },
    {
      type: 'freelance',
      title: 'Freelance Developer',
      company: 'Proyectos Independientes',
      period: '2019 - 2020',
      description: 'Desarrollo de sitios web y aplicaciones personalizadas para pequeñas y medianas empresas.',
      icon: Award
    },
    {
      type: 'education',
      title: 'Licenciatura en Sistemas de Información',
      company: 'Universidad de Buenos Aires (UBA)',
      period: '2016 - 2021',
      description: 'Formación integral en desarrollo de software, bases de datos, algoritmos y gestión de proyectos tecnológicos.',
      icon: GraduationCap
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: { opacity: 1, x: 0 }
  };

  return (
    <section className="section-padding bg-black/20">
      <div className="container mx-auto px-6">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={containerVariants}
        >
          <motion.h2 
            variants={itemVariants}
            className="text-4xl md:text-5xl font-bold text-center mb-16"
          >
            Experiencia & <span className="gradient-text">Formación</span>
          </motion.h2>

          <div className="max-w-4xl mx-auto">
            <div className="space-y-8">
              {experiences.map((exp, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="timeline-item"
                >
                  <div className="glass-card p-6 ml-8 group hover:bg-white/10 transition-all duration-300">
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0">
                        <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-emerald-500 rounded-full flex items-center justify-center">
                          <exp.icon size={24} className="text-white" />
                        </div>
                      </div>
                      
                      <div className="flex-1">
                        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                          <h3 className="text-xl font-semibold text-white group-hover:text-blue-400 transition-colors">
                            {exp.title}
                          </h3>
                          <span className="text-sm text-blue-300 font-medium">
                            {exp.period}
                          </span>
                        </div>
                        
                        <h4 className="text-emerald-400 font-medium mb-3">
                          {exp.company}
                        </h4>
                        
                        <p className="text-gray-300 leading-relaxed">
                          {exp.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ExperienceSection;
