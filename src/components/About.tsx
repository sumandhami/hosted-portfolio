import React from 'react';
import { GraduationCap, Award, Users, Lightbulb } from 'lucide-react';

const About: React.FC = () => {
  const highlights = [
    {
      icon: GraduationCap,
      title: "Education",
      description: "4th Year BEI Student at Himalaya College of Engineering, Chyasal, Lalitpur"
    },
    {
      icon: Users,
      title: "Leadership",
      description: "Co-founder & Lead at AlpineRoot Technologies with 2 other innovative minds"
    },
    {
      icon: Award,
      title: "Certifications",
      description: "MERN Stack, AI/ML, Gen AI & LLM certified with 45+ days intensive training"
    },
    {
      icon: Lightbulb,
      title: "Innovation",
      description: "Currently developing Automated Robot-based Fungicide Sprayer for Agriculture"
    }
  ];

  return (
    <section id="about" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            About <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">Me</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            I'm a passionate technology enthusiast and entrepreneur, combining academic excellence
            with real-world innovation. My journey spans from full-stack development to cutting-edge
            AI solutions, always driven by the goal of creating meaningful impact.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {highlights.map((highlight, index) => (
            <div
              key={index}
              className="group bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-gray-700/50 rounded-xl p-6 hover:border-blue-500/50 transition-all duration-500 transform hover:scale-105 hover:rotate-2 hover:shadow-xl hover:shadow-blue-500/20 relative"
              style={{
                transformStyle: 'preserve-3d',
                perspective: '1000px'
              }}
            >
              {/* Glowing effect for about cards */}
              <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-blue-500/0 to-purple-500/0 group-hover:from-blue-500/15 group-hover:to-purple-500/15 transition-all duration-500 pointer-events-none"></div>

              <div className="flex flex-col items-center text-center space-y-4 relative z-10">
                <div className="p-3 bg-gradient-to-br from-blue-500 to-purple-500 rounded-lg group-hover:scale-110 transition-transform duration-300">
                  <highlight.icon size={24} className="text-white" />
                </div>
                <h3 className="text-lg font-semibold text-white">{highlight.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{highlight.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-gradient-to-r from-gray-800/30 to-gray-900/30 border border-gray-700/50 rounded-2xl p-8">
          <h3 className="text-2xl font-bold mb-6 text-center">My Journey</h3>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="space-y-4">
              <h4 className="text-xl font-semibold text-blue-400">Technical Expertise</h4>
              <p className="text-gray-300 leading-relaxed">
                From mastering the MERN stack to diving deep into AI/ML and Gen AI technologies,
                I've built a comprehensive skill set spanning web development, mobile applications,
                and intelligent systems. My expertise in Flutter, Django, and IoT with Arduino
                allows me to create end-to-end solutions.
              </p>
            </div>
            <div className="space-y-4">
              <h4 className="text-xl font-semibold text-purple-400">Innovation Focus</h4>
              <p className="text-gray-300 leading-relaxed">
                Currently working on revolutionary agricultural technology with automated fungicide
                spraying systems. My projects range from intelligent futsal player recommendation
                systems using cosine similarities to smart home automation solutions, always
                pushing the boundaries of what's possible.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;