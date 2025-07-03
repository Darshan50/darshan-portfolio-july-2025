import React from 'react';
import { Github, ExternalLink, Server, Database, Cloud } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: 'E-commerce API Platform',
      description: 'Scalable REST API for e-commerce platform with microservices architecture, payment processing, and real-time inventory management.',
      image: 'https://images.pexels.com/photos/270348/pexels-photo-270348.jpeg?auto=compress&cs=tinysrgb&w=600',
      technologies: ['Node.js', 'Express', 'PostgreSQL', 'Redis', 'AWS', 'Docker'],
      features: [
        'RESTful API with comprehensive documentation',
        'JWT authentication and authorization',
        'Real-time inventory tracking',
        'Payment gateway integration',
        'Microservices architecture'
      ],
      githubUrl: '#',
      liveUrl: '#',
      category: 'Backend API'
    },
    {
      title: 'Real-time Chat System',
      description: 'High-performance chat application backend with WebSocket support, message persistence, and horizontal scaling capabilities.',
      image: 'https://images.pexels.com/photos/5926382/pexels-photo-5926382.jpeg?auto=compress&cs=tinysrgb&w=600',
      technologies: ['Python', 'FastAPI', 'WebSocket', 'MongoDB', 'Celery', 'Redis'],
      features: [
        'Real-time messaging with WebSocket',
        'Message persistence and history',
        'User presence indicators',
        'File sharing capabilities',
        'Horizontal scaling with Redis'
      ],
      githubUrl: '#',
      liveUrl: '#',
      category: 'Real-time System'
    },
    {
      title: 'Data Processing Pipeline',
      description: 'ETL pipeline for processing large datasets with automated data validation, transformation, and reporting capabilities.',
      image: 'https://images.pexels.com/photos/590020/pexels-photo-590020.jpeg?auto=compress&cs=tinysrgb&w=600',
      technologies: ['Python', 'Apache Airflow', 'Pandas', 'PostgreSQL', 'AWS S3', 'Docker'],
      features: [
        'Automated data ingestion',
        'Data validation and cleaning',
        'Custom transformation logic',
        'Scheduled processing jobs',
        'Monitoring and alerting'
      ],
      githubUrl: '#',
      liveUrl: '#',
      category: 'Data Pipeline'
    },
    {
      title: 'Authentication Service',
      description: 'Centralized authentication and authorization service with multi-tenant support, OAuth integration, and security features.',
      image: 'https://images.pexels.com/photos/60504/security-protection-anti-virus-software-60504.jpeg?auto=compress&cs=tinysrgb&w=600',
      technologies: ['Go', 'JWT', 'PostgreSQL', 'OAuth2', 'Docker', 'Kubernetes'],
      features: [
        'Multi-tenant architecture',
        'OAuth2 and JWT tokens',
        'Role-based access control',
        'Password security policies',
        'Audit logging'
      ],
      githubUrl: '#',
      liveUrl: '#',
      category: 'Security'
    }
  ];

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'Backend API':
        return <Server className="h-5 w-5" />;
      case 'Real-time System':
        return <Cloud className="h-5 w-5" />;
      case 'Data Pipeline':
        return <Database className="h-5 w-5" />;
      case 'Security':
        return <Server className="h-5 w-5" />;
      default:
        return <Server className="h-5 w-5" />;
    }
  };

  return (
    <section id="projects" className="py-20 bg-slate-900">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-white mb-16">
          Featured Projects
        </h2>
        
        <div className="grid lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-slate-800 rounded-lg overflow-hidden hover:bg-slate-700 transition-colors group">
              <div className="relative overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm flex items-center space-x-1">
                    {getCategoryIcon(project.category)}
                    <span>{project.category}</span>
                  </span>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-2xl font-bold text-white mb-3">{project.title}</h3>
                <p className="text-gray-400 mb-4">{project.description}</p>
                
                <div className="mb-4">
                  <h4 className="text-white font-semibold mb-2">Key Features:</h4>
                  <ul className="text-gray-300 space-y-1">
                    {project.features.map((feature, i) => (
                      <li key={i} className="flex items-start">
                        <span className="text-blue-400 mr-2">•</span>
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, i) => (
                    <span key={i} className="bg-slate-700 text-gray-300 px-2 py-1 rounded text-sm">
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex space-x-4">
                  <a
                    href={project.githubUrl}
                    className="flex items-center space-x-2 text-gray-400 hover:text-white transition-colors"
                  >
                    <Github className="h-5 w-5" />
                    <span>Code</span>
                  </a>
                  <a
                    href={project.liveUrl}
                    className="flex items-center space-x-2 text-gray-400 hover:text-blue-400 transition-colors"
                  >
                    <ExternalLink className="h-5 w-5" />
                    <span>Live Demo</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;