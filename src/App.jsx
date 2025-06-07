import { MacbookScroll } from './components/ui/macbook-scroll';
import { useState, useEffect } from 'react';
import { AnimatedTooltip } from './components/ui/animated-tooltip';
import RotatingText from './components/ui/RotatingText';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { motion } from 'framer-motion';
import TeamMembersSection from './components/ui/TeamMember';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import HomePage from './HomePage';



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
    <Router>
      <Routes>
        {/* Your main homepage route */}
        <Route path="/" element={<HomePage />} />
        {/* Your team page route */}
        <Route path="/team" element={<TeamMembersSection/>} />
      </Routes>
    </Router>


  );
}



export default App;