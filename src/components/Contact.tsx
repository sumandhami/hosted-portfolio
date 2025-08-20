import React, { useState, useRef } from 'react';
import emailjs from 'emailjs-com';
import { Mail, Phone, Linkedin, Github, MapPin, Send, CheckCircle } from 'lucide-react';

const SERVICE_ID = 'service_ld468cn';
const TEMPLATE_ID = 'template_tf290q4';
const USER_ID = '_snGn28JBBBJynQke';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    if (formRef.current) {
      emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, formRef.current, USER_ID)
        .then(() => {
          setIsSubmitting(false);
          setIsSubmitted(true);
          setFormData({ name: '', email: '', subject: '', message: '' });
          setTimeout(() => setIsSubmitted(false), 5000);
        }, () => {
          setIsSubmitting(false);
          alert('Failed to send message. Please try again.');
        });
    }
  };

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'suman.dhami@rootalpine.com',
      link: 'mailto:suman.dhami@rootalpine.com'
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '+977 9765830543',
      link: 'tel:+9779765830543'
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'Kathmandu, Nepal',
      link: '#'
    }
  ];

  const socialLinks = [
    {
      icon: Linkedin,
      label: 'LinkedIn',
      url: 'https://www.linkedin.com/in/suman-dhami-867458365/',
      color: 'hover:text-blue-400'
    },
    {
      icon: Github,
      label: 'GitHub',
      url: 'https://github.com/sumandhami',
      color: 'hover:text-gray-300'
    }
  ];

  return (
    <section id="contact" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Get In <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">Touch</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Ready to collaborate on innovative projects or discuss opportunities? 
            Let's connect and build something amazing together!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-gray-900 border border-gray-700 rounded-2xl p-8">
            <h3 className="text-2xl font-bold mb-6 text-center">Send me a message</h3>
            {isSubmitted ? (
              <div className="text-center py-12">
                <CheckCircle size={64} className="text-green-400 mx-auto mb-4" />
                <h4 className="text-xl font-semibold text-green-400 mb-2">Message Sent Successfully!</h4>
                <p className="text-gray-300">Thank you for reaching out. I'll get back to you soon.</p>
              </div>
            ) : (
              <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                      Full Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors duration-300 text-white placeholder-gray-400"
                      placeholder="Your full name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors duration-300 text-white placeholder-gray-400"
                      placeholder="your.email@example.com"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors duration-300 text-white placeholder-gray-400"
                    placeholder="What's this about?"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors duration-300 text-white placeholder-gray-400 resize-none"
                    placeholder="Tell me about your project or idea..."
                  ></textarea>
                </div>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 disabled:from-gray-600 disabled:to-gray-700 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center space-x-2"
                >
                  {isSubmitting ? (
                    <>
                      <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></div>
                      <span>Sending...</span>
                    </>
                  ) : (
                    <>
                      <Send size={16} />
                      <span>Send Message</span>
                    </>
                  )}
                </button>
              </form>
            )}
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            <div className="group bg-gradient-to-br from-gray-800/40 to-gray-900/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-8 hover:border-blue-500/30 transition-all duration-500 transform hover:scale-[1.01] hover:rotate-1 hover:shadow-xl hover:shadow-purple-500/10 relative"
              style={{
                transformStyle: 'preserve-3d',
                perspective: '1000px'
              }}
            >
              {/* Glow effect for contact info */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-purple-500/0 to-blue-500/0 group-hover:from-purple-500/8 group-hover:to-blue-500/8 transition-all duration-500"></div>
              
              <h3 className="text-2xl font-bold mb-6 text-center">Contact Information</h3>
              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <div key={index} className="flex items-center space-x-4">
                    <div className="p-3 bg-gradient-to-br from-blue-500 to-purple-500 rounded-lg">
                      <info.icon size={20} className="text-white" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-400">{info.label}</p>
                      {info.link !== '#' ? (
                        <a 
                          href={info.link}
                          className="text-white hover:text-blue-400 transition-colors duration-300 font-medium"
                        >
                          {info.value}
                        </a>
                      ) : (
                        <p className="text-white font-medium">{info.value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="group bg-gradient-to-br from-gray-800/40 to-gray-900/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-8 hover:border-purple-500/30 transition-all duration-500 transform hover:scale-[1.01] hover:-rotate-1 hover:shadow-xl hover:shadow-purple-500/10 relative"
              style={{
                transformStyle: 'preserve-3d',
                perspective: '1000px'
              }}
            >
              {/* Glow effect for social links */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-pink-500/0 to-purple-500/0 group-hover:from-pink-500/8 group-hover:to-purple-500/8 transition-all duration-500"></div>
              
              <h3 className="text-2xl font-bold mb-6 text-center">Connect With Me</h3>
              <div className="flex justify-center space-x-6">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`p-4 bg-gray-700/50 hover:bg-gray-600/50 rounded-xl transition-all duration-300 transform hover:scale-110 hover:rotate-12 hover:shadow-lg hover:shadow-blue-500/30 ${social.color}`}
                  >
                    <social.icon size={24} />
                  </a>
                ))}
              </div>
              <div className="text-center mt-6">
                <p className="text-gray-400 text-sm">
                  Follow me on social media for updates on my latest projects and tech insights
                </p>
              </div>
            </div>

            <div className="group bg-gradient-to-br from-gray-800/40 to-gray-900/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-8 hover:border-pink-500/30 transition-all duration-500 transform hover:scale-[1.01] hover:rotate-1 hover:shadow-xl hover:shadow-pink-500/10 relative"
              style={{
                transformStyle: 'preserve-3d',
                perspective: '1000px'
              }}
            >
              {/* Glow effect for collaboration card */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-500/0 to-pink-500/0 group-hover:from-blue-500/8 group-hover:to-pink-500/8 transition-all duration-500"></div>
              
              <h3 className="text-xl font-bold mb-4 text-center">Let's Build Together</h3>
              <p className="text-gray-300 text-center leading-relaxed">
                Whether you're looking for a technical co-founder, a development partner, 
                or just want to discuss innovative ideas in AI, web development, or IoT, 
                I'm always excited to connect with fellow innovators and entrepreneurs.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="mt-20 border-t border-gray-800 pt-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="text-gray-400">
              © 2025 Suman Dhami. Built with React, TypeScript, and lots of ☕
            </p>
            <p className="text-gray-500 text-sm mt-2">
              Co-founder & Lead at AlpineRoot Technologies Pvt.Ltd | Kathmandu, Nepal
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;