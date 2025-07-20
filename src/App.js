import React, { useEffect, useState, useRef } from 'react';
import { Mail, Phone, MapPin, Linkedin, Github, ExternalLink, Award, BookOpen, Briefcase, User, Code, Lightbulb, ArrowUpCircle } from 'lucide-react';

function App() {
  const personalInfo = {
    name: 'Swapnil Bhalerao',
    title: 'Node.js Developer | 2.5 Years Experience',
    phone: '+91-8087433835',
    email: 'bhaleraoswapnil50@gmail.com',
    location: 'Pune, India',
    linkedin: 'https://www.linkedin.com/in/swapnil-bhalerao-a92a4b21b',
    github: 'https://github.com/swapnilbhalerao', // Assuming a GitHub link for a developer
    summary: `As a Node.js Developer with 2.5 years of hands-on experience, I specialize in building scalable, high-performance backend applications. My expertise spans developing robust RESTful APIs, GraphQL services, and microservices architectures. I have a proven track record of significantly improving API response times through advanced optimization techniques like caching and database indexing. I'm also proficient in cloud deployment (AWS, Azure, Firebase) and serverless architectures, committed to delivering efficient and secure solutions.`,
  };

  const skills = {
    'Backend Technologies': 'Node.js, Express.js, NestJS, TypeScript, JavaScript (ES6+), RESTful APIs, GraphQL, WebSockets, Socket.IO, gRPC, React.js',
    'Database & Storage': 'MongoDB, PostgreSQL, MySQL, Redis, Firebase, AWS DynamoDB, Cassandra, Elasticsearch',
    'Authentication & Security': 'JWT, OAuth 2.0, SAML, Firebase Auth, Role-Based Access Control (RBAC), OWASP Security Best Practices, API Gateway Security',
    'Performance Optimization': 'Load Balancing, Caching Strategies (Redis, Memcached), Database Indexing, Lazy Loading, Code Splitting, CDN Integration',
    'Cloud & DevOps': 'AWS (Lambda, S3, EC2, RDS, API Gateway, CloudWatch), Azure Functions, Docker, Kubernetes, Terraform, CI/CD (GitHub Actions, Jenkins, CircleCI)',
    'Testing & Debugging': 'Jest, Mocha, Chai, Supertest, Postman, New Relic, Sentry, Performance Profiling',
    'Other Tools & Practices': 'Agile, Scrum, Jira, Microservices Architecture, Serverless Computing, WebSockets, Message Queues (RabbitMQ, Kafka, NATS), WordPress',
  };

  const projects = [
    {
      name: 'Real-time Chat Application',
      description: 'Built a chat system using WebSockets and Redis, enabling real-time messaging with typing indicators and message persistence.',
      link: 'https://user.pocketi.app/',
    },
    // Add more projects if available
  ];

  const experience = [
    {
      title: 'Backend Developer',
      company: 'Subcodevs IT Solutions (Startup)',
      duration: 'October 2022 - April 2025',
      location: 'Noida',
      description: [
        'Designed and developed scalable microservices using Node.js & Express.js, handling 10K+ concurrent requests.',
        'Improved database efficiency by reducing query execution times by 50% with Redis caching and indexing.',
        'Built real-time applications using WebSockets and Socket.IO for live chat and event-based systems.',
        'Secured REST APIs using JWT-based authentication and implemented OAuth 2.0 authorization flows.',
        'Led a team of 5+ backend engineers, mentoring them on best coding practices and system design patterns.',
      ],
    },
    {
      title: 'Junior (Intern) Backend Developer',
      company: 'Nextra IT Solutions (Startup)',
      duration: 'June 2022 - October 2022',
      location: 'Delhi',
      description: [
        'Developed backend APIs using Node.js and MongoDB, supporting multiple front-end applications.',
        'Integrated third-party services like Stripe for payments and Firebase for real-time notifications.',
        'Implemented unit and integration testing using Jest and Supertest, ensuring 90%+ test coverage.',
        'Migrated monolithic backend services to microservices architecture, improving maintainability.',
        'Worked with DevOps engineers to deploy applications on AWS using Docker and Kubernetes.',
      ],
    },
  ];

  const education = [
    {
      course: 'Bachelor of Technology',
      university: 'Dr.BATU University',
      year: '2017-2021',
      percentage: '77%',
    },
  ];

  const certifications = [
    'Backend Development And API (Node.js) - FreeCodeCamp',
    'Software Engineer - HackerRank',
    'Solutions Architecture Job Simulation - Forage',
  ];

  const achievements = [
    'Open-Source Contributor: Developed a Node.js middleware used by 500+ developers worldwide.',
    'Tech Speaker: Delivered sessions on Node.js performance optimization at developer meetups.',
    'Performance Improvement Initiative: Reduced server response times from 1.2s to 300ms using caching and optimizations.',
    'Mentorship & Training: Trained junior developers in Node.js, API security, and cloud deployment.',
  ];

  // State for active navigation link
  const [activeSection, setActiveSection] = useState('home');
  // State for "Back to Top" button visibility
  const [showBackToTop, setShowBackToTop] = useState(false);
  // State for mobile menu visibility
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  // State for dark mode
  const [darkMode, setDarkMode] = useState(false);

  // Refs for each section to observe intersection
  const sectionRefs = {
    home: useRef(null),
    about: useRef(null),
    skills: useRef(null),
    projects: useRef(null),
    experience: useRef(null),
    education: useRef(null),
    contact: useRef(null),
  };

  useEffect(() => {
    // Intersection Observer for scroll animations and active navigation
    const observerOptions = {
      root: null,
      rootMargin: '-50% 0px',
      threshold: 0,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
          entry.target.classList.add('animate-fade-in-up');
        } else {
          entry.target.classList.remove('animate-fade-in-up');
        }
      });
    }, observerOptions);

    // Observe all sections
    Object.values(sectionRefs).forEach(ref => {
      if (ref.current) {
        observer.observe(ref.current);
      }
    });

    // Scroll event listener for "Back to Top" button
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowBackToTop(true);
      } else {
        setShowBackToTop(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    // Check for preferred color scheme
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    setDarkMode(prefersDark);

    // Cleanup
    return () => {
      Object.values(sectionRefs).forEach(ref => {
        if (ref.current) {
          observer.unobserve(ref.current);
        }
      });
      window.removeEventListener('scroll', handleScroll);
    };
  }, [sectionRefs]); // <-- Added sectionRefs here

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <div className={`min-h-screen transition-colors duration-300 ${darkMode ? 'bg-gray-900 text-gray-100' : 'bg-gradient-to-br from-blue-50 to-indigo-100 text-gray-800'} font-inter relative`}>
      {/* Custom CSS for animations */}
      <style>
        {`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in-up {
          animation: fadeIn 0.8s ease-out forwards;
          opacity: 0;
        }
        .section-hidden {
          opacity: 0;
          transform: translateY(20px);
        }
        .section-visible {
          opacity: 1;
          transform: translateY(0);
          transition: opacity 0.8s ease-out, transform 0.8s ease-out;
        }
        .mobile-menu {
          transition: all 0.3s ease-in-out;
        }
        .skill-card:hover {
          transform: translateY(-5px) scale(1.02);
          box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
        }
        .project-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
        }
        `}
      </style>

      {/* Header */}
      <header className={`${darkMode ? 'bg-gray-800' : 'bg-gradient-to-r from-blue-700 to-indigo-800'} text-white p-5 shadow-xl fixed w-full z-50`}>
        <div className="container mx-auto flex justify-between items-center">
          <div className="text-left">
            <h1 className="text-2xl md:text-3xl font-extrabold tracking-tight">{personalInfo.name}</h1>
            <p className="text-sm md:text-lg font-light opacity-90">{personalInfo.title}</p>
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-6 items-center">
            {['about', 'skills', 'projects', 'experience', 'education', 'contact'].map((sectionId) => (
              <a
                key={sectionId}
                href={`#${sectionId}`}
                className={`hover:text-blue-200 transition duration-300 text-lg font-medium capitalize ${activeSection === sectionId ? 'text-blue-200 underline' : ''}`}
              >
                {sectionId}
              </a>
            ))}
            <button 
              onClick={toggleDarkMode}
              className={`ml-4 p-2 rounded-full ${darkMode ? 'bg-gray-700 text-yellow-300' : 'bg-gray-200 text-gray-700'}`}
              aria-label="Toggle dark mode"
            >
              {darkMode ? '☀️' : '🌙'}
            </button>
          </nav>
          
          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center space-x-4">
            <button 
              onClick={toggleDarkMode}
              className={`p-2 rounded-full ${darkMode ? 'bg-gray-700 text-yellow-300' : 'bg-gray-200 text-gray-700'}`}
              aria-label="Toggle dark mode"
            >
              {darkMode ? '☀️' : '🌙'}
            </button>
            <button 
              onClick={toggleMobileMenu}
              className="text-white focus:outline-none"
              aria-label="Toggle menu"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {mobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
        
        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className={`mobile-menu md:hidden ${darkMode ? 'bg-gray-800' : 'bg-indigo-900'} mt-4 py-4 px-6 rounded-lg shadow-lg`}>
            <nav className="flex flex-col space-y-3">
              {['about', 'skills', 'projects', 'experience', 'education', 'contact'].map((sectionId) => (
                <a
                  key={sectionId}
                  href={`#${sectionId}`}
                  onClick={toggleMobileMenu}
                  className={`hover:text-blue-200 transition duration-300 text-lg font-medium capitalize ${activeSection === sectionId ? 'text-blue-200 underline' : ''}`}
                >
                  {sectionId}
                </a>
              ))}
            </nav>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <section 
        id="home" 
        ref={sectionRefs.home} 
        className="relative h-screen flex items-center justify-center text-center bg-cover bg-center overflow-hidden" 
        style={{ backgroundImage: darkMode ? 'linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(https://placehold.co/1920x1080/1A202C/FFFFFF?text=Dark+Developer+Background)' : 'linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(https://placehold.co/1920x1080/4A90E2/FFFFFF?text=Developer+Background)' }}
      >
        <div className="relative z-10 text-white p-8 rounded-lg max-w-3xl animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-4 leading-tight drop-shadow-lg">Hi, I'm {personalInfo.name}</h2>
          <p className="text-xl md:text-2xl lg:text-3xl font-light mb-6 opacity-90 drop-shadow-md">{personalInfo.title}</p>
          <p className="text-base md:text-lg lg:text-xl mb-8 max-w-2xl mx-auto drop-shadow-sm">{personalInfo.summary}</p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a 
              href="#contact" 
              className="inline-flex items-center justify-center bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-6 sm:px-8 rounded-full shadow-lg transform hover:scale-105 transition duration-300 ease-in-out group"
            >
              <Mail className="mr-3 group-hover:rotate-6 transition duration-300" size={20} /> Get in Touch
            </a>
            <a 
              href="#projects" 
              className="inline-flex items-center justify-center bg-transparent border-2 border-white hover:bg-white hover:text-blue-800 text-white font-bold py-3 px-6 sm:px-8 rounded-full shadow-lg transform hover:scale-105 transition duration-300 ease-in-out"
            >
              View My Work
            </a>
          </div>
        </div>
        
        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </section>

      {/* Main Content */}
      <main className="container mx-auto p-6 pt-24 space-y-16">

        {/* About Me Section */}
        <section 
          id="about" 
          ref={sectionRefs.about} 
          className={`${darkMode ? 'bg-gray-800' : 'bg-white'} p-6 md:p-8 rounded-xl shadow-2xl transform hover:scale-[1.005] transition duration-300 ease-in-out section-hidden`}
        >
          <h2 className={`text-3xl md:text-4xl font-bold ${darkMode ? 'text-blue-300' : 'text-blue-800'} mb-6 flex items-center`}>
            <User className={`mr-3 ${darkMode ? 'text-blue-400' : 'text-blue-600'}`} size={36} />About Me
          </h2>
          <p className={`text-base md:text-lg leading-relaxed ${darkMode ? 'text-gray-300' : 'text-gray-700'} mb-6`}>{personalInfo.summary}</p>
          <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 text-base md:text-lg">
            <p className="flex items-center">
              <Phone className={`mr-3 ${darkMode ? 'text-blue-400' : 'text-blue-500'}`} size={20} />
              <strong className={`${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>Phone:</strong> 
              <span className={`ml-2 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>{personalInfo.phone}</span>
            </p>
            <p className="flex items-center">
              <Mail className={`mr-3 ${darkMode ? 'text-blue-400' : 'text-blue-500'}`} size={20} />
              <strong className={`${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>Email:</strong> 
              <a href={`mailto:${personalInfo.email}`} className={`ml-2 ${darkMode ? 'text-blue-400 hover:text-blue-300' : 'text-blue-600 hover:text-blue-800'} transition duration-300`}>
                {personalInfo.email}
              </a>
            </p>
            <p className="flex items-center">
              <MapPin className={`mr-3 ${darkMode ? 'text-blue-400' : 'text-blue-500'}`} size={20} />
              <strong className={`${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>Location:</strong> 
              <span className={`ml-2 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>{personalInfo.location}</span>
            </p>
            <p className="flex items-center">
              <Linkedin className={`mr-3 ${darkMode ? 'text-blue-400' : 'text-blue-500'}`} size={20} />
              <strong className={`${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>LinkedIn:</strong>
              <a 
                href={personalInfo.linkedin} 
                target="_blank" 
                rel="noopener noreferrer" 
                className={`ml-2 ${darkMode ? 'text-blue-400 hover:text-blue-300' : 'text-blue-600 hover:text-blue-800'} transition duration-300`}
              >
                Profile Link
              </a>
            </p>
            {personalInfo.github && (
              <p className="flex items-center">
                <Github className={`mr-3 ${darkMode ? 'text-blue-400' : 'text-blue-500'}`} size={20} />
                <strong className={`${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>GitHub:</strong>
                <a 
                  href={personalInfo.github} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className={`ml-2 ${darkMode ? 'text-blue-400 hover:text-blue-300' : 'text-blue-600 hover:text-blue-800'} transition duration-300`}
                >
                  Profile Link
                </a>
              </p>
            )}
          </div>
        </section>

        {/* Skills Section */}
        <section 
          id="skills" 
          ref={sectionRefs.skills} 
          className={`${darkMode ? 'bg-gray-800' : 'bg-white'} p-6 md:p-8 rounded-xl shadow-2xl section-hidden`}
        >
          <h2 className={`text-3xl md:text-4xl font-bold ${darkMode ? 'text-blue-300' : 'text-blue-800'} mb-6 flex items-center`}>
            <Code className={`mr-3 ${darkMode ? 'text-blue-400' : 'text-blue-600'}`} size={36} />Skills
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            {Object.entries(skills).map(([category, items]) => (
              <div 
                key={category} 
                className={`skill-card p-5 md:p-6 rounded-lg shadow-md border-l-4 ${darkMode ? 'border-blue-500 bg-gray-700' : 'border-blue-500 bg-gray-50'} hover:shadow-lg transition duration-300 ease-in-out`}
              >
                <h3 className={`text-lg md:text-xl font-semibold ${darkMode ? 'text-blue-300' : 'text-blue-700'} mb-3`}>{category}</h3>
                <p className={`text-sm md:text-base ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>{items}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Projects Section */}
        <section 
          id="projects" 
          ref={sectionRefs.projects} 
          className={`${darkMode ? 'bg-gray-800' : 'bg-white'} p-6 md:p-8 rounded-xl shadow-2xl section-hidden`}
        >
          <h2 className={`text-3xl md:text-4xl font-bold ${darkMode ? 'text-blue-300' : 'text-blue-800'} mb-6 flex items-center`}>
            <Lightbulb className={`mr-3 ${darkMode ? 'text-blue-400' : 'text-blue-600'}`} size={36} />Projects
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            {projects.map((project, index) => (
              <div 
                key={index} 
                className={`project-card ${darkMode ? 'bg-gray-700 border-blue-600' : 'bg-gray-50 border-blue-600'} p-6 rounded-lg shadow-md border-t-8 hover:shadow-xl transition duration-300 ease-in-out`}
              >
                <h3 className={`text-xl md:text-2xl font-semibold ${darkMode ? 'text-blue-300' : 'text-blue-800'} mb-3`}>{project.name}</h3>
                <p className={`text-base ${darkMode ? 'text-gray-300' : 'text-gray-700'} mb-4`}>{project.description}</p>
                {project.link && (
                  <a 
                    href={project.link} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className={`inline-flex items-center ${darkMode ? 'text-blue-400 hover:text-blue-300' : 'text-blue-600 hover:text-blue-800'} font-medium group transition duration-300`}
                  >
                    View Project <ExternalLink className="ml-2 group-hover:translate-x-1 transition duration-200" size={18} />
                  </a>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* Experience Section */}
        <section 
          id="experience" 
          ref={sectionRefs.experience} 
          className={`${darkMode ? 'bg-gray-800' : 'bg-white'} p-6 md:p-8 rounded-xl shadow-2xl section-hidden`}
        >
          <h2 className={`text-3xl md:text-4xl font-bold ${darkMode ? 'text-blue-300' : 'text-blue-800'} mb-6 flex items-center`}>
            <Briefcase className={`mr-3 ${darkMode ? 'text-blue-400' : 'text-blue-600'}`} size={36} />Experience
          </h2>
          <div className="space-y-8 md:space-y-10">
            {experience.map((job, index) => (
              <div key={index} className="relative pl-8 border-l-4 border-blue-400 group">
                <div className={`absolute -left-2 top-0 w-4 h-4 ${darkMode ? 'bg-blue-500' : 'bg-blue-600'} rounded-full group-hover:scale-125 transition duration-300`}></div>
                <h3 className={`text-xl md:text-2xl font-semibold ${darkMode ? 'text-gray-100' : 'text-gray-900'}`}>{job.title}</h3>
                <p className={`text-lg ${darkMode ? 'text-blue-400' : 'text-blue-600'}`}>{job.company} - {job.location}</p>
                <p className={`text-md ${darkMode ? 'text-gray-400' : 'text-gray-500'} mb-3`}>{job.duration}</p>
                <ul className="list-disc list-inside space-y-2 text-base">
                  {job.description.map((point, i) => (
                    <li key={i} className={darkMode ? 'text-gray-300' : 'text-gray-700'}>{point}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Education Section */}
        <section 
          id="education" 
          ref={sectionRefs.education} 
          className={`${darkMode ? 'bg-gray-800' : 'bg-white'} p-6 md:p-8 rounded-xl shadow-2xl section-hidden`}
        >
          <h2 className={`text-3xl md:text-4xl font-bold ${darkMode ? 'text-blue-300' : 'text-blue-800'} mb-6 flex items-center`}>
            <BookOpen className={`mr-3 ${darkMode ? 'text-blue-400' : 'text-blue-600'}`} size={36} />Education & Achievements
          </h2>
          <div className="space-y-6 mb-8 md:mb-10">
            <h3 className={`text-xl md:text-2xl font-bold ${darkMode ? 'text-blue-300' : 'text-blue-700'} mb-4`}>Educational Background</h3>
            {education.map((edu, index) => (
              <div 
                key={index} 
                className={`${darkMode ? 'bg-gray-700 border-blue-500' : 'bg-gray-50 border-blue-400'} p-4 md:p-5 rounded-lg shadow-md border-l-4`}
              >
                <h4 className={`text-lg md:text-xl font-semibold ${darkMode ? 'text-blue-300' : 'text-blue-600'}`}>{edu.course}</h4>
                <p className={`text-base md:text-lg ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>{edu.university}</p>
                <p className={`text-sm md:text-md ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                  {edu.year} | Percentage: {edu.percentage}
                </p>
              </div>
            ))}
          </div>

          <div className="space-y-6 mb-8 md:mb-10">
            <h3 className={`text-xl md:text-2xl font-bold ${darkMode ? 'text-blue-300' : 'text-blue-700'} mb-4`}>Certifications</h3>
            <ul className="list-disc list-inside space-y-2 md:space-y-3">
              {certifications.map((cert, index) => (
                <li 
                  key={index} 
                  className={`flex items-center text-base md:text-lg ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}
                >
                  <Award className={`mr-3 ${darkMode ? 'text-yellow-400' : 'text-yellow-500'}`} size={20} />{cert}
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-6">
            <h3 className={`text-xl md:text-2xl font-bold ${darkMode ? 'text-blue-300' : 'text-blue-700'} mb-4`}>Achievements</h3>
            <ul className="list-disc list-inside space-y-2 md:space-y-3">
              {achievements.map((ach, index) => (
                <li 
                  key={index} 
                  className={`flex items-start text-base md:text-lg ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}
                >
                  <span className={`mr-3 ${darkMode ? 'text-green-400' : 'text-green-500'} text-2xl`}>•</span>{ach}
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Contact Section */}
        <section 
          id="contact" 
          ref={sectionRefs.contact} 
          className={`${darkMode ? 'bg-gray-800' : 'bg-white'} p-6 md:p-8 rounded-xl shadow-2xl text-center section-hidden`}
        >
          <h2 className={`text-3xl md:text-4xl font-bold ${darkMode ? 'text-blue-300' : 'text-blue-800'} mb-6 flex items-center justify-center`}>
            <Mail className={`mr-3 ${darkMode ? 'text-blue-400' : 'text-blue-600'}`} size={36} />Contact Me
          </h2>
          <p className={`text-base md:text-lg mb-6 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
            I'm currently available for new opportunities and collaborations. Feel free to reach out!
          </p>
          <div className="flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-4 lg:space-x-6">
            <a 
              href={`mailto:${personalInfo.email}`} 
              className={`flex items-center justify-center ${darkMode ? 'bg-blue-600 hover:bg-blue-700' : 'bg-blue-600 hover:bg-blue-700'} text-white px-6 py-3 md:px-8 md:py-4 rounded-full text-base md:text-lg font-semibold transition duration-300 shadow-lg transform hover:scale-105`}
            >
              <Mail className="mr-3" size={20} /> Email Me
            </a>
            <a 
              href={personalInfo.linkedin} 
              target="_blank" 
              rel="noopener noreferrer" 
              className={`flex items-center ${darkMode ? 'text-blue-400 hover:text-blue-300' : 'text-blue-600 hover:text-blue-800'} text-base md:text-lg font-medium transition duration-300`}
            >
              <Linkedin className="mr-3" size={20} /> Connect on LinkedIn
            </a>
            {personalInfo.github && (
              <a 
                href={personalInfo.github} 
                target="_blank" 
                rel="noopener noreferrer" 
                className={`flex items-center ${darkMode ? 'text-gray-400 hover:text-gray-300' : 'text-gray-700 hover:text-gray-900'} text-base md:text-lg font-medium transition duration-300`}
              >
                <Github className="mr-3" size={20} /> Visit GitHub
              </a>
            )}
          </div>
          <p className={`text-lg md:text-xl mt-6 ${darkMode ? 'text-gray-300' : 'text-gray-800'} flex items-center justify-center`}>
            <Phone className="mr-3" size={24} />Phone: {personalInfo.phone}
          </p>
        </section>
      </main>

      {/* Back to Top Button */}
      {showBackToTop && (
        <button
          onClick={scrollToTop}
          className={`fixed bottom-8 right-8 ${darkMode ? 'bg-blue-600 hover:bg-blue-700' : 'bg-blue-600 hover:bg-blue-700'} text-white p-3 rounded-full shadow-lg transition duration-300 transform hover:scale-110 z-50`}
          aria-label="Back to top"
        >
          <ArrowUpCircle size={28} />
        </button>
      )}

      {/* Footer */}
      <footer className={`${darkMode ? 'bg-gray-900' : 'bg-gray-900'} text-white text-center p-6 mt-16 rounded-t-lg`}>
        <p>&copy; {new Date().getFullYear()} {personalInfo.name}. All rights reserved.</p>
        <p className="text-sm mt-2">Designed with <span className="text-red-500">&hearts;</span> using React & Tailwind CSS</p>
      </footer>
    </div>
  );
}

export default App;
