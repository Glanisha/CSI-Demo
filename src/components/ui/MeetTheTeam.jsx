import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Twitter, Facebook, Instagram, Mail } from 'lucide-react';

const MeetTheTeam = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  
  const teamMembers = [
    {
      id: 1,
      name: "Alexandra Chen",
      position: "Senior Instructor",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b1ab?w=300&h=300&fit=crop&crop=face",
      twitter: "https://twitter.com",
      facebook: "https://facebook.com",
      instagram: "https://instagram.com",
      email: "mailto:alexandra@example.com"
    },
    {
      id: 2,
      name: "Marcus Rodriguez",
      position: "Lead Developer",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&crop=face",
      twitter: "https://twitter.com",
      facebook: "https://facebook.com",
      instagram: "https://instagram.com",
      email: "mailto:marcus@example.com"
    },
    {
      id: 3,
      name: "Sarah Williams",
      position: "UI/UX Designer",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&h=300&fit=crop&crop=face",
      twitter: "https://twitter.com",
      facebook: "https://facebook.com",
      instagram: "https://instagram.com",
      email: "mailto:sarah@example.com"
    },
    {
      id: 4,
      name: "David Kim",
      position: "Data Scientist",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop&crop=face",
      twitter: "https://twitter.com",
      facebook: "https://facebook.com",
      instagram: "https://instagram.com",
      email: "mailto:david@example.com"
    },
    {
      id: 5,
      name: "Emma Thompson",
      position: "Project Manager",
      image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=300&h=300&fit=crop&crop=face",
      twitter: "https://twitter.com",
      facebook: "https://facebook.com",
      instagram: "https://instagram.com",
      email: "mailto:emma@example.com"
    },
    {
      id: 6,
      name: "James Wilson",
      position: "Backend Engineer",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=300&h=300&fit=crop&crop=face",
      twitter: "https://twitter.com",
      facebook: "https://facebook.com",
      instagram: "https://instagram.com",
      email: "mailto:james@example.com"
    },
    {
      id: 7,
      name: "Lisa Park",
      position: "Marketing Specialist",
      image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=300&h=300&fit=crop&crop=face",
      twitter: "https://twitter.com",
      facebook: "https://facebook.com",
      instagram: "https://instagram.com",
      email: "mailto:lisa@example.com"
    },
    {
      id: 8,
      name: "Michael Brown",
      position: "DevOps Engineer",
      image: "https://images.unsplash.com/photo-1507591064344-4c6ce005b128?w=300&h=300&fit=crop&crop=face",
      twitter: "https://twitter.com",
      facebook: "https://facebook.com",
      instagram: "https://instagram.com",
      email: "mailto:michael@example.com"
    }
  ];

  const itemsPerView = 3;
  const maxIndex = Math.max(0, teamMembers.length - itemsPerView);

  const nextSlide = () => {
    setCurrentIndex(prev => prev >= maxIndex ? 0 : prev + 1);
  };

  const prevSlide = () => {
    setCurrentIndex(prev => prev <= 0 ? maxIndex : prev - 1);
  };

  return (
    <div className="min-h-screen bg-transparent py-20 px-4">
      {/* Glassmorphism Container */}
      <div className="max-w-7xl mx-auto backdrop-blur-md bg-white/10 rounded-3xl border border-white/20 shadow-2xl p-8 md:p-12">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Meet Our Expert Team
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Passionate professionals dedicated to delivering exceptional results and innovative solutions
          </p>
        </div>

        {/* Carousel Container */}
        <div className="relative">
          {/* Navigation Buttons */}
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 p-3 rounded-full bg-white/20 backdrop-blur-sm border border-white/30 hover:bg-white/30 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-110"
            aria-label="Previous team members"
          >
            <ChevronLeft className="w-6 h-6 text-gray-700" />
          </button>
          
          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 p-3 rounded-full bg-white/20 backdrop-blur-sm border border-white/30 hover:bg-white/30 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-110"
            aria-label="Next team members"
          >
            <ChevronRight className="w-6 h-6 text-gray-700" />
          </button>

          {/* Cards Container */}
          <div className="overflow-hidden mx-12">
            <div 
              className="flex transition-transform duration-500 ease-in-out gap-8"
              style={{
                transform: `translateX(-${currentIndex * (100 / itemsPerView)}%)`
              }}
            >
              {teamMembers.map((member) => (
                <div
                  key={member.id}
                  className="flex-shrink-0 w-full md:w-1/3"
                >
                  {/* Team Card with Glassmorphism */}
                  <div className="group relative backdrop-blur-lg bg-white/15 rounded-2xl border border-white/20 p-8 hover:bg-white/25 transition-all duration-300 shadow-xl hover:shadow-2xl hover:-translate-y-2">
                    {/* Subtle Glow Effect */}
                    <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    
                    {/* Profile Image */}
                    <div className="relative mb-6">
                      <div className="w-32 h-32 mx-auto rounded-full overflow-hidden ring-4 ring-white/30 group-hover:ring-white/50 transition-all duration-300">
                        <img
                          src={member.image}
                          alt={member.name}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                        />
                      </div>
                      {/* Decorative glow behind image */}
                      <div className="absolute inset-0 w-32 h-32 mx-auto rounded-full bg-gradient-to-br from-blue-400/20 to-purple-400/20 blur-xl -z-10 group-hover:from-blue-400/30 group-hover:to-purple-400/30 transition-all duration-300"></div>
                    </div>

                    {/* Member Info */}
                    <div className="text-center mb-6">
                      <h3 className="text-2xl font-bold text-gray-800 mb-2 group-hover:text-blue-700 transition-colors duration-300">
                        {member.name}
                      </h3>
                      <p className="text-lg font-semibold text-blue-600 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                        {member.position}
                      </p>
                    </div>

                    {/* Social Links */}
                    <div className="flex justify-center space-x-4">
                      <a
                        href={member.twitter}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 rounded-full bg-white/20 hover:bg-white/40 transition-all duration-300 hover:scale-110 backdrop-blur-sm border border-white/30"
                      >
                        <Twitter className="w-5 h-5 text-gray-700 hover:text-blue-600" />
                      </a>
                      <a
                        href={member.facebook}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 rounded-full bg-white/20 hover:bg-white/40 transition-all duration-300 hover:scale-110 backdrop-blur-sm border border-white/30"
                      >
                        <Facebook className="w-5 h-5 text-gray-700 hover:text-blue-800" />
                      </a>
                      <a
                        href={member.instagram}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 rounded-full bg-white/20 hover:bg-white/40 transition-all duration-300 hover:scale-110 backdrop-blur-sm border border-white/30"
                      >
                        <Instagram className="w-5 h-5 text-gray-700 hover:text-pink-600" />
                      </a>
                      <a
                        href={member.email}
                        className="p-2 rounded-full bg-white/20 hover:bg-white/40 transition-all duration-300 hover:scale-110 backdrop-blur-sm border border-white/30"
                      >
                        <Mail className="w-5 h-5 text-gray-700 hover:text-green-600" />
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Pagination Dots */}
          <div className="flex justify-center mt-8 space-x-2">
            {Array.from({ length: maxIndex + 1 }).map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  currentIndex === index
                    ? 'bg-blue-600 w-8'
                    : 'bg-white/40 hover:bg-white/60'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MeetTheTeam;