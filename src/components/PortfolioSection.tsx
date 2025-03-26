
import React, { useState } from 'react';
import AnimatedSection from './AnimatedSection';
import { cn } from "@/lib/utils";

const PortfolioSection: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  
  const filters = [
    { id: 'all', name: 'All' },
    { id: 'app', name: 'App' },
    { id: 'web', name: 'Web' },
    { id: 'design', name: 'Design' },
    { id: 'branding', name: 'Branding' },
  ];
  
  const portfolioItems = [
    {
      id: 1,
      title: 'App 1',
      category: 'app',
      description: 'Lorem ipsum, dolor sit amet consectetur',
      image: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&w=600&h=400&q=80'
    },
    {
      id: 2,
      title: 'Web 3',
      category: 'web',
      description: 'Lorem ipsum, dolor sit amet consectetur',
      image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=600&h=400&q=80'
    },
    {
      id: 3,
      title: 'App 2',
      category: 'app',
      description: 'Lorem ipsum, dolor sit amet consectetur',
      image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=600&h=400&q=80'
    },
    {
      id: 4,
      title: 'Design 2',
      category: 'design',
      description: 'Lorem ipsum, dolor sit amet consectetur',
      image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=600&h=400&q=80'
    },
    {
      id: 5,
      title: 'Branding',
      category: 'branding',
      description: 'Lorem ipsum, dolor sit amet consectetur',
      image: 'https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?auto=format&fit=crop&w=600&h=400&q=80'
    },
    {
      id: 6,
      title: 'Web 2',
      category: 'web',
      description: 'Lorem ipsum, dolor sit amet consectetur',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=600&h=400&q=80'
    },
  ];
  
  const filteredItems = activeFilter === 'all' 
    ? portfolioItems 
    : portfolioItems.filter(item => item.category === activeFilter);

  return (
    <AnimatedSection id="portfolio" className="bg-secondary">
      <div className="container mx-auto">
        <h2 className="section-heading">Portfolio</h2>
        <p className="section-subheading">
          Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.
        </p>
        
        {/* Portfolio filters */}
        <div className="flex flex-wrap justify-center gap-2 mb-12 reveal-on-scroll">
          {filters.map((filter) => (
            <button
              key={filter.id}
              onClick={() => setActiveFilter(filter.id)}
              className={cn(
                "px-5 py-2 rounded-full text-sm font-medium transition-all duration-300",
                activeFilter === filter.id
                  ? "bg-primary text-white shadow-md"
                  : "bg-white text-muted-foreground hover:bg-primary/10 hover:text-primary"
              )}
            >
              {filter.name}
            </button>
          ))}
        </div>
        
        {/* Portfolio grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map((item, index) => (
            <div 
              key={item.id} 
              className="reveal-on-scroll" 
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="group relative overflow-hidden rounded-xl shadow-lg bg-white">
                <img 
                  src={item.image} 
                  alt={item.title} 
                  className="w-full h-64 object-cover transition-all duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 flex flex-col justify-end p-6">
                  <h3 className="text-white text-xl font-bold mb-1 transform translate-y-8 group-hover:translate-y-0 transition-transform duration-300">{item.title}</h3>
                  <p className="text-white/80 transform translate-y-8 group-hover:translate-y-0 transition-transform duration-300 delay-75">{item.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
};

export default PortfolioSection;
