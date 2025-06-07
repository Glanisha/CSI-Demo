import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Linkedin, Github, Instagram } from 'lucide-react';

const teamMembers = [
  {
    name: "Priya Sharma",
    position: "President",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
    bio: "Final year Computer Engineering student with expertise in cloud computing and leadership."
  },
  {
    name: "Rajesh Kumar",
    position: "Vice President",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
    bio: "Third year Computer Engineering student specializing in AI/ML and machine learning."
  },
  {
    name: "Ananya Patel",
    position: "Technical Head",
    image: "https://randomuser.me/api/portraits/women/67.jpg",
    bio: "Passionate about web development and competitive programming with multiple hackathon wins."
  },
  {
    name: "Arjun Mehta",
    position: "Event Coordinator",
    image: "https://randomuser.me/api/portraits/men/45.jpg",
    bio: "Skilled in project management and organizing large-scale technical events."
  },
  {
    name: "Sneha Reddy",
    position: "Marketing Head",
    image: "https://randomuser.me/api/portraits/women/23.jpg",
    bio: "Creative marketing strategist with expertise in digital marketing and social media."
  },
  {
    name: "Vikram Singh",
    position: "Treasurer",
    image: "https://randomuser.me/api/portraits/men/78.jpg",
    bio: "Finance enthusiast with strong analytical skills and experience in budget management."
  },
  {
    name: "Kavya Nair",
    position: "Content Writer",
    image: "https://randomuser.me/api/portraits/women/89.jpg",
    bio: "Talented writer specializing in technical documentation and creative content."
  },
  {
    name: "Rohit Agarwal",
    position: "Web Developer",
    image: "https://randomuser.me/api/portraits/men/12.jpg",
    bio: "Full-stack developer proficient in React, Node.js, and modern web technologies."
  },
  {
    name: "Ishita Joshi",
    position: "UI/UX Designer",
    image: "https://randomuser.me/api/portraits/women/56.jpg",
    bio: "Creative designer focused on user experience and interface design for web applications."
  },
  {
    name: "Karan Gupta",
    position: "Data Analyst",
    image: "https://randomuser.me/api/portraits/men/34.jpg",
    bio: "Data science enthusiast with expertise in Python, R, and statistical analysis."
  },
  {
    name: "Pooja Desai",
    position: "Mobile Developer",
    image: "https://randomuser.me/api/portraits/women/78.jpg",
    bio: "Android and iOS developer with experience in Flutter and React Native."
  },
  {
    name: "Amit Verma",
    position: "DevOps Engineer",
    image: "https://randomuser.me/api/portraits/men/67.jpg",
    bio: "Cloud infrastructure specialist with expertise in AWS, Docker, and Kubernetes."
  },
  {
    name: "Riya Chopra",
    position: "Cybersecurity Lead",
    image: "https://randomuser.me/api/portraits/women/34.jpg",
    bio: "Security researcher passionate about ethical hacking and network security."
  },
  {
    name: "Siddharth Rao",
    position: "Backend Developer",
    image: "https://randomuser.me/api/portraits/men/56.jpg",
    bio: "Backend specialist with strong foundation in databases and server-side technologies."
  },
  {
    name: "Meera Bansal",
    position: "Research Coordinator",
    image: "https://randomuser.me/api/portraits/women/45.jpg",
    bio: "Research enthusiast working on cutting-edge projects in artificial intelligence."
  },
  {
    name: "Nikhil Sharma",
    position: "Game Developer",
    image: "https://randomuser.me/api/portraits/men/23.jpg",
    bio: "Game development specialist with experience in Unity and Unreal Engine."
  },
  {
    name: "Tanya Kapoor",
    position: "PR Manager",
    image: "https://randomuser.me/api/portraits/women/12.jpg",
    bio: "Public relations expert skilled in communication and brand management."
  },
  {
    name: "Harsh Agrawal",
    position: "Tech Support",
    image: "https://randomuser.me/api/portraits/men/89.jpg",
    bio: "Technical support specialist helping students with hardware and software issues."
  },
  {
    name: "Sakshi Malhotra",
    position: "Social Media Manager",
    image: "https://randomuser.me/api/portraits/women/67.jpg",
    bio: "Digital marketing expert managing online presence and community engagement."
  },
  {
    name: "Yash Pandey",
    position: "Junior Developer",
    image: "https://randomuser.me/api/portraits/men/78.jpg",
    bio: "Enthusiastic developer learning new technologies and contributing to open source."
  }
];

