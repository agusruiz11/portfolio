
import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, Clock, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { toast } from '@/components/ui/use-toast';

const BlogSection = () => {
  const articles = [
    {
      title: "Las mejores prácticas en React 2024",
      excerpt: "Descubre las técnicas más actuales para escribir código React limpio, eficiente y mantenible.",
      date: "15 Mar 2024",
      readTime: "5 min",
      category: "React",
      image: "Modern React development setup with code editor"
    },
    {
      title: "Optimización de rendimiento en Node.js",
      excerpt: "Guía completa para mejorar el rendimiento de tus aplicaciones backend con Node.js y Express.",
      date: "08 Mar 2024",
      readTime: "8 min",
      category: "Backend",
      image: "Node.js performance monitoring dashboard"
    },
    {
      title: "Diseño responsive con TailwindCSS",
      excerpt: "Cómo crear interfaces adaptables y modernas utilizando las utilidades de Tailwind CSS.",
      date: "01 Mar 2024",
      readTime: "6 min",
      category: "CSS",
      image: "Responsive web design mockups on different devices"
    }
  ];

  const handleReadMore = () => {
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
    <section className="section-padding">
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
            Blog & <span className="gradient-text">Artículos</span>
          </motion.h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {articles.map((article, index) => (
              <motion.article
                key={index}
                variants={itemVariants}
                className="glass-card group cursor-pointer overflow-hidden hover:bg-white/10 transition-all duration-300"
              >
                <div className="relative overflow-hidden">
                  <img 
                    alt={`Imagen del artículo: ${article.title}`}
                    className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                   src="https://images.unsplash.com/photo-1595872018818-97555653a011" />
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-blue-500/80 text-white rounded-full text-xs font-medium">
                      {article.category}
                    </span>
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-3 group-hover:text-blue-400 transition-colors line-clamp-2">
                    {article.title}
                  </h3>
                  
                  <p className="text-gray-300 mb-4 text-sm leading-relaxed line-clamp-3">
                    {article.excerpt}
                  </p>
                  
                  <div className="flex items-center justify-between text-xs text-gray-400 mb-4">
                    <div className="flex items-center gap-4">
                      <div className="flex items-center gap-1">
                        <Calendar size={14} />
                        <span>{article.date}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock size={14} />
                        <span>{article.readTime}</span>
                      </div>
                    </div>
                  </div>
                  
                  <Button 
                    onClick={handleReadMore}
                    variant="ghost" 
                    className="w-full justify-between group-hover:bg-blue-500/20 transition-colors"
                  >
                    Leer más
                    <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                  </Button>
                </div>
              </motion.article>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default BlogSection;
