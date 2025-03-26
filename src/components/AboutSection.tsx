
import React from 'react';
import AnimatedSection from './AnimatedSection';

const AboutSection: React.FC = () => {
  const personalInfo = [
    { label: 'Birthday', value: '1 May 1995' },
    { label: 'Website', value: 'www.example.com' },
    { label: 'Phone', value: '+123 456 7890' },
    { label: 'City', value: 'New York, USA' },
    { label: 'Age', value: '30' },
    { label: 'Degree', value: 'Master' },
    { label: 'Email', value: 'email@example.com' },
    { label: 'Freelance', value: 'Available' },
  ];

  return (
    <AnimatedSection id="about" className="bg-secondary">
      <div className="container mx-auto">
        <h2 className="section-heading">About</h2>
        <p className="section-subheading">
          Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.
        </p>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* About image */}
          <div className="reveal-on-scroll">
            <div className="relative">
              <div className="absolute -inset-4 bg-primary/5 rounded-2xl -z-10"></div>
              <img 
                src="https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?auto=format&fit=crop&w=1200&h=800&q=80" 
                alt="Alex Smith Designer" 
                className="rounded-xl shadow-lg w-full object-cover"
              />
            </div>
          </div>
          
          {/* About content */}
          <div className="space-y-6 reveal-on-scroll" style={{ transitionDelay: '200ms' }}>
            <h3 className="text-2xl font-display font-bold">
              UI/UX Designer & Web Developer.
            </h3>
            
            <p className="text-muted-foreground">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-y-4">
              {personalInfo.map((item, index) => (
                <div key={index} className="flex">
                  <span className="text-primary mr-2">▹</span>
                  <span className="font-medium">{item.label}:</span>
                  <span className="ml-2 text-muted-foreground">{item.value}</span>
                </div>
              ))}
            </div>
            
            <p className="text-muted-foreground">
              Officiis eligendi itaque labore et dolorum mollitia officiis optio vero. Quisquam sunt adipisci omnis et ut. Nulla accusantium dolor incidunt officia tempore. Et eius omnis. Cupiditate ut dicta maxime officiis quidem quia. Sed et consectetur qui quia repellendus itaque neque.
            </p>
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
};

export default AboutSection;
