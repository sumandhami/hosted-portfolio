import React from 'react';
import { ChevronDown, MapPin, Building } from 'lucide-react';
import sumanPhoto from '../assets/suman.jpeg';

const Hero: React.FC = () => {
  const scrollToNext = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 text-center lg:text-left">
  <div className="space-y-4">
    <h1 className="text-4xl md:text-6xl font-bold">
      <span className="block text-gray-300 mb-2">Hey, it's me</span>
      <span className="block bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent text-5xl md:text-7xl">
        Suman Dhami
      </span>
    </h1>
    <div className="space-y-2 mt-4">
      <p className="text-xl md:text-2xl text-blue-400 font-semibold">
        Co-founder & Lead
      </p>
      <p className="text-lg text-gray-300">
        Digital Presence & Operations
      </p>
      <div className="flex items-center justify-center lg:justify-start space-x-2 text-gray-400">
        <Building size={16} />
        <span>AlpineRoot Technologies Pvt.Ltd</span>
      </div>
      <div className="flex items-center justify-center lg:justify-start space-x-2 text-gray-400">
        <MapPin size={16} />
        <span>Kathmandu, Nepal</span>
      </div>
    </div>
  </div>
            
            <p className="text-lg md:text-xl text-gray-300 max-w-2xl">
              4th Year BEI Student at Himalaya College of Engineering, passionate about 
              <span className="text-blue-400"> AI/ML</span>,
              <span className="text-purple-400"> Full-Stack Development</span>, and
              <span className="text-pink-400"> IoT Solutions</span>. 
              Building innovative technologies for a better tomorrow.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <button 
                onClick={() => scrollToNext()}
                className="px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105"
              >
                Explore My Work
              </button>
              <button 
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="px-8 py-3 border border-gray-600 hover:border-gray-400 rounded-lg font-semibold transition-all duration-300 hover:bg-gray-800"
              >
                Get In Touch
              </button>
            </div>
          </div>
          
<div className="flex justify-center lg:justify-end">
  <div className="relative">
    <div className="w-80 h-80 bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 p-1 animate-pulse">
      <div className="w-full h-full bg-gray-900 flex items-center justify-center">
        <img
          src={sumanPhoto}
          alt="Suman Dhami"
          className="w-72 h-72 object-cover"
        />
      </div>
    </div>
    <div className="absolute -z-10 top-4 left-4 w-80 h-80 bg-gradient-to-br from-blue-500/20 to-purple-500/20 blur-xl"></div>
  </div>
</div>
        </div>
      </div>
      
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <button onClick={scrollToNext} className="text-gray-400 hover:text-white transition-colors duration-300">
          <ChevronDown size={32} />
        </button>
      </div>
    </section>
  );
};

export default Hero;