
import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github, Eye } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { toast } from '@/components/ui/use-toast';

const ProjectsSection = () => {
  const projects = [
    {
      title: "Plataforma Sello Ambiental COA",
      description: "Es una distinción otorgada por el Comité Olímpico Argentino a las organizaciones deportivas que integran la sostenibilidad en su gestión diaria. ",
      technologies: ["Wordpress"],
      video: "/projects/selloAmbientalCOAvid.webm",
      demo: "https://selloambientalcoa.com.ar/"
    },
    {
      title: "Dashboard Analytics",
      description: "Dashboard interactivo para análisis de datos con gráficos en tiempo real y métricas avanzadas.",
      technologies: ["React", "D3.js", "Express", "PostgreSQL"],
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=400&fit=crop",
      github: "https://github.com/agustinmruiz/dashboard-analytics",
      demo: "https://dashboard-analytics.com/"
    },
    {
      title: "App de Gestión",
      description: "Aplicación web para gestión de proyectos con sistema de tareas, calendario y colaboración en equipo.",
      technologies: ["Vue.js", "Laravel", "MySQL", "Socket.io"],
      image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=800&h=400&fit=crop",
      github: "https://github.com/agustinmruiz/app-gestion",    // En proceso de desarrollo
      demo: "https://app-gestion.com/"
    },
    {
      title: "Portfolio Creativo",
      description: "Sitio web portfolio para artista digital con galería interactiva y animaciones personalizadas.",
      technologies: ["React", "Framer Motion", "Sanity CMS"],
      image: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=800&h=400&fit=crop",
      github: "https://github.com/agustinmruiz/portfolio-creativo", // En proceso de desarrollo
      demo: "https://portfolio-creativo.com/"
    },
    {
      title: "API RESTful",
      description: "API robusta para aplicación móvil con autenticación JWT, documentación completa y testing.",
      technologies: ["Node.js", "Express", "MongoDB", "JWT"],
      image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&h=400&fit=crop",
      github: "https://github.com/agustinmruiz/api-restful", // En proceso de desarrollo
      demo: "https://api-restful.com/"
    },
    {
      title: "Blog Corporativo",
      description: "Blog empresarial con CMS personalizado, SEO optimizado y sistema de comentarios.",
      technologies: ["WordPress", "PHP", "MySQL", "Custom Theme"],
      image: "https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=800&h=400&fit=crop",
      github: "https://github.com/agustinmruiz/blog-corporativo", // En proceso de desarrollo
      demo: "https://blog-corporativo.com/"
    }
  ];

  const handleDemo = () => {
    toast({
      title: "🚧 Esta función no está implementada aún",
      description: "¡Pero no te preocupes! Puedes solicitarla en tu próximo prompt! 🚀"
    });
  };

  const handleGithub = () => {
    toast({
      title: "🚧 Esta función no está implementada aún",
      description: "¡Pero no te preocupes! Puedes solicitarla en tu próximo prompt! 🚀"
    });
  };

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
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <section id="projects" className="section-padding">
      <div className="container mx-auto px-6">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={containerVariants}
        >
          <motion.h2 
            variants={itemVariants}
            className="text-4xl md:text-5xl font-bold text-center mb-16"
          >
            Proyectos <span className="gradient-text">destacados</span>
          </motion.h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="glass-card project-card group"
              >
                <div className="relative overflow-hidden rounded-t-2xl">
                  {project.video ? (
                    <video
                      className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                      src={project.video}
                      autoPlay
                      loop
                      muted
                      playsInline
                    />
                  ) : (
                    <img 
                      alt={`Screenshot del proyecto ${project.title}`}
                      className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                      src={project.image}
                    />
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-3 group-hover:text-blue-400 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-gray-300 mb-4 text-sm leading-relaxed">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech, techIndex) => (
                      <span 
                        key={techIndex}
                        className="px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-xs font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex gap-3">
                    {project.demo ? ( 
                    <Button 
                      onClick={handleDemo}
                      size="sm" 
                      className="btn-primary flex-1 flex items-center justify-center gap-2"
                    >
                      <Eye size={16} />
                      Demo
                    </Button>
                    ) : null }
                    {project.github ? ( 
                    <Button 
                      onClick={handleGithub}
                      variant="outline" 
                      size="sm" 
                      className="btn-secondary flex items-center justify-center gap-2"
                    >
                      <Github size={16} />
                      Código
                      </Button>
                    ) : null }
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectsSection;
