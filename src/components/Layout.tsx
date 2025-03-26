
import React from 'react';
import Navigation from './Navigation';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  // Effect for intersection observer to animate sections
  React.useEffect(() => {
    // Initialize the intersection observer
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        // Add 'revealed' class when element is visible
        if (entry.isIntersecting) {
          entry.target.classList.add('revealed');
          // Stop observing after animation is triggered
          observer.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.1,
      rootMargin: '0px 0px -100px 0px'
    });
    
    // Target all elements with the reveal-on-scroll class
    const elements = document.querySelectorAll('.reveal-on-scroll');
    
    elements.forEach(element => {
      observer.observe(element);
    });
    
    return () => {
      elements.forEach(element => {
        observer.unobserve(element);
      });
    };
  }, []);
  
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />
      <main>
        {children}
      </main>
      <footer className="py-8 px-6 bg-secondary">
        <div className="container mx-auto text-center text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} TMWS. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
