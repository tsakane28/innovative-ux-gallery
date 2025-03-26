
import React from 'react';
import AnimatedSection from './AnimatedSection';
import { Briefcase, GraduationCap } from 'lucide-react';

const ResumeSection: React.FC = () => {
  const educationItems = [
    {
      title: 'Master of Fine Arts & Graphic Design',
      years: '2015 - 2016',
      institution: 'Rochester Institute of Technology, Rochester, NY',
      description: 'Qui deserunt veniam. Et sed aliquam labore tempore sed quisquam iusto autem sit. Ea vero voluptatum qui ut dignissimos deleniti nerada porti sand markend'
    },
    {
      title: 'Bachelor of Fine Arts & Graphic Design',
      years: '2010 - 2014',
      institution: 'Rochester Institute of Technology, Rochester, NY',
      description: 'Quia nobis sequi est occaecati aut. Repudiandae et iusto quae reiciendis et quis Eius vel ratione eius unde vitae rerum voluptates asperiores voluptatem Earum molestiae consequatur neque etlon sader mart dila'
    }
  ];

  const experienceItems = [
    {
      title: 'Senior Graphic Design Specialist',
      years: '2019 - Present',
      company: 'Experion, New York, NY',
      description: [
        'Lead in the design, development, and implementation of the graphic, layout, and production communication materials',
        'Delegate tasks to the 7 members of the design team and provide counsel on all aspects of the project',
        'Supervise the assessment of all graphic materials in order to ensure quality and accuracy of the design',
        'Oversee the efficient use of production project budgets ranging from $2,000 - $25,000'
      ]
    },
    {
      title: 'Graphic Design Specialist',
      years: '2017 - 2018',
      company: 'Stepping Stone Advertising, New York, NY',
      description: [
        'Developed numerous marketing programs (logos, brochures, infographics, presentations, and advertisements)',
        'Managed up to 5 projects or tasks at a given time while under pressure',
        'Recommended and consulted with clients on the most appropriate graphic design',
        'Created 4+ design presentations and proposals a month for clients and account managers'
      ]
    }
  ];

  const ResumeItem = ({ 
    title, 
    years, 
    institution, 
    company, 
    description,
    delay = 0
  }: { 
    title: string; 
    years: string; 
    institution?: string; 
    company?: string; 
    description: string | string[];
    delay?: number;
  }) => (
    <div 
      className="glass-panel p-6 mb-6 reveal-on-scroll" 
      style={{ transitionDelay: `${delay}ms` }}
    >
      <h4 className="text-xl font-display font-bold">{title}</h4>
      <p className="text-primary font-medium my-1">{years}</p>
      <p className="text-muted-foreground mb-3">{institution || company}</p>
      
      {Array.isArray(description) ? (
        <ul className="list-disc pl-5 space-y-2">
          {description.map((item, i) => (
            <li key={i} className="text-muted-foreground">{item}</li>
          ))}
        </ul>
      ) : (
        <p className="text-muted-foreground">{description}</p>
      )}
    </div>
  );

  return (
    <AnimatedSection id="resume">
      <div className="container mx-auto">
        <h2 className="section-heading">Resume</h2>
        <p className="section-subheading">
          Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.
        </p>
        
        <div className="mb-12 reveal-on-scroll">
          <div className="flex items-center mb-6">
            <div className="p-3 bg-primary/10 rounded-full mr-4">
              <GraduationCap className="text-primary h-6 w-6" />
            </div>
            <h3 className="text-2xl font-display font-bold">Summary</h3>
          </div>
          
          <div className="glass-panel p-6">
            <h4 className="text-xl font-display font-bold">Alex Smith</h4>
            <p className="text-muted-foreground my-3">
              Innovative and deadline-driven Graphic Designer with 3+ years of experience designing and developing user-centered digital/print marketing material from initial concept to final, polished deliverable.
            </p>
            <ul className="space-y-2 text-muted-foreground">
              <li className="flex">
                <span className="text-primary mr-2">▹</span>
                Portland par 127, Orlando, FL
              </li>
              <li className="flex">
                <span className="text-primary mr-2">▹</span>
                (123) 456-7891
              </li>
              <li className="flex">
                <span className="text-primary mr-2">▹</span>
                alice.barkley@example.com
              </li>
            </ul>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Education */}
          <div>
            <div className="flex items-center mb-6 reveal-on-scroll">
              <div className="p-3 bg-primary/10 rounded-full mr-4">
                <GraduationCap className="text-primary h-6 w-6" />
              </div>
              <h3 className="text-2xl font-display font-bold">Education</h3>
            </div>
            
            {educationItems.map((item, index) => (
              <ResumeItem 
                key={index}
                title={item.title} 
                years={item.years} 
                institution={item.institution} 
                description={item.description}
                delay={index * 200}
              />
            ))}
          </div>
          
          {/* Professional Experience */}
          <div>
            <div className="flex items-center mb-6 reveal-on-scroll">
              <div className="p-3 bg-primary/10 rounded-full mr-4">
                <Briefcase className="text-primary h-6 w-6" />
              </div>
              <h3 className="text-2xl font-display font-bold">Professional Experience</h3>
            </div>
            
            {experienceItems.map((item, index) => (
              <ResumeItem 
                key={index}
                title={item.title} 
                years={item.years} 
                company={item.company} 
                description={item.description}
                delay={index * 200}
              />
            ))}
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
};

export default ResumeSection;
