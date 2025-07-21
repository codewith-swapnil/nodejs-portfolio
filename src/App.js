// src/App.js
import React, { useState, useEffect, useRef } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faBars, faTimes, faChevronDown } from '@fortawesome/free-solid-svg-icons';

function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const sectionRefs = {
    home: useRef(null),
    about: useRef(null),
    skills: useRef(null),
    experience: useRef(null), // Added experience section ref
    projects: useRef(null),
    contact: useRef(null),
  };

  const personalInfo = {
    name: "Swapnil Bhalerao",
    title: "Node.js Developer | 2.5 Years Experience",
    summary: "Node.js Developer with 2+ years of experience in building scalable, high-performance backend applications. Expertise in developing RESTful APIs, GraphQL services, and microservices architectures using Node.js. Successfully improved API response times by 40% through optimisation techniques like caching and database indexing. Strong experience in cloud deployment (AWS, Azure, Firebase) and serverless architectures.",
    about: "With a strong foundation in both front-end and back-end technologies, I specialize in creating dynamic and responsive web applications. My journey in tech is driven by curiosity and a commitment to continuous learning, always seeking new challenges to enhance my skills. I enjoy turning complex problems into simple, elegant solutions, and I'm particularly excited about the intersection of web development and AI.",
    skills: [
      { name: "Node.js", icon: "https://upload.wikimedia.org/wikipedia/commons/d/d9/Node.js_logo.svg" },
      { name: "Express.js", icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/express/express-original.svg" },
      { name: "NestJS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nestjs/nestjs-plain.svg" },
      { name: "TypeScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg" },
      { name: "JavaScript (ES6+)", icon: "https://upload.wikimedia.org/wikipedia/commons/9/99/Unofficial_JavaScript_logo_2.svg" },
      { name: "RESTful APIs", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postman/postman-original.svg" }, // Using Postman icon for RESTful APIs
      { name: "GraphQL", icon: "https://www.vectorlogo.zone/logos/graphql/graphql-icon.svg" },
      { name: "WebSockets", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/websocket/websocket-original.svg" },
      { name: "Socket.IO", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/socketio/socketio-original.svg" },
      { name: "React.js", icon: "https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg" },
      { name: "MongoDB", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg" },
      { name: "PostgreSQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg" },
      { name: "MySQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg" },
      { name: "Redis", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/redis/redis-original.svg" },
      { name: "Firebase", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/firebase/firebase-plain.svg" },
      { name: "AWS (Lambda, S3, EC2, RDS, API Gateway, CloudWatch)", icon: "https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg" },
      { name: "Azure Functions", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/azure/azure-original.svg" },
      { name: "Docker", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg" },
      { name: "Kubernetes", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/kubernetes/kubernetes-plain.svg" },
      { name: "Terraform", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/terraform/terraform-original.svg" },
      { name: "CI/CD (GitHub Actions, Jenkins, CircleCI)", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/gitlab/gitlab-original.svg" },
      { name: "Jest", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/jest/jest-plain.svg" },
      { name: "Mocha", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mocha/mocha-plain.svg" },
      { name: "Chai", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/chai/chai-original.svg" },
      { name: "Supertest", icon: "https://www.vectorlogo.zone/logos/expressjs/expressjs-icon.svg" },
      { name: "Postman", icon: "https://www.vectorlogo.zone/logos/getpostman/getpostman-icon.svg" },
      { name: "New Relic", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/newrelic/newrelic-original.svg" },
      { name: "Sentry", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/sentry/sentry-original.svg" },
      { name: "Agile", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/confluence/confluence-original.svg" },
      { name: "Scrum", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/jira/jira-original.svg" },
      { name: "Jira", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/jira/jira-original.svg" },
      { name: "Microservices Architecture", icon: "https://www.nginx.com/wp-content/uploads/2019/07/microservices-architecture-illustration.png" },
      { name: "Message Queues (RabbitMQ, Kafka, NATS)", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/rabbitmq/rabbitmq-original.svg" },
      { name: "WordPress", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/wordpress/wordpress-plain.svg" },
    ],
    experience: [
      {
        title: "Backend Developer",
        company: "Subcodevs IT Solutions (Startup)",
        location: "Noida",
        duration: "October 2022 - April 2025",
        description: [
          "Designed and developed scalable microservices using Node.js & Express.js, handling 10K+ concurrent requests.",
          "Improved database efficiency by reducing query execution times by 50% with Redis caching and indexing.",
          "Built real-time applications using WebSockets and Socket.IO for live chat and event-based systems.",
          "Secured REST APIs using JWT-based authentication and implemented OAuth 2.0 authorization flows.",
          "Led a team of 5+ backend engineers, mentoring them on best coding practices and system design patterns.",
        ],
      },
      {
        title: "Junior (Intern) Backend Developer",
        company: "Nextra IT Solutions (Startup)",
        location: "Delhi",
        duration: "June 2022 - October 2022",
        description: [
          "Developed backend APIs using Node.js and MongoDB, supporting multiple front-end applications.",
          "Integrated third-party services like Stripe for payments and Firebase for real-time notifications.",
          "Implemented unit and integration testing using Jest and Supertest, ensuring 90%+ test coverage.",
          "Migrated monolithic backend services to microservices architecture, improving maintainability.",
          "Worked with DevOps engineers to deploy applications on AWS using Docker and Kubernetes.",
        ],
      },
    ],
    projects: [
      {
        name: "Real-time Chat Application",
        description: "Built a chat system using WebSockets and Redis, enabling real-time messaging with typing indicators and message persistence.",
        technologies: ["Node.js", "Express.js", "WebSockets", "Socket.IO", "Redis"],
        github: "#", // Add GitHub link if available
        live: "https://user.pocketi.app/"
      },
    ],
    contact: {
      email: "bhaleraoswapnil50@gmail.com",
      phone: "+91-8087433835",
      linkedin: "https://www.linkedin.com/in/swapnil-bhalerao-a92a4b21b",
      github: "https://github.com/codewith-swapnil",
      resume: "https://docs.google.com/document/d/YOUR_GOOGLE_DRIVE_RESUME_ID/edit?usp=sharing" // Replace YOUR_GOOGLE_DRIVE_RESUME_ID with your actual resume's public link
    }
  };

  useEffect(() => {
    document.documentElement.classList.add('dark');
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.remove('section-hidden');
            entry.target.classList.add('animate-fade-in-up');
          } else {
            entry.target.classList.add('section-hidden');
            entry.target.classList.remove('animate-fade-in-up');
          }
        });
      },
      { threshold: 0.1 }
    );

    Object.values(sectionRefs).forEach(ref => {
      if (ref.current) {
        observer.observe(ref.current);
        ref.current.classList.add('section-hidden');
      }
    });

    return () => {
      Object.values(sectionRefs).forEach(ref => {
        if (ref.current) {
          observer.unobserve(ref.current);
        }
      });
    };
  }, [sectionRefs]);

  const scrollToSection = (sectionId) => {
    sectionRefs[sectionId].current.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
    setMobileMenuOpen(false);
  };

  return (
    <Router>
      <div className="min-h-screen flex flex-col bg-gray-900 text-white transition-colors duration-300">

        {/* Header/Navbar */}
        <header className="fixed w-full z-50 bg-gray-800 shadow-md transition-colors duration-300">
          <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
            <div className="text-2xl font-bold text-blue-400">
              <Link to="/" onClick={() => scrollToSection('home')}>Swapnil</Link>
            </div>
            <div className="hidden md:flex space-x-8 items-center">
              <Link to="/" onClick={() => scrollToSection('home')} className="text-gray-300 hover:text-blue-400 transition-colors duration-200">Home</Link>
              <Link to="/#about" onClick={() => scrollToSection('about')} className="text-gray-300 hover:text-blue-400 transition-colors duration-200">About</Link>
              <Link to="/#skills" onClick={() => scrollToSection('skills')} className="text-gray-300 hover:text-blue-400 transition-colors duration-200">Skills</Link>
              <Link to="/#experience" onClick={() => scrollToSection('experience')} className="text-gray-300 hover:text-blue-400 transition-colors duration-200">Experience</Link> {/* Added Experience link */}
              <Link to="/#projects" onClick={() => scrollToSection('projects')} className="text-gray-300 hover:text-blue-400 transition-colors duration-200">Projects</Link>
              <Link to="/#contact" onClick={() => scrollToSection('contact')} className="text-gray-300 hover:text-blue-400 transition-colors duration-200">Contact</Link>
            </div>
            <div className="md:hidden flex items-center space-x-4">
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="text-gray-300 text-2xl"
                aria-label="Toggle mobile menu"
              >
                <FontAwesomeIcon icon={mobileMenuOpen ? faTimes : faBars} />
              </button>
            </div>
          </nav>
          {/* Mobile Menu */}
          <div className={`mobile-menu ${mobileMenuOpen ? 'mobile-menu-open' : 'mobile-menu-closed'} md:hidden bg-gray-800 shadow-lg`}>
            <div className="flex flex-col items-center py-4 space-y-4">
              <Link to="/" onClick={() => scrollToSection('home')} className="text-gray-200 hover:text-blue-400 text-lg">Home</Link>
              <Link to="/#about" onClick={() => scrollToSection('about')} className="text-gray-200 hover:text-blue-400 text-lg">About</Link>
              <Link to="/#skills" onClick={() => scrollToSection('skills')} className="text-gray-200 hover:text-blue-400 text-lg">Skills</Link>
              <Link to="/#experience" onClick={() => scrollToSection('experience')} className="text-gray-200 hover:text-blue-400 text-lg">Experience</Link> {/* Added Experience link */}
              <Link to="/#projects" onClick={() => scrollToSection('projects')} className="text-gray-200 hover:text-blue-400 text-lg">Projects</Link>
              <Link to="/#contact" onClick={() => scrollToSection('contact')} className="text-gray-200 hover:text-blue-400 text-lg">Contact</Link>
            </div>
          </div>
        </header>

        {/* Hero Section */}
        <section
          id="home"
          ref={sectionRefs.home}
          className="relative h-screen flex items-center justify-center text-center bg-cover bg-center overflow-hidden"
          style={{
            backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)), url(https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)'
          }}
        >
          <div className="relative z-10 text-white p-8 rounded-lg max-w-3xl animate-fade-in-up pt-24 md:pt-32">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-4 leading-tight drop-shadow-lg">Hi, I'm <span className="text-blue-300">{personalInfo.name}</span></h2>
            <p className="text-xl md:text-2xl lg:text-3xl font-light mb-6 opacity-90 drop-shadow-md">{personalInfo.title}</p>
            <p className="text-base md:text-lg lg:text-xl mb-8 max-w-2xl mx-auto drop-shadow-sm">{personalInfo.summary}</p>
            <div className="flex justify-center space-x-6">
              <a
                href={personalInfo.contact.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-full transition duration-300 ease-in-out transform hover:scale-105 shadow-lg"
              >
                <FontAwesomeIcon icon={faLinkedin} className="mr-2" /> LinkedIn
              </a>
              <a
                href={personalInfo.contact.github}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-700 hover:bg-gray-800 text-white font-semibold py-3 px-6 rounded-full transition duration-300 ease-in-out transform hover:scale-105 shadow-lg"
              >
                <FontAwesomeIcon icon={faGithub} className="mr-2" /> GitHub
              </a>
            </div>
            <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-white">
              <FontAwesomeIcon icon={faChevronDown} className="text-3xl animate-bounce" />
            </div>
          </div>
        </section>

        {/* Main Content Sections */}
        <main className="container mx-auto p-6 mt-[72px] md:mt-24 space-y-16">

          {/* About Section */}
          <section id="about" ref={sectionRefs.about} className="py-16">
            <h2 className="text-4xl font-bold text-center mb-10 border-b-2 pb-4 border-blue-400 inline-block">About Me</h2>
            <div className="flex flex-col md:flex-row items-center justify-center space-y-8 md:space-y-0 md:space-x-12">
              <div className="md:w-1/3">
                <img
                  src="Profile_Picture.png" // Replace with your profile picture
                  alt="Swapnil Bhalerao"
                  className="rounded-full shadow-lg border-4 border-blue-400 mx-auto w-48 h-48 md:w-64 md:h-64 object-cover"
                />
              </div>
              <div className="md:w-2/3 text-lg leading-relaxed text-center md:text-left">
                <p className="mb-4">{personalInfo.about}</p>
                <a
                  href={personalInfo.contact.resume}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 px-6 rounded-full transition duration-300 ease-in-out mt-4"
                >
                  View Resume
                </a>
              </div>
            </div>
          </section>

          {/* Skills Section */}
          <section id="skills" ref={sectionRefs.skills} className="py-16">
            <h2 className="text-4xl font-bold text-center mb-10 border-b-2 pb-4 border-blue-400 inline-block">Skills</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
              {personalInfo.skills.map((skill, index) => (
                <div key={index} className="skill-card bg-gray-800 rounded-lg p-6 text-center shadow-lg hover:shadow-xl transition-all duration-300 ease-in-out transform hover:-translate-y-2">
                  <img src={skill.icon} alt={skill.name} className="h-16 w-16 mx-auto mb-4" />
                  <p className="text-xl font-semibold">{skill.name}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Experience Section */}
          <section id="experience" ref={sectionRefs.experience} className="py-16">
            <h2 className="text-4xl font-bold text-center mb-10 border-b-2 pb-4 border-blue-400 inline-block">Experience</h2>
            <div className="space-y-12">
              {personalInfo.experience.map((job, index) => (
                <div key={index} className="experience-card bg-gray-800 rounded-lg p-8 shadow-lg hover:shadow-2xl transition-all duration-300 ease-in-out">
                  <h3 className="text-2xl font-bold text-blue-400 mb-2">{job.title}</h3>
                  <p className="text-lg text-gray-300 mb-1">{job.company} - {job.location}</p>
                  <p className="text-md text-gray-400 mb-4">{job.duration}</p>
                  <ul className="list-disc list-inside space-y-2 text-gray-200">
                    {job.description.map((point, i) => (
                      <li key={i}>{point}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>

          {/* Projects Section */}
          <section id="projects" ref={sectionRefs.projects} className="py-16">
            <h2 className="text-4xl font-bold text-center mb-10 border-b-2 pb-4 border-blue-400 inline-block">Projects</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
              {personalInfo.projects.map((project, index) => (
                <div key={index} className="project-card bg-gray-800 rounded-lg p-8 shadow-lg hover:shadow-2xl transition-all duration-300 ease-in-out transform hover:-translate-y-2">
                  <h3 className="text-2xl font-bold mb-3 text-blue-400">{project.name}</h3>
                  <p className="text-gray-300 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech, i) => (
                      <span key={i} className="bg-blue-700 text-blue-200 text-xs font-semibold px-2.5 py-0.5 rounded-full">
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex justify-start space-x-4">
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-300 hover:text-white transition-colors text-xl"
                        aria-label={`GitHub repository for ${project.name}`}
                      >
                        <FontAwesomeIcon icon={faGithub} />
                      </a>
                    )}
                    {project.live && (
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-500 hover:text-blue-600 transition-colors text-xl"
                        aria-label={`Live demo for ${project.name}`}
                      >
                        Live Demo
                      </a>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Contact Section */}
          <section id="contact" ref={sectionRefs.contact} className="py-16 text-center">
            <h2 className="text-4xl font-bold text-center mb-10 border-b-2 pb-4 border-blue-400 inline-block">Contact Me</h2>
            <p className="text-lg mb-8 max-w-2xl mx-auto">
              Feel free to reach out to me! Whether you have a project in mind, a question, or just want to connect, I'm always open to new opportunities.
            </p>
            <div className="flex flex-col items-center space-y-4">
              <a href={`mailto:${personalInfo.contact.email}`} className="flex items-center text-xl text-blue-500 hover:underline">
                <span className="mr-2">📧</span> {personalInfo.contact.email}
              </a>
              <a href={`tel:${personalInfo.contact.phone}`} className="flex items-center text-xl text-blue-500 hover:underline">
                <span className="mr-2">📞</span> {personalInfo.contact.phone}
              </a>
              <div className="flex space-x-6 mt-4">
                <a
                  href={personalInfo.contact.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-blue-400 text-3xl transition-colors"
                  aria-label="LinkedIn Profile"
                >
                  <FontAwesomeIcon icon={faLinkedin} />
                </a>
                <a
                  href={personalInfo.contact.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-white text-3xl transition-colors"
                  aria-label="GitHub Profile"
                >
                  <FontAwesomeIcon icon={faGithub} />
                </a>
              </div>
            </div>
          </section>

        </main>

        {/* Footer */}
        <footer className="w-full bg-gray-900 text-gray-300 py-8 text-center mt-16">
          <div className="container mx-auto px-6">
            <p className="mb-4">&copy; {new Date().getFullYear()} {personalInfo.name}. All rights reserved.</p>
            {/* <div className="flex justify-center space-x-6">
              <a href={personalInfo.contact.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                <FontAwesomeIcon icon={faLinkedin} size="2x" />
              </a>
              <a href={personalInfo.contact.github} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                <FontAwesomeIcon icon={faGithub} size="2x" />
              </a>
            </div> */}
          </div>
        </footer>
      </div>
    </Router>
  );
}

export default App;