const SectionHeading = ({ title, subtitle }) => (
  <div className="text-center mb-16">
    <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">{title}</h2>
    <p className="text-xl text-gray-400">{subtitle}</p>
  </div>
);

const TeamMember = ({ member, index, isLeft }) => (
  <motion.div
    initial={{ opacity: 0, x: isLeft ? -20 : 20 }}
    whileInView={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.6, delay: index * 0.1 }}
    viewport={{ once: true }}
    className={`flex ${isLeft ? 'justify-start md:pr-6' : 'justify-end md:pl-6'} z-10`}
    style={{ 
      marginTop: isLeft ? `${index * 40}px` : `${(index * 40) + 80}px` 
    }}
  >
    <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-2xl overflow-hidden hover:border-gray-700 transition-all duration-300 max-w-sm w-full group hover:scale-105">
      <div className="p-6 flex flex-col items-center text-center">
        <img 
          src={member.image} 
          alt={member.name}
          className="w-32 h-32 rounded-full object-cover border-4 border-blue-500/30 mb-4 group-hover:border-blue-500/50 transition-colors duration-300"
        />
        <h3 className="text-xl font-bold text-white mb-1">{member.name}</h3>
        <p className="text-blue-400 mb-3 font-medium">{member.position}</p>
        <p className="text-gray-400 text-sm mb-4 leading-relaxed">{member.bio}</p>
        
        {/* Social Media Icons */}
        <div className="flex space-x-4">
          <a 
            href="https://linkedin.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-blue-500 transition-colors duration-300 p-2 rounded-full hover:bg-blue-500/10"
          >
            <Linkedin size={20} />
          </a>
          <a 
            href="https://github.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white transition-colors duration-300 p-2 rounded-full hover:bg-gray-700/50"
          >
            <Github size={20} />
          </a>
          <a 
            href="https://instagram.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-pink-500 transition-colors duration-300 p-2 rounded-full hover:bg-pink-500/10"
          >
            <Instagram size={20} />
          </a>
        </div>
      </div>
    </div>
  </motion.div>
);

export default function TeamMembersSection() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#0a1520] to-[#010d18] min-h-screen">
      <div className="max-w-7xl mx-auto">
        <SectionHeading 
          title="Meet Our Team" 
          subtitle="The talented individuals driving our mission forward"
        />
        
        <div className="relative max-w-5xl mx-auto">
          {/* Timeline vertical line */}
          <div className="absolute left-1/2 top-0 w-1 bg-gradient-to-b from-blue-500/20 via-blue-500 to-blue-500/20 transform -translate-x-1/2 z-0" style={{ height: `${teamMembers.length * 320}px` }}></div>
          
          <div className="relative grid grid-cols-1 md:grid-cols-2 gap-4">
            {teamMembers.map((member, index) => {
              const isLeftSide = index % 2 === 0;
              return (
                <div key={member.name} className={isLeftSide ? 'md:col-start-1' : 'md:col-start-2'}>
                  <TeamMember 
                    member={member} 
                    index={Math.floor(index / 2)} 
                    isLeft={isLeftSide}
                  />
                </div>
              );
            })}
          </div>
        </div>
        
        {/* Back to Home Button */}
        <div className="text-center mt-16">
          <a 
            href="/"
            className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-semibold rounded-full transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
          >
            ← Back to Home
          </a>
        </div>
      </div>
    </section>
  );
}