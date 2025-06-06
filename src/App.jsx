import { MacbookScroll } from './components/ui/macbook-scroll';
import { useState, useEffect } from 'react';
import MeetTheTeam from './components/ui/MeetTheTeam';
import { AnimatedTooltip } from './components/ui/animated-tooltip';
import RotatingText from './components/ui/RotatingText';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { motion } from 'framer-motion';

const people = [
  {
    id: 1,
    name: "Alice Johnson",
    designation: "Software Engineer",
    image: "https://randomuser.me/api/portraits/women/1.jpg",
  },
  {
    id: 2,
    name: "Bob Smith",
    designation: "Product Manager",
    image: "https://randomuser.me/api/portraits/men/2.jpg",
  },
  {
    id: 3,
    name: "Catherine Lee",
    designation: "UX Designer",
    image: "https://randomuser.me/api/portraits/women/3.jpg",
  },
  {
    id: 4,
    name: "David Kim",
    designation: "Data Scientist",
    image: "https://randomuser.me/api/portraits/men/4.jpg",
  },
];
const upcomingEvents = [
  {
    img: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1080&h=1080&q=80",
    title: "AI & Machine Learning Workshop",
    description: "Hands-on workshop covering fundamentals of AI and ML with practical applications.",
    date: "June 15, 2025",
    time: "10:00 AM - 4:00 PM"
  },
  {
    img: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1080&h=1080&q=80",
    title: "Full Stack Web Development Bootcamp",
    description: "Intensive 3-day bootcamp covering React, Node.js, and modern web technologies.",
    date: "June 20-22, 2025",
    time: "9:00 AM - 6:00 PM"
  },
  {
    img: "https://images.unsplash.com/photo-1517430816045-df4b7de11d1d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1080&h=1080&q=80",
    title: "CSI-CRCE Hackathon 2025",
    description: "48-hour coding marathon with exciting prizes and mentorship opportunities.",
    date: "July 5-7, 2025",
    time: "Registration Open"
  },
  {
    img: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1080&h=1080&q=80",
    title: "Cloud Computing Seminar",
    description: "Industry experts sharing insights on AWS, Azure, and Google Cloud platforms.",
    date: "July 12, 2025",
    time: "2:00 PM - 5:00 PM"
  },{
    img: "https://images.unsplash.com/photo-1517430816045-df4b7de11d1d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1080&h=1080&q=80",
    title: "CSI-CRCE Hackathon 2025",
    description: "48-hour coding marathon with exciting prizes and mentorship opportunities.",
    date: "July 5-7, 2025",
    time: "Registration Open"
  },{
    img: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1080&h=1080&q=80",
    title: "Full Stack Web Development Bootcamp",
    description: "Intensive 3-day bootcamp covering React, Node.js, and modern web technologies.",
    date: "June 20-22, 2025",
    time: "9:00 AM - 6:00 PM"
  }
];

const teamHeads = [
  {
    name: "Priya Sharma",
    position: "President",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
    quote: "Leading CSI-CRCE towards innovation and excellence in technology education.",
    bio: "Final year Computer Engineering student with expertise in cloud computing and leadership. Organized over 20 technical events in the past year."
  },
  {
    name: "Rajesh Kumar",
    position: "Vice President",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
    quote: "Fostering a community where students can explore and excel in computer science.",
    bio: "Third year Computer Engineering student specializing in AI/ML. Passionate about creating learning opportunities for peers."
  }
];
// Typing Animation Component
const TypewriterText = ({ text, delay = 100, className = "" }) => {
  const [displayText, setDisplayText] = useState("");
  const [showCursor, setShowCursor] = useState(true);

  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      if (index <= text.length) {
        setDisplayText(text.slice(0, index));
        index++;
      } else {
        clearInterval(timer);
        setShowCursor(false);
      }
    }, delay);

    return () => clearInterval(timer);
  }, [text, delay]);

  useEffect(() => {
    const cursorTimer = setInterval(() => {
      setShowCursor(prev => !prev);
    }, 500);

    return () => clearInterval(cursorTimer);
  }, []);

  return (
    <span className={className}>
      {displayText}
      {showCursor && <span className="animate-pulse">|</span>}
    </span>
  );
};

// Fade In Text Component
const FadeInText = ({ children, delay = 0, className = "" }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, delay);

    return () => clearTimeout(timer);
  }, [delay]);

  return (
    <div className={`transition-opacity duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'} ${className}`}>
      {children}
    </div>
  );
};

