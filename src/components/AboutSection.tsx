
import React from 'react';
import AnimatedSection from './AnimatedSection';

const AboutSection: React.FC = () => {
  const personalInfo = [
    { label: 'Birthday', value: '11 June 2000' },
    { label: 'Website', value: 'www.tmws.co.zw' },
    { label: 'Phone', value: '+263 776 555 485' },
    { label: 'City', value: 'Harare, Harare' },
    { label: 'Age', value: '25' },
    { label: 'Degree', value: 'Degree' },
    { label: 'Email', value: 'info@tmws.co.zw' },
    { label: 'Freelance', value: 'Available' },
  ];

  return (
    <AnimatedSection id="about" className="bg-secondary">
      <div className="container mx-auto">
        <h2 className="section-heading">About</h2>
        <p className="section-subheading">
       A dedicated software engineer specializing in scalable, user-centric web applications. Proficient in Flutter, Svelte, Laravel, React, Angular, and Vue.js, I apply agile methodologies and version control (Git) to deliver efficient, high-quality solutions. Passionate about problem-solving, performance optimization, and seamless digital experiences, I’m always eager to tackle new challenges and push the boundaries of software development. Let's connect! </p>
        
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
              Software Developer & Web Developer.
            </h3>
            
            <p className="text-muted-foreground">
            Explore my portfolio to see how I transform ideas into reality through clean code, functional design, and seamless user interactions. Scroll down to learn more about my skills, and the projects I've worked on.
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
            
            {/* <p className="text-muted-foreground">
              Officiis eligendi itaque labore et dolorum mollitia officiis optio vero. Quisquam sunt adipisci omnis et ut. Nulla accusantium dolor incidunt officia tempore. Et eius omnis. Cupiditate ut dicta maxime officiis quidem quia. Sed et consectetur qui quia repellendus itaque neque.
            </p> */}
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
};

export default AboutSection;
