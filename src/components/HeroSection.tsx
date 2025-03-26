
import React from 'react';
import { ArrowDown } from 'lucide-react';

const HeroSection: React.FC = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-16 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-primary/10 blur-3xl animate-float"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full bg-primary/5 blur-3xl animate-float" style={{ animationDelay: '1s' }}></div>
      </div>
      
      <div className="container mx-auto px-6 md:px-12">
        <div className="text-center">
          <h1 className="text-5xl md:text-7xl font-display font-bold mb-6 animate-fade-in">
            Welcome to My <span className="text-primary">portfolio</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto mb-12 animate-fade-in" style={{ animationDelay: '0.3s' }}>
          Hi, I'm Tsakane Shiri, a passionate software developer dedicated to crafting intuitive and high-performing digital experiences. With a blend of creativity and technical expertise, I specialize in building modern, efficient, and visually striking applications.
          </p>
          
          <div className="animate-fade-in" style={{ animationDelay: '0.6s' }}>
            <a 
              href="#about" 
              className="inline-flex items-center justify-center px-8 py-3 bg-primary text-white rounded-full font-medium transition-all duration-300 hover:bg-primary/90 hover:shadow-lg hover:-translate-y-1"
            >
              Discover my work
            </a>
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-pulse-soft">
        <a href="#about" className="flex flex-col items-center text-muted-foreground hover:text-primary transition-colors">
          <span className="text-sm mb-2">Scroll down</span>
          <ArrowDown size={20} />
        </a>
      </div>
    </section>
  );
};

export default HeroSection;
