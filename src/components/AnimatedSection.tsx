
import React, { useEffect, useRef } from 'react';
import { cn } from "@/lib/utils";

interface AnimatedSectionProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
  delay?: number;
  direction?: 'up' | 'right' | 'left';
}

const AnimatedSection: React.FC<AnimatedSectionProps> = ({ 
  children, 
  className, 
  id,
  delay = 0,
  direction = 'up'
}) => {
  const sectionRef = useRef<HTMLElement>(null);
  
  useEffect(() => {
    const section = sectionRef.current;
    
    if (!section) return;
    
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          // Add a delay if specified
          setTimeout(() => {
            section.classList.add('revealed');
          }, delay);
          
          // Stop observing after animation
          observer.unobserve(section);
        }
      });
    }, {
      threshold: 0.1,
      rootMargin: '0px 0px -100px 0px'
    });
    
    observer.observe(section);
    
    return () => {
      if (section) observer.unobserve(section);
    };
  }, [delay]);
  
  // Determine animation class based on direction
  const getAnimationClass = () => {
    switch (direction) {
      case 'right':
        return 'translate-x-8';
      case 'left':
        return '-translate-x-8';
      case 'up':
      default:
        return 'translate-y-8';
    }
  };
  
  return (
    <section 
      ref={sectionRef}
      id={id}
      className={cn(
        "reveal-on-scroll opacity-0", 
        getAnimationClass(),
        className
      )}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </section>
  );
};

export default AnimatedSection;
