import React from 'react';
import { Github, ExternalLink, Users, Award, Code, Brain } from 'lucide-react';

interface Project {
  title: string;
  description: string;
  technologies: string[];
  category: string;
  teamSize?: number;
  role: string;
  achievements: string[];
  githubUrl?: string;
  status: 'completed' | 'in-progress';
  icon: React.ReactNode;
}

const Projects: React.FC = () => {
  const projects: Project[] = [
    {
      title: 'Futsal Player Finder App',
      description: 'An intelligent mobile application that recommends futsal players based on cosine similarities with their match history and suggests optimal futsal locations using user geolocation data.',
      technologies: ['Flutter', 'Django', 'MySQL', 'Python', 'Machine Learning'],
      category: 'Mobile Application',
      teamSize: 4,
      role: 'Flutter Developer & ML Engineer',
      achievements: [
        'Implemented player recommendation algorithm using cosine similarities',
        'Developed location-based futsal arena suggestions',
        'Handled complete Flutter frontend and API integration',
        '3rd Year Minor Project - Successfully completed'
      ],
      githubUrl: 'https://github.com/Rejin96/futsalapp',
      status: 'completed',
      icon: <Code size={24} />
    },
    {
      title: 'Smart Home Automation System',
      description: 'IoT-based home automation solution exhibited at HEX (Exhibition of XYZ College of Engineering), featuring remote control of household appliances and smart monitoring.',
      technologies: ['ESP32', 'Arduino', 'WiFi Modules', 'IoT Sensors', 'Mobile App'],
      category: 'IoT Development',
      teamSize: 5,
      role: 'IoT Developer & System Integrator',
      achievements: [
        'Successfully exhibited at college engineering exhibition',
        'Implemented WiFi-based device control system',
        'Created intuitive mobile interface for home control',
        'Integrated multiple sensors for smart monitoring'
      ],
      githubUrl: '#',
      status: 'completed',
      icon: <Award size={24} />
    },
    {
      title: 'AI-Powered Agricultural Robot',
      description: 'Automated robot-based fungicide sprayer for potato plants using computer vision and machine learning for disease detection and targeted treatment.',
      technologies: ['PyTorch', 'CNN', 'Computer Vision', 'Python', 'Robotics', 'Arduino'],
      category: 'AI/ML & Robotics',
      teamSize: 4,
      role: 'AI/ML Lead & Computer Vision Developer',
      achievements: [
        'Completed potato plant disease classification using CNN',
        'Achieved high accuracy in plant disease detection',
        'Currently developing automated spraying mechanism',
        '4th Year Major Project - In Progress'
      ],
      githubUrl: '#',
      status: 'in-progress',
      icon: <Brain size={24} />
    },
    {
      title: 'LLM & RAG System Projects',
      description: 'Various projects involving Large Language Models and Retrieval-Augmented Generation systems, including custom diffusion models and intelligent document processing.',
      technologies: ['Python', 'LLM', 'RAG', 'Diffusion Models', 'NLP', 'Gen AI'],
      category: 'Artificial Intelligence',
      role: 'AI/ML Developer',
      achievements: [
        'Implemented custom RAG systems for document processing',
        'Developed diffusion models for content generation',
        'Worked with latest Gen AI technologies',
        'Multiple smaller projects showcasing LLM capabilities'
      ],
      githubUrl: '#',
      status: 'completed',
      icon: <Brain size={24} />
    }
  ];

  return (
    <section id="projects" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Featured <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">Projects</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            A showcase of innovative projects spanning mobile development, IoT solutions, AI/ML applications, and cutting-edge technology implementations
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
           <div 
  key={index}
  className="group bg-gradient-to-br from-gray-800/40 to-gray-900/40 border border-gray-700/50 rounded-2xl overflow-hidden hover:border-blue-500/50 transition-all duration-500 transform hover:scale-[1.02] hover:rotate-1 hover:shadow-2xl hover:shadow-blue-500/20 relative"
  style={{
    transformStyle: 'preserve-3d',
    perspective: '1000px'
  }}
            >
             {/* Glowing border effect */}
<div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-500/0 via-purple-500/0 to-pink-500/0 group-hover:from-blue-500/20 group-hover:via-purple-500/20 group-hover:to-pink-500/20 transition-all duration-500 pointer-events-none"></div>

{/* Inner glow effect */}
<div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-transparent via-transparent to-transparent group-hover:from-blue-500/5 group-hover:via-purple-500/5 group-hover:to-pink-500/5 transition-all duration-500 pointer-events-none"></div>
              
              <div className="p-8 space-y-6">
                <div className="flex items-start justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="p-2 bg-gradient-to-br from-blue-500 to-purple-500 rounded-lg group-hover:scale-110 group-hover:rotate-12 transition-all duration-300 group-hover:shadow-lg group-hover:shadow-blue-500/50">
                      {project.icon}
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white group-hover:text-blue-400 transition-colors duration-300">
                        {project.title}
                      </h3>
                      <div className="flex items-center space-x-4 text-sm text-gray-400 mt-1">
                        <span className="bg-blue-500/20 px-2 py-1 rounded">
                          {project.category}
                        </span>
                        <span className={`px-2 py-1 rounded ${
                          project.status === 'completed' 
                            ? 'bg-green-500/20 text-green-400' 
                            : 'bg-yellow-500/20 text-yellow-400'
                        }`}>
                          {project.status === 'completed' ? 'Completed' : 'In Progress'}
                        </span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex space-x-2">
                    {project.githubUrl && (
                      <a 
                        href={project.githubUrl}
                        className="p-2 bg-gray-700/50 hover:bg-gray-600/50 rounded-lg transition-colors duration-300 pointer-events-auto"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Github size={22} />
                      </a>
                    )}
                  </div>
                </div>

                <p className="text-gray-300 leading-relaxed">
                  {project.description}
                </p>

                <div className="space-y-4">
                  <div>
                    <h4 className="text-sm font-semibold text-blue-400 mb-2">Role & Team</h4>
                    <div className="flex items-center space-x-4 text-sm text-gray-300">
                      <span>{project.role}</span>
                      {project.teamSize && (
                        <>
                          <span>•</span>
                          <div className="flex items-center space-x-1">
                            <Users size={14} />
                            <span>Team of {project.teamSize}</span>
                          </div>
                        </>
                      )}
                    </div>
                  </div>

                  <div>
                    <h4 className="text-sm font-semibold text-blue-400 mb-2">Key Achievements</h4>
                    <ul className="space-y-1">
                      {project.achievements.map((achievement, idx) => (
                        <li key={idx} className="text-sm text-gray-300 flex items-start space-x-2">
                          <div className="w-1 h-1 bg-blue-400 rounded-full mt-2 flex-shrink-0"></div>
                          <span>{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="text-sm font-semibold text-blue-400 mb-2">Technologies Used</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, idx) => (
                        <span 
                          key={idx}
                          className="text-xs px-3 py-1 bg-gray-700/50 text-gray-300 rounded-full border border-gray-600/50"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-gray-800/30 to-gray-900/30 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-8">
            <h3 className="text-2xl font-bold mb-4">More Projects Coming Soon</h3>
            <p className="text-gray-300 mb-6">
              I'm constantly working on new and exciting projects. Stay tuned for updates on my latest innovations 
              in AI, web development, and IoT solutions.
            </p>
            <button 
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105"
            >
              Let's Collaborate
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;