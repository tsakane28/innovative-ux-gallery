
import React from 'react';
import AnimatedSection from './AnimatedSection';
import { Laptop, Palette, Globe, Layout, Smartphone, FileCode } from 'lucide-react';

const ServicesSection: React.FC = () => {
  const services = [
    {
      icon: <Layout />,
      title: 'UI/UX Design',
      description: 'Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident'
    },
    {
      icon: <Globe />,
      title: 'Web Development',
      description: 'Minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat'
    },
    {
      icon: <Smartphone />,
      title: 'Mobile App Design',
      description: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur'
    },
    {
      icon: <FileCode />,
      title: 'Frontend Development',
      description: 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum'
    },
    {
      icon: <Palette />,
      title: 'Brand Identity',
      description: 'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum'
    },
    {
      icon: <Laptop />,
      title: 'Product Design',
      description: 'Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis'
    }
  ];
  
  return (
    <AnimatedSection id="services">
      <div className="container mx-auto">
        <h2 className="section-heading">Services</h2>
        <p className="section-subheading">
          Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="glass-panel p-6 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 reveal-on-scroll"
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="flex flex-col items-center text-center">
                <div className="p-4 bg-primary/10 text-primary rounded-full mb-4">
                  {React.cloneElement(service.icon as React.ReactElement, { className: "h-6 w-6" })}
                </div>
                <h3 className="text-xl font-display font-bold mb-3">{service.title}</h3>
                <p className="text-muted-foreground">{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
};

export default ServicesSection;