// Navbar Component
const Navbar = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setIsVisible(scrollY > window.innerHeight);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      isVisible ? 'bg-black/80 backdrop-blur-md opacity-100 translate-y-0' : 'bg-transparent opacity-0 -translate-y-full pointer-events-none'
    }`}>
      <div className="max-w-7xl mx-auto px-6 py-4">
        <ul className="flex justify-center space-x-8 text-white">
          <li>
            <button 
              onClick={() => scrollToSection('about')} 
              className="relative px-4 py-2 text-sm font-medium transition-all hover:text-blue-400 group"
            >
              About Us
              <span className="absolute bottom-0 left-0 h-0.5 bg-blue-400 transition-all duration-300 w-0 group-hover:w-full"></span>
            </button>
          </li>
          <li>
            <button 
              onClick={() => scrollToSection('upcoming')} 
              className="relative px-4 py-2 text-sm font-medium transition-all hover:text-blue-400 group"
            >
              Upcoming Events
              <span className="absolute bottom-0 left-0 h-0.5 bg-blue-400 transition-all duration-300 w-0 group-hover:w-full"></span>
            </button>
          </li>
          <li>
            <button 
              onClick={() => scrollToSection('team-heads')} 
              className="relative px-4 py-2 text-sm font-medium transition-all hover:text-blue-400 group"
            >
              Team
              <span className="absolute bottom-0 left-0 h-0.5 bg-blue-400 transition-all duration-300 w-0 group-hover:w-full"></span>
            </button>
          </li>
          <li>
            <button 
              onClick={() => scrollToSection('members')} 
              className="relative px-4 py-2 text-sm font-medium transition-all hover:text-blue-400 group"
            >
              Members
              <span className="absolute bottom-0 left-0 h-0.5 bg-blue-400 transition-all duration-300 w-0 group-hover:w-full"></span>
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
};
const EventCard = ({ event }) => {
  return (
    <div className="w-full h-full rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300">
      <div className="relative h-64">
        <img 
          src={event.img} 
          alt={event.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
        <div className="absolute bottom-0 left-0 right-0 p-6">
          <h3 className="text-xl font-bold text-white mb-2">{event.title}</h3>
          <p className="text-gray-300 text-sm line-clamp-2">{event.description}</p>
        </div>
      </div>
      <div className="bg-gray-800/50 p-4 border-t border-gray-700">
        <div className="flex justify-between items-center">
          <div>
            <div className="text-blue-400 font-medium text-sm">{event.date}</div>
            <div className="text-gray-300 text-xs">{event.time}</div>
          </div>
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-3 py-1 rounded-md text-sm font-medium transition-colors">
            Details
          </button>
        </div>
      </div>
    </div>
  );

};

// Upcoming Events Grid
const EventGrid = ({ events }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {events.map((event, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          viewport={{ once: true }}
        >
          <EventCard event={event} />
        </motion.div>
      ))}
    </div>
  );
};



// Carousel Component
const EventCarousel = ({ events }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % events.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + events.length) % events.length);
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full max-w-6xl mx-auto">
      <div className="overflow-hidden rounded-2xl shadow-2xl">
        <div 
          className="flex transition-transform duration-700 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {events.map((event, index) => (
            <div key={index} className="w-full flex-shrink-0">
              <div className="bg-gradient-to-br from-gray-900 to-gray-800 backdrop-blur-sm">
                <div className="relative h-96">
                  <img 
                    src={event.img} 
                    alt={event.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
                  <div className="absolute inset-0 flex flex-col justify-end p-8">
                    <div className="flex flex-col md:flex-row justify-between items-start gap-6">
                      <div>
                        <h3 className="text-3xl font-bold text-white mb-4">{event.title}</h3>
                        <p className="text-gray-300 text-lg leading-relaxed max-w-2xl">{event.description}</p>
                      </div>
                      <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/10 min-w-[200px]">
                        <div className="text-blue-400 font-semibold text-xl mb-1">{event.date}</div>
                        <div className="text-gray-300">{event.time}</div>
                        <button className="mt-4 w-full bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg font-medium transition-all duration-200 hover:shadow-lg hover:shadow-blue-500/20">
                          Register Now
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      {/* Navigation buttons */}
      <button 
        onClick={prevSlide}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-3 rounded-full transition-all duration-200 backdrop-blur-sm hover:scale-110"
      >
        <ChevronLeft size={24} />
      </button>
      <button 
        onClick={nextSlide}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-3 rounded-full transition-all duration-200 backdrop-blur-sm hover:scale-110"
      >
        <ChevronRight size={24} />
      </button>
      
      {/* Dots indicator */}
      <div className="flex justify-center mt-8 space-x-2">
        {events.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-3 h-3 rounded-full transition-all duration-200 ${
              index === currentIndex ? 'bg-blue-500 w-6' : 'bg-gray-600'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

// Section Heading Component
const SectionHeading = ({ title, subtitle }) => {
  return (
    <div className="text-center mb-16">
      <motion.h2 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-4xl md:text-5xl font-bold text-white mb-4"
      >
        {title}
      </motion.h2>
      {subtitle && (
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-lg text-gray-400 max-w-2xl mx-auto"
        >
          {subtitle}
        </motion.p>
      )}
    </div>
  );
};

function App() {
  return (
    <>
      <Navbar />
      
      {/* Hero Section with Typewriter Effect */}
      <div
        style={{
          background: 'linear-gradient(#1a2b3b, #010d18)',
          minHeight: '100vh',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '2rem',
          textAlign: 'center'
        }}
      >
        <div className="mb-8">
          <h1 className="text-6xl md:text-8xl font-bold text-white mb-4">
            <TypewriterText text="CSI-CRCE" delay={150} />
          </h1>
          <FadeInText delay={3000}>
            <p className="text-xl md:text-2xl text-gray-300 font-semibold">
              Computer Society of India - CRCE
            </p>
          </FadeInText>
        </div>

        <div className="w-full max-w-4xl">
          <MacbookScroll
            src="/Untitled design.png"
            showGradient={true}
            title={<span></span>}
            badge={
              <span className="bg-white text-black px-3 py-2 rounded-md text-sm font-semibold">
                Coming Soon
              </span>
            }
          />
        </div>
      </div>

      {/* About Us Section */}
     <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#010d18] to-[#0a1520]">
  <div className="max-w-7xl mx-auto">
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
      {/* Image with elegant frame */}
      <motion.div 
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="relative"
      >
        <div className="relative rounded-3xl overflow-hidden shadow-2xl">
          <img 
            src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1200&q=80" 
            alt="CSI-CRCE Team"
            className="w-full h-auto object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
        </div>
        <div className="absolute -bottom-6 -right-6 bg-white/10 backdrop-blur-md p-4 rounded-xl shadow-lg border border-white/10">
          <div className="text-white font-bold text-xl">Since 2010</div>
          <div className="text-gray-200 text-sm">Empowering Students</div>
        </div>
      </motion.div>

      {/* Text content */}
      <motion.div 
        initial={{ opacity: 0, x: 20 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="space-y-6 text-left"
      >
        <h2 className="text-3xl sm:text-4xl font-bold text-white">
          About Us
        </h2>
        <p className="text-blue-300 font-medium text-md leading-relaxed">
          The Computer Society of India (CSI) Student Chapter of Fr. Conceicao Rodrigues College of Engineering
        </p>

        <p className="text-gray-300 leading-relaxed text-lg">
          Established in October 2010, our student chapter is an active organization that organizes technical activities including workshops, competitions, symposiums, and guest lectures for our members.
        </p>

        <p className="text-gray-300 leading-relaxed text-lg">
          Under the guidance of the Department of Computer Engineering, we have grown to over <span className="text-white font-medium">100 active members</span>, providing opportunities for students to excel in technology fields.
        </p>

        <p className="text-gray-300 leading-relaxed text-lg">
          The Computer Society of India, established in 1965, is the first and largest body of computer professionals in India with over 110,000 members, including IT industry leaders and scientists.
        </p>

        <a 
          href="https://csiindia.org/" 
          target="_blank" 
          rel="noopener noreferrer"
          className="inline-block mt-6 px-6 py-3 bg-white/10 backdrop-blur-lg border border-white/10 text-white font-medium rounded-lg hover:bg-white/20 transition-all duration-200"
        >
          Learn More About CSI
        </a>
      </motion.div>
    </div>
  </div>
</section>


<section id="upcoming" className="py-20 px-4 sm:px-6 lg:px-8 bg-[#0a1520]">
        <div className="max-w-7xl mx-auto">
          <SectionHeading 
            title="Upcoming Events" 
            subtitle="Join us for exciting technical events and workshops"
          />
          <EventGrid events={upcomingEvents} />
        </div>
      </section>


<section id="team-heads" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#0a1520] to-[#010d18]">
  <div className="max-w-7xl mx-auto">
    <SectionHeading 
      title="Meet Our Leadership" 
      subtitle="The driving force behind CSI-CRCE's success"
    />
    
    <div className="relative max-w-6xl mx-auto">
      {/* Timeline vertical line */}
      <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-500/20 via-blue-500 to-blue-500/20 transform -translate-x-1/2 z-0"></div>
      
      <div className="relative grid grid-cols-1 md:grid-cols-2 gap-y-24 md:gap-y-32">
        {/* President - top left */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex justify-start md:pr-10 z-10"
        >
          <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-2xl overflow-hidden hover:border-gray-700 transition-all duration-300 max-w-md w-full">
            <div className="p-8 flex flex-col items-center text-center">
              <img 
                src={teamHeads[0].image} 
                alt={teamHeads[0].name}
                className="w-36 h-36 rounded-full object-cover border-4 border-blue-500/30 mb-6"
              />
              <h3 className="text-2xl font-bold text-white mb-1">{teamHeads[0].name}</h3>
              <p className="text-blue-400 mb-4">{teamHeads[0].position}</p>
              <blockquote className="text-gray-300 italic mb-4">
                "{teamHeads[0].quote}"
              </blockquote>
              <p className="text-gray-400">{teamHeads[0].bio}</p>
            </div>
          </div>
        </motion.div>

        {/* Vice President - bottom right */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="flex justify-end md:pl-10 z-10"
        >
          <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-2xl overflow-hidden hover:border-gray-700 transition-all duration-300 max-w-md w-full">
            <div className="p-8 flex flex-col items-center text-center">
              <img 
                src={teamHeads[1].image} 
                alt={teamHeads[1].name}
                className="w-36 h-36 rounded-full object-cover border-4 border-blue-500/30 mb-6"
              />
              <h3 className="text-2xl font-bold text-white mb-1">{teamHeads[1].name}</h3>
              <p className="text-blue-400 mb-4">{teamHeads[1].position}</p>
              <blockquote className="text-gray-300 italic mb-4">
                "{teamHeads[1].quote}"
              </blockquote>
              <p className="text-gray-400">{teamHeads[1].bio}</p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  </div>
</section>


      {/* Team Members Section */}
   <section id="members" className="py-20 px-4 sm:px-6 lg:px-8 bg-[#010d18]">
  <div className="max-w-7xl mx-auto">
    <SectionHeading 
      title="Our Team Members" 
      subtitle="The talented individuals who make it all happen"
    />

    <div className="flex justify-center">
      <div className="flex flex-wrap justify-center gap-6">
        <AnimatedTooltip items={people} />
      </div>
    </div>
  </div>
</section>



      {/* Footer */}
      <footer className="bg-black/90 text-gray-400 py-12 px-4 sm:px-6 lg:px-8 border-t border-gray-800">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">CSI-CRCE</h3>
            <p className="text-sm">
              Computer Society of India - Fr. Conceicao Rodrigues College of Engineering
            </p>
          </div>
          <div>
            <h4 className="text-white text-sm font-semibold mb-4 uppercase tracking-wider">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-white transition-colors">Home</a></li>
              <li><a href="#about" className="hover:text-white transition-colors">About</a></li>
              <li><a href="#upcoming" className="hover:text-white transition-colors">Events</a></li>
              <li><a href="#members" className="hover:text-white transition-colors">Team</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white text-sm font-semibold mb-4 uppercase tracking-wider">Contact</h4>
            <address className="not-italic text-sm space-y-2">
              <p>Fr. CRCE, Bandra West</p>
              <p>Mumbai, Maharashtra 400050</p>
              <p>Email: csi@crce.ac.in</p>
            </address>
          </div>
          <div>
            <h4 className="text-white text-sm font-semibold mb-4 uppercase tracking-wider">Follow Us</h4>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-white transition-colors">
                <span className="sr-only">Twitter</span>
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                </svg>
              </a>
              <a href="#" className="hover:text-white transition-colors">
                <span className="sr-only">Instagram</span>
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.023.047 1.351.058 3.807.058h.468c2.456 0 2.784-.011 3.807-.058.975-.045 1.504-.207 1.857-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.047-1.023.058-1.351.058-3.807v-.468c0-2.456-.011-2.784-.058-3.807-.045-.975-.207-1.504-.344-1.857a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
                </svg>
              </a>
              <a href="#" className="hover:text-white transition-colors">
                <span className="sr-only">GitHub</span>
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                </svg>
              </a>
            </div>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-gray-800 text-center text-sm">
          <p>&copy; {new Date().getFullYear()} CSI-CRCE. All rights reserved.</p>
        </div>
      </footer>
    </>
  );
}

export default App;