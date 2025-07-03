import React from 'react';
import { Calendar, MapPin, ExternalLink } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      title: 'Senior Backend Developer',
      company: 'TechCorp Solutions',
      location: 'San Francisco, CA',
      duration: '2022 - Present',
      description: 'Lead backend development for microservices architecture serving 1M+ users. Implemented event-driven systems using AWS Lambda and SQS.',
      technologies: ['Python', 'Django', 'PostgreSQL', 'AWS', 'Docker', 'Redis'],
      achievements: [
        'Reduced API response time by 40% through database optimization',
        'Implemented CI/CD pipeline reducing deployment time by 60%',
        'Mentored 3 junior developers and conducted technical interviews'
      ]
    },
    {
      title: 'Backend Developer',
      company: 'DataFlow Inc',
      location: 'Austin, TX',
      duration: '2020 - 2022',
      description: 'Developed RESTful APIs and data processing pipelines for analytics platform. Managed cloud infrastructure and database optimization.',
      technologies: ['Node.js', 'Express', 'MongoDB', 'GCP', 'Kubernetes'],
      achievements: [
        'Built real-time data processing system handling 10k+ events/sec',
        'Designed and implemented authentication system with JWT',
        'Optimized database queries improving performance by 50%'
      ]
    },
    {
      title: 'Full Stack Developer',
      company: 'StartupXYZ',
      location: 'Remote',
      duration: '2019 - 2020',
      description: 'Developed full-stack applications with focus on backend API development and database design for early-stage startup.',
      technologies: ['JavaScript', 'React', 'Node.js', 'MySQL', 'Heroku'],
      achievements: [
        'Built MVP from scratch serving 5k+ users',
        'Implemented secure payment processing with Stripe',
        'Established code review process and testing standards'
      ]
    }
  ];

  return (
    <section id="experience" className="py-20 bg-slate-800">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-white mb-16">
          Experience
        </h2>
        
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-blue-400 hidden md:block"></div>
            
            {experiences.map((exp, index) => (
              <div key={index} className="relative mb-12 md:ml-16">
                {/* Timeline dot */}
                <div className="absolute -left-20 top-6 w-4 h-4 bg-blue-400 rounded-full border-4 border-slate-800 hidden md:block"></div>
                
                <div className="bg-slate-900 p-6 rounded-lg shadow-lg">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
                    <div>
                      <h3 className="text-2xl font-bold text-white mb-1">{exp.title}</h3>
                      <p className="text-blue-400 text-lg font-medium">{exp.company}</p>
                    </div>
                    <div className="text-gray-400 text-sm">
                      <div className="flex items-center mb-1">
                        <Calendar className="h-4 w-4 mr-1" />
                        {exp.duration}
                      </div>
                      <div className="flex items-center">
                        <MapPin className="h-4 w-4 mr-1" />
                        {exp.location}
                      </div>
                    </div>
                  </div>
                  
                  <p className="text-gray-300 mb-4">{exp.description}</p>
                  
                  <div className="mb-4">
                    <h4 className="text-white font-semibold mb-2">Key Achievements:</h4>
                    <ul className="text-gray-300 space-y-1">
                      {exp.achievements.map((achievement, i) => (
                        <li key={i} className="flex items-start">
                          <span className="text-blue-400 mr-2">•</span>
                          {achievement}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech, i) => (
                      <span key={i} className="bg-slate-700 text-gray-300 px-3 py-1 rounded-full text-sm">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;