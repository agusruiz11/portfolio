import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';

const RaccoonLogo = ({ className = "", size = 140 }) => {
  const containerRef = useRef(null);
  const [svgContent, setSvgContent] = useState(null);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    fetch('/mapache-01.svg')
      .then(response => response.text())
      .then(svg => setSvgContent(svg));
  }, []);

  useEffect(() => {
    const container = containerRef.current;
    if (!container || !svgContent) return;

    setTimeout(() => {
      const leftPupil = document.getElementById('leftPupil');
      const rightPupil = document.getElementById('rightPupil');
      if (!leftPupil || !rightPupil) return;

      const svg = container.querySelector('svg');
      if (svg) {
        gsap.fromTo(svg, 
          { opacity: 0, scale: 0.3, rotation: -45 }, 
          { opacity: 1, scale: 1, rotation: 0, duration: 1.2, ease: "back.out(1.7)", delay: 0.3 }
        );
      }

      const handleMouseMove = (e) => {
        const rect = container.getBoundingClientRect();
        const mouseX = e.clientX - rect.left;
        const mouseY = e.clientY - rect.top;
        
        const svgWidth = 841.89;
        const svgHeight = 595.28;
        let svgX = (mouseX / rect.width) * svgWidth;
        let svgY = (mouseY / rect.height) * svgHeight;
        
        svgX = Math.max(0, Math.min(svgWidth, svgX));
        svgY = Math.max(0, Math.min(svgHeight, svgY));
        
        const leftEyeCenterX = 510;
        const leftEyeCenterY = 290;
        const rightEyeCenterX = 363;
        const rightEyeCenterY = 295;
        const maxPupilRadius = 10;
        
        const leftToMouseX = svgX - leftEyeCenterX;
        const leftToMouseY = svgY - leftEyeCenterY;
        const rightToMouseX = svgX - rightEyeCenterX;
        const rightToMouseY = svgY - rightEyeCenterY;
        
        const leftDistance = Math.sqrt(leftToMouseX * leftToMouseX + leftToMouseY * leftToMouseY);
        const rightDistance = Math.sqrt(rightToMouseX * rightToMouseX + rightToMouseY * rightToMouseY);
        
        if (leftDistance > 0 && rightDistance > 0) {
          const leftDirX = leftToMouseX / leftDistance;
          const leftDirY = leftToMouseY / leftDistance;
          const rightDirX = rightToMouseX / rightDistance;
          const rightDirY = rightToMouseY / rightDistance;
          
          const leftPupilX = leftDirX * Math.min(maxPupilRadius, leftDistance * 0.2);
          const leftPupilY = leftDirY * Math.min(maxPupilRadius, leftDistance * 0.2);
          const rightPupilX = rightDirX * Math.min(maxPupilRadius, rightDistance * 0.2);
          const rightPupilY = rightDirY * Math.min(maxPupilRadius, rightDistance * 0.2);
          
          gsap.to(leftPupil, {
            x: leftPupilX,
            y: leftPupilY,
            duration: 0.15,
            ease: "power1.out",
            transformOrigin: "center"
          });
          
          gsap.to(rightPupil, {
            x: rightPupilX,
            y: rightPupilY,
            duration: 0.15,
            ease: "power1.out",
            transformOrigin: "center"
          });
        }
      };

      window.addEventListener('mousemove', handleMouseMove);
      return () => window.removeEventListener('mousemove', handleMouseMove);
    }, 100);
  }, [svgContent]);

  const normalFilter = 'drop-shadow(0 0 25px rgba(0, 102, 255, 0.4)) drop-shadow(0 0 15px rgba(0, 212, 170, 0.3))';
  const hoverFilter = 'drop-shadow(0 0 45px rgba(0, 102, 255, 0.8)) drop-shadow(0 0 30px rgba(0, 212, 170, 0.7)) drop-shadow(0 0 50px rgba(0, 102, 255, 0.5))';

  return (
    <div 
      ref={containerRef} 
      className={`relative ${className}`} 
      style={{ width: size, height: size }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {svgContent && (
        <div 
          dangerouslySetInnerHTML={{ __html: svgContent }}
          className="w-full h-full transition-all duration-300"
          style={{ filter: isHovered ? hoverFilter : normalFilter }}
        />
      )}
    </div>
  );
};

export default RaccoonLogo;
