import React, { useState, useEffect } from 'react';
import { Code, Database, Smartphone, Brain, Cpu, Globe } from 'lucide-react';

interface Skill {
  name: string;
  percentage: number;
  category: string;
  icon: React.ReactNode;
}

const skills: Skill[] = [
    // Web Development
    { name: 'React & TypeScript', percentage: 90, category: 'Web Development', icon: <Code size={20} /> },
    { name: 'Node.js & Express', percentage: 85, category: 'Web Development', icon: <Code size={20} /> },
    { name: 'MongoDB', percentage: 80, category: 'Web Development', icon: <Database size={20} /> },

    // Mobile & Backend
    { name: 'Flutter', percentage: 85, category: 'Mobile Development', icon: <Smartphone size={20} /> },
    { name: 'Django', percentage: 80, category: 'Backend', icon: <Globe size={20} /> },
    { name: 'MySQL', percentage: 75, category: 'Database', icon: <Database size={20} /> },

    // AI/ML & Advanced
    { name: 'AI/ML & Gen AI', percentage: 85, category: 'Artificial Intelligence', icon: <Brain size={20} /> },
    { name: 'PyTorch & CNN', percentage: 80, category: 'Machine Learning', icon: <Brain size={20} /> },
    { name: 'LLM & RAG Systems', percentage: 75, category: 'AI Systems', icon: <Brain size={20} /> },

    // IoT & Hardware
    { name: 'Arduino & ESP32', percentage: 70, category: 'IoT Development', icon: <Cpu size={20} /> },
    { name: 'IoT Integration', percentage: 75, category: 'Hardware', icon: <Cpu size={20} /> },
    { name: 'Home Automation', percentage: 80, category: 'IoT Systems', icon: <Cpu size={20} /> }
  ];



const Skills: React.FC = () => {
  const [animatedPercentages, setAnimatedPercentages] = useState<{ [key: string]: number }>({});
  const [isVisible, setIsVisible] = useState(false);

  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    const skillsSection = document.getElementById('skills');
    if (skillsSection) {
      observer.observe(skillsSection);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (isVisible) {
      skills.forEach((skill, index) => {
        setTimeout(() => {
          let current = 0;
          const step = () => {
            current += 2; // increment by 2 for smoother animation
            setAnimatedPercentages(prev => ({
              ...prev,
              [skill.name]: Math.min(current, skill.percentage)
            }));
            if (current < skill.percentage) {
              requestAnimationFrame(step);
            }
          };
          step();
        }, index * 100);
      });
    }
  }, [isVisible, skills]);

  const categories = [...new Set(skills.map(skill => skill.category))];

  return (
    <section id="skills" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Technical <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">Skills</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            A comprehensive skill set built through intensive training, hands-on projects, and continuous learning
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {categories.map((category, categoryIndex) => (
            <div
              key={category}
              className="group bg-gradient-to-br from-gray-800/30 to-gray-900/30 border border-gray-700/50 rounded-2xl p-6 hover:border-blue-500/30 transition-all duration-500 transform hover:scale-[1.02] hover:-rotate-1 hover:shadow-xl hover:shadow-blue-500/10 relative"
              style={{
                transformStyle: 'preserve-3d',
                perspective: '1000px'
              }}
            >
              {/* Subtle glow effect for skills cards */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-500/0 to-purple-500/0 group-hover:from-blue-500/10 group-hover:to-purple-500/10 transition-all duration-500 blur-sm"></div>

              <h3 className="text-xl font-semibold mb-6 text-center text-blue-400">
                {category}
              </h3>
              <div className="space-y-6">
                {skills
                  .filter(skill => skill.category === category)
                  .map((skill, index) => (
                    <div key={skill.name} className="space-y-2">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-2">
                          <div className="text-blue-400">
                            {skill.icon}
                          </div>
                          <span className="font-medium text-white">{skill.name}</span>
                        </div>
                        <span className="text-gray-300 font-semibold">
                          {Math.round(animatedPercentages[skill.name] || 0)}%
                        </span>
                      </div>
                      <div className="w-full bg-gray-700 rounded-full h-3 overflow-hidden">
                        <div
                          className="h-full bg-gradient-to-r from-blue-500 to-purple-500 rounded-full transition-all duration-1000 ease-out relative"
                          style={{ width: `${animatedPercentages[skill.name] || 0}%` }}
                        >
                          <div className="absolute inset-0 bg-white/20 animate-pulse"></div>
                        </div>
                      </div>
                    </div>
                  ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-gray-800/30 to-gray-900/30 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-8">
            <h3 className="text-2xl font-bold mb-4">Certifications & Training</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="space-y-2">
                <div className="text-blue-400 font-semibold">MERN Stack Development</div>
                <div className="text-gray-400">45 Days Intensive Training</div>
              </div>
              <div className="space-y-2">
                <div className="text-purple-400 font-semibold">AI/ML & Gen AI</div>
                <div className="text-gray-400">45 Days Certified Training</div>
              </div>
              <div className="space-y-2">
                <div className="text-pink-400 font-semibold">Arduino & IoT</div>
                <div className="text-gray-400">Hardware Development Training</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;