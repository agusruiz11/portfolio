
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
        <title>Agustín Mariano Ruiz | Desarrollador Web Fullstack</title>
        <meta name="description" content="Portfolio profesional de Agustín Mariano Ruiz, Desarrollador Web Fullstack especializado en React, Node.js y WordPress. Descubre mis proyectos y experiencia." />
        <meta name="keywords" content="desarrollador web, fullstack, react, nodejs, wordpress, portfolio, agustin ruiz" />
        <meta property="og:title" content="Agustín Mariano Ruiz | Desarrollador Web Fullstack" />
        <meta property="og:description" content="Desarrollador Web Fullstack especializado en React, Node.js y WordPress" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://portfolio-psi-rouge-50.vercel.app/" />
        <meta property="og:image" content="https://portfolio-psi-rouge-50.vercel.app/mapache-og.png" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:type" content="image/png" />
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:image" content="https://portfolio-psi-rouge-50.vercel.app/mapache-og.png" />
        {/* Favicon */}
        <link rel="icon" type="image/png" sizes="32x32" href="/mapache-02-01.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/mapache-02-01.png" />
        <link rel="shortcut icon" href="/mapache-02-01.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/mapache-02-01.png" />
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
