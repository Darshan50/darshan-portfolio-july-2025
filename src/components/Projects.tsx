import React from 'react';

const Projects = () => {
  const projects = [
    {
      title: 'AI Assessment Platform',
      description: `AI based Assessment Platform for students to take online exams and get results instantly for exams like IELTS, TOFEL.`,
      image: '/ai_assessment.jpg?auto=compress&cs=tinysrgb&w=600',
      technologies: ['Python', 'OpenAI', 'MongoDB', 'FastAPI', 'Docker']
    },
    {
      title: 'RAG Chatbot',
      description: `A Chatbot to help in customer support for company FAQs, policies, and support documents.

Developed a Retrieval-Augmented Generation (RAG) chatbot leveraging OpenAI LLM to provide accurate and contextually relevant responses by integrating external knowledge sources.`,
      image: '/rag-chatbot.png?auto=compress&cs=tinysrgb&w=600',
      technologies: ['Python', 'LangChain', 'OpenAPI', 'AWS']
    },
    {
      title: 'Sentiment Analysis',
      description: `An AI-driven tool to that delivers sentiment analysis of product reviews.

Built a sentiment analysis model to classify text as positive, negative, or neutral.`,
      image: '/sentiment-analysis.png?auto=compress&cs=tinysrgb&w=600',
      technologies: ['Python', 'NLTK','Scikit-Learn']
    },
    {
      title: 'Automated VAPT Scanner',
      description: `Made Automated VAPT Scanner web app which scans for some predefined vulnerabilities Vulnerabilities included: SQLi, XSS etc in website link provided with predefined dataset for parameters to check on particular vulnerability and pen testing.

As a Full Stack Developer, I worked with Python, Django and SQLite3 to develop Automated VAPT Scanner App.

In this project, there were some challanging tasks like firstly manually check vulnerabilities,crawling whole website,scanning each page and generating report.`,
      image: '/scanner.png?auto=compress&cs=tinysrgb&w=600',
      technologies: ['Python', 'Django', 'SQLite3', 'HTML', 'CSS', 'JavaScript']
    }
  ];

  return (
    <section id="projects" className="py-20 bg-slate-900">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-white mb-16">
          Project Highlights
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
              </div>
              
              <div className="p-6">
                <h3 className="text-2xl font-bold text-white mb-4">{project.title}</h3>
                <div className="text-gray-400 mb-6 leading-relaxed">
                  {project.description.split('\n').map((paragraph, i) => (
                    <p key={i} className={paragraph.trim() ? 'mb-3' : 'mb-2'}>
                      {paragraph.trim()}
                    </p>
                  ))}
                </div>
                
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, i) => (
                    <span key={i} className="bg-slate-700 text-gray-300 px-3 py-1 rounded text-sm">
                      {tech}
                    </span>
                  ))}
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