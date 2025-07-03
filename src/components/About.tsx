import React from 'react';
import { Server, Database, Cloud, Code } from 'lucide-react';

const About = () => {
  const skills = [
    {
      category: 'Languages',
      items: ['Python', 'JavaScript', 'TypeScript', 'Java', 'Go', 'SQL']
    },
    {
      category: 'Frameworks',
      items: ['Node.js', 'Express', 'Django', 'FastAPI', 'Spring Boot']
    },
    {
      category: 'Databases',
      items: ['PostgreSQL', 'MongoDB', 'Redis', 'MySQL', 'Elasticsearch']
    },
    {
      category: 'Tools & Cloud',
      items: ['Docker', 'AWS', 'Kubernetes', 'Git', 'Linux', 'Nginx']
    }
  ];

  const highlights = [
    {
      icon: <Server className="h-8 w-8 text-blue-400" />,
      title: 'API Development',
      description: 'RESTful and GraphQL APIs with proper authentication and documentation'
    },
    {
      icon: <Database className="h-8 w-8 text-green-400" />,
      title: 'Database Design',
      description: 'Efficient database schemas and query optimization for performance'
    },
    {
      icon: <Cloud className="h-8 w-8 text-purple-400" />,
      title: 'Cloud Architecture',
      description: 'Scalable cloud infrastructure and microservices architecture'
    },
    {
      icon: <Code className="h-8 w-8 text-orange-400" />,
      title: 'Code Quality',
      description: 'Clean, maintainable code with comprehensive testing and documentation'
    }
  ];

  return (
    <section id="about" className="py-20 bg-slate-900">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-white mb-16">
          About Me
        </h2>
        
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-lg text-gray-300 mb-6">
              I'm a passionate backend developer with 5+ years of experience building 
              robust, scalable systems that power modern applications. I specialize in 
              creating efficient APIs, designing database architectures, and implementing 
              cloud-native solutions.
            </p>
            <p className="text-lg text-gray-300 mb-8">
              My approach focuses on writing clean, maintainable code while ensuring 
              optimal performance and security. I enjoy solving complex problems and 
              staying updated with the latest technologies in the backend ecosystem.
            </p>
            
            <div className="grid grid-cols-2 gap-6">
              {skills.map((skill, index) => (
                <div key={index} className="bg-slate-800 p-4 rounded-lg">
                  <h4 className="font-semibold text-white mb-2">{skill.category}</h4>
                  <div className="flex flex-wrap gap-1">
                    {skill.items.map((item, i) => (
                      <span key={i} className="text-sm text-gray-400 bg-slate-700 px-2 py-1 rounded">
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {highlights.map((highlight, index) => (
              <div key={index} className="bg-slate-800 p-6 rounded-lg hover:bg-slate-700 transition-colors">
                <div className="mb-4">{highlight.icon}</div>
                <h3 className="text-xl font-semibold text-white mb-2">{highlight.title}</h3>
                <p className="text-gray-400">{highlight.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;