
import React from 'react';
import { Helmet } from 'react-helmet';
import { Toaster } from '@/components/ui/toaster';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import ProjectsSection from '@/components/ProjectsSection';
import ExperienceSection from '@/components/ExperienceSection';
import BlogSection from '@/components/BlogSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';

function App() {
  return (
    <>
      <Helmet>
        <title>Portfolio Desarrollador Web - Agustín Mariano Ruiz</title>
        <meta name="description" content="Portfolio profesional de Agustín Mariano Ruiz, Desarrollador Web Fullstack especializado en React, Node.js y WordPress. Descubre mis proyectos y experiencia." />
        <meta name="keywords" content="desarrollador web, fullstack, react, nodejs, wordpress, portfolio, agustin ruiz" />
        <meta property="og:title" content="Portfolio Desarrollador Web - Agustín Mariano Ruiz" />
        <meta property="og:description" content="Desarrollador Web Fullstack especializado en React, Node.js y WordPress" />
        <meta property="og:type" content="website" />
        <link rel="icon" type="image/svg+xml" href="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'%3E%3Ctext y='.9em' font-size='90'%3EAR%3C/text%3E%3C/svg%3E" />
      </Helmet>
      
      <div className="min-h-screen">
        <HeroSection />
        <AboutSection />
        <ProjectsSection />
        <ExperienceSection />
        <BlogSection />
        <ContactSection />
        <Footer />
        <Toaster />
      </div>
    </>
  );
}

export default App;
