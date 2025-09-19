import React, { useState, useEffect } from 'react';

import myImage from "../src/assets/images/WhatsApp Image 2025-06-10 at 3.33.25 PM.jpeg"
import { 
  ChevronDown, 
  ExternalLink, 
  Github, 
  Linkedin, 
  Mail, 
  Phone, 
  MapPin,
  Calendar,
  Award,
  Code,
  Database,
  Globe,
  Smartphone,
  Palette,
  Users,
  Target,
  MessageCircle,
  Send
} from 'lucide-react';
import ExperienceCard from './components/ExperienceCard';

function App() {
  const [activeSection, setActiveSection] = useState('home');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const [formData,setFormData] = useState({
    name:"",email:"",message:""
  })

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>)=>{
    const {name,value}=e.target;
   setFormData((prev) => ({ ...prev, [name]: value }));  
    
  }

  const handleContactSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault();
  const formElement = e.target as HTMLFormElement;
  const formDataObj = new FormData(formElement);

    formDataObj.append("access_key", "fcec693f-d4d9-4aa9-bc22-73f4ffd87d83");

    const object = Object.fromEntries(formDataObj);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: json
    }).then((res) => res.json());

    if (res.success) {
      console.log("Success", res);
    }
};
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'work', 'education', 'experience', 'skills', 'contact'];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (current) {
        setActiveSection(current);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  const projects = [
    {
      title: "E-Commerce Platform",
      description: "A full-stack e-commerce solution with React, Node.js, and MongoDB. Features include user authentication, payment integration, and admin dashboard.",
      tech: ["React", "Node.js", "MongoDB", "Stripe"],
      github: "#",
      demo: "#",
      image: "https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=500&h=300&fit=crop"
    },
    {
      title: "Task Management App",
      description: "A collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features.",
      tech: ["React", "Firebase", "Tailwind CSS"],
      github: "#",
      demo: "#",
      image: "https://images.pexels.com/photos/3184298/pexels-photo-3184298.jpeg?auto=compress&cs=tinysrgb&w=500&h=300&fit=crop"
    },
    {
      title: "Weather Dashboard",
      description: "A responsive weather application with location-based forecasts, interactive maps, and detailed weather analytics.",
      tech: ["JavaScript", "API Integration", "Chart.js"],
      github: "#",
      demo: "#",
      image: "https://images.pexels.com/photos/1118873/pexels-photo-1118873.jpeg?auto=compress&cs=tinysrgb&w=500&h=300&fit=crop"
    }
  ];

  const skills = [
    { name: "JavaScript", level: 70, icon: Code },
    { name: "React", level: 75, icon: Code },
    { name: "MySQL", level: 80, icon: Database },
    { name: "Java", level: 80, icon: Code },
    { name: "Spring Boot", level: 80, icon: Code },
    { name: "Team Collaboration", level: 95, icon: Users }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md z-50 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="text-2xl font-bold text-blue-700">KG</div>
            
            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-8">
              {['home', 'about', 'work', 'education', 'experience', 'skills', 'contact'].map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className={`capitalize transition-colors ${
                    activeSection === section 
                      ? 'text-blue-700 font-semibold' 
                      : 'text-gray-600 hover:text-blue-700'
                  }`}
                >
                  {section === 'work' ? 'Projects' : section}
                </button>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <div className="w-6 h-6 flex flex-col justify-center items-center">
                <span className={`block h-0.5 w-6 bg-gray-600 transition-all ${isMenuOpen ? 'rotate-45 translate-y-0.5' : ''}`}></span>
                <span className={`block h-0.5 w-6 bg-gray-600 mt-1 transition-all ${isMenuOpen ? 'opacity-0' : ''}`}></span>
                <span className={`block h-0.5 w-6 bg-gray-600 mt-1 transition-all ${isMenuOpen ? '-rotate-45 -translate-y-1.5' : ''}`}></span>
              </div>
            </button>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="md:hidden pb-4">
              <div className="flex flex-col space-y-4">
                {['home', 'about', 'work', 'education', 'experience', 'skills', 'contact'].map((section) => (
                  <button
                    key={section}
                    onClick={() => scrollToSection(section)}
                    className="capitalize text-left text-gray-600 hover:text-blue-700 transition-colors"
                  >
                    {section === 'work' ? 'Projects' : section}
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-white pt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="mb-8">
            <div className="w-48 h-48 mx-auto mb-8 rounded-full bg-gradient-to-r from-blue-400 to-blue-600 flex items-center justify-center text-white text-6xl font-bold shadow-xl">
              {/* KG */}
              <img src={myImage} alt="" className='rounded-full' />
            </div>
            <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-4">
              Kiron Gogoi
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Aspiring Software Developer | Tech Enthusiast | Problem Solver
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                onClick={() => scrollToSection('work')}
                className="bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-800 transform hover:scale-105 transition-all duration-200 shadow-lg"
              >
                View My Work
              </button>
              <button 
                onClick={() => scrollToSection('contact')}
                className="border-2 border-blue-700 text-blue-700 px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 hover:text-white transform hover:scale-105 transition-all duration-200"
              >
                Contact Me
              </button>
            </div>
          </div>
          <div className="animate-bounce">
            <ChevronDown className="mx-auto text-gray-400" size={32} />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">About Me</h2>
            <div className="w-20 h-1 bg-blue-700 mx-auto"></div>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Hello, I'm Kiron!</h3>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                I'm a passionate software developer with a keen interest in creating innovative solutions 
                that make a difference. My journey in technology began with curiosity and has evolved into 
                a deep commitment to continuous learning and excellence.
              </p>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                I thrive on tackling complex challenges and transforming ideas into reality through clean, 
                efficient code. When I'm not coding, you'll find me exploring new technologies, contributing 
                to open-source projects, or mentoring aspiring developers.
              </p>
              <div className="flex flex-wrap gap-4">
                <div className="flex items-center text-gray-600">
                  <MapPin size={20} className="mr-2 text-blue-700" />
                  <span>Guwahati, Assam</span>
                </div>
                <div className="flex items-center text-gray-600">
                  <Mail size={20} className="mr-2 text-blue-700" />
                  <span>kirongogoi007@gmail.com</span>
                </div>
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-blue-50 p-6 rounded-xl text-center">
                <Target className="mx-auto mb-4 text-blue-700" size={48} />
                <h4 className="font-semibold text-gray-900 mb-2">Goal-Oriented</h4>
                <p className="text-gray-600 text-sm">Focused on delivering results and exceeding expectations</p>
              </div>
              <div className="bg-green-50 p-6 rounded-xl text-center">
                <Code className="mx-auto mb-4 text-green-700" size={48} />
                <h4 className="font-semibold text-gray-900 mb-2">Clean Code</h4>
                <p className="text-gray-600 text-sm">Writing maintainable and efficient solutions</p>
              </div>
              <div className="bg-purple-50 p-6 rounded-xl text-center">
                <Users className="mx-auto mb-4 text-purple-700" size={48} />
                <h4 className="font-semibold text-gray-900 mb-2">Team Player</h4>
                <p className="text-gray-600 text-sm">Collaborating effectively in diverse teams</p>
              </div>
              <div className="bg-orange-50 p-6 rounded-xl text-center">
                <MessageCircle className="mx-auto mb-4 text-orange-700" size={48} />
                <h4 className="font-semibold text-gray-900 mb-2">Communicator</h4>
                <p className="text-gray-600 text-sm">Clear and effective communication skills</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="work" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">My Projects</h2>
            <div className="w-20 h-1 bg-blue-700 mx-auto"></div>
            <p className="text-xl text-gray-600 mt-6 max-w-2xl mx-auto">
              Here are some of the projects I've worked on that showcase my skills and passion for development.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transform hover:scale-105 transition-all duration-300">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{project.title}</h3>
                  <p className="text-gray-600 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech, techIndex) => (
                      <span 
                        key={techIndex}
                        className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-4">
                    <a 
                      href={project.github}
                      className="flex items-center text-gray-600 hover:text-blue-700 transition-colors"
                    >
                      <Github size={20} className="mr-2" />
                      <span>Code</span>
                    </a>
                    <a 
                      href={project.demo}
                      className="flex items-center text-gray-600 hover:text-blue-700 transition-colors"
                    >
                      <ExternalLink size={20} className="mr-2" />
                      <span>Live Demo</span>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Education</h2>
            <div className="w-20 h-1 bg-blue-700 mx-auto"></div>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="relative">
              <div className="absolute left-8 md:left-1/2 transform md:-translate-x-px h-full w-0.5 bg-blue-200"></div>
              
              <div className="space-y-12">
                <div className="relative flex items-center">
                  <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 w-8 h-8 bg-blue-700 rounded-full flex items-center justify-center">
                    <Award className="text-white" size={20} />
                  </div>
                  <div className="ml-16 md:ml-0 md:w-1/2 md:pr-8 md:text-right">
                    <div className="bg-blue-50 p-6 rounded-xl">
                      <h3 className="text-xl font-bold text-gray-900 mb-2">Master of Computer Application</h3>
                      <p className="text-blue-700 font-semibold mb-2">Computer Science & Engineering</p>
                      <p className="text-gray-600 mb-2">Rajiv Gandhi University University</p>
                      <p className="text-gray-500 text-sm flex items-center md:justify-end">
                        <Calendar size={16} className="mr-2" />
                        2022 - 2024
                      </p>
                      {/* <p className="text-gray-600 mt-3">CGPA: 8.5/10</p> */}
                    </div>
                  </div>
                </div>
                
                <div className="relative flex items-center">
                  <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 w-8 h-8 bg-green-600 rounded-full flex items-center justify-center">
                    <Award className="text-white" size={20} />
                  </div>
                  <div className="ml-16 md:ml-0 md:w-1/2 md:pl-8 md:ml-auto">
                    <div className="bg-green-50 p-6 rounded-xl">
                      <h3 className="text-xl font-bold text-gray-900 mb-2">Bachelor in Information Technology</h3>
                      {/* <p className="text-green-700 font-semibold mb-2">Science Stream</p> */}
                      <p className="text-gray-600 mb-2">Jorhat Institute of Science and Technology</p>
                      <p className="text-gray-500 text-sm flex items-center">
                        <Calendar size={16} className="mr-2" />
                        2019 - 2022
                      </p>
                      {/* <p className="text-gray-600 mt-3">Percentage: 92%</p> */}
                    </div>
                  </div>
                </div>
                 
                {/* <div className="relative flex items-center">
                  <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 w-8 h-8 bg-purple-600 rounded-full flex items-center justify-center">
                    <Code className="text-white" size={20} />
                  </div>
                  <div className="ml-16 md:ml-0 md:w-1/2 md:pr-8 md:text-right">
                    <div className="bg-purple-50 p-6 rounded-xl">
                      <h3 className="text-xl font-bold text-gray-900 mb-2">Web Development Certification</h3>
                      <p className="text-purple-700 font-semibold mb-2">Full Stack Development</p>
                      <p className="text-gray-600 mb-2">Online Platform</p>
                      <p className="text-gray-500 text-sm flex items-center md:justify-end">
                        <Calendar size={16} className="mr-2" />
                        2023
                      </p>
                    </div>
                  </div>
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Experience</h2>
            <div className="w-20 h-1 bg-blue-700 mx-auto"></div>
          </div>
          
          <div className="max-w-4xl mx-auto">
            {/* <div className="bg-white rounded-xl shadow-lg p-8">
              <div className="text-center mb-8">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Code className="text-blue-700" size={32} />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Ready for New Opportunities</h3>
                <p className="text-gray-600 mt-2">
                  I'm actively seeking internship and entry-level positions where I can apply my skills 
                  and continue learning from experienced professionals.
                </p>
              </div>
              
              <div className="grid md:grid-cols-2 gap-8">
                <div className="text-center">
                  <h4 className="font-semibold text-gray-900 mb-4">What I Bring</h4>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Fresh perspective and enthusiasm</li>
                    <li>• Strong foundation in programming</li>
                    <li>• Eagerness to learn and adapt</li>
                    <li>• Problem-solving mindset</li>
                  </ul>
                </div>
                <div className="text-center">
                  <h4 className="font-semibold text-gray-900 mb-4">Looking For</h4>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Mentorship opportunities</li>
                    <li>• Challenging projects</li>
                    <li>• Collaborative team environment</li>
                    <li>• Growth-oriented company</li>
                  </ul>
                </div>
              </div>
            </div> */}

           <div className="bg-gray-200 p-8 min-h-screen">
      <div className="max-w-6xl mx-auto grid gap-8 grid-cols-[repeat(auto-fit,minmax(20rem,1fr))]">
        
      <ExperienceCard title={<span className="text-xl font-bold text-gray-900">Software Developer Intern</span>}>
        <h3 className="text-lg font-semibold text-gray-800">
           XopunTech (India) Pvt. Ltd. – Guwahati, India
        </h3>
        <p className="mt-2 text-gray-700">
          • Developed full-stack web applications using Java, Spring Boot, and React <br />
          • Designed and optimized backend APIs for scalability <br />
          • Designed database schemas and queries for efficient data handling<br />
          • Enhanced problem-solving skills through regular DSA practice
        </p>
        </ExperienceCard>



        <ExperienceCard title={<span className="text-xl font-bold text-gray-900">IT Supervisor</span>}>
        <h3 className="text-lg font-semibold text-gray-800">
            Local Food Production Company – Jorhat, India
        </h3>
        <p className="mt-2 text-gray-700">
         <ul className="list-disc list-inside text-gray-700">
           <li>Managed billing, stock, and production systems for a private factory</li>
           <li>Collaborated with staff, managers, and clients daily</li>
           <li>Maintained efficient and sustainable business operations</li>
          </ul>
        </p>
        </ExperienceCard>

          <ExperienceCard title={<span className="text-xl font-bold text-gray-900"> Junior Software Developer Intern</span>}>
        <h3 className="text-lg font-semibold text-gray-800">
             National Institute of Electronics and Information Tecnology
        </h3>
        <p className="mt-2 text-gray-700">
         <ul className="list-disc list-inside text-gray-700">
          <li>Learned to be detail-oriented, analytical, and self-driven as a programmer</li>
          <li>Gained extensive experience building user-facing applications</li>
          <li>Developed skills in HTML, CSS, PHP, and JavaScript</li>
        </ul>
        </p>
        </ExperienceCard>
      </div>
    </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Skills</h2>
            <div className="w-20 h-1 bg-blue-700 mx-auto"></div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-8">Technical Skills</h3>
              <div className="space-y-6">
                {skills.map((skill, index) => (
                  <div key={index} className="flex items-center">
                    <skill.icon className="text-blue-700 mr-4" size={24} />
                    <div className="flex-1">
                      <div className="flex justify-between items-center mb-2">
                        <span className="font-medium text-gray-900">{skill.name}</span>
                        <span className="text-gray-600">{skill.level}%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div 
                          className="bg-blue-700 h-2 rounded-full transition-all duration-1000 ease-out"
                          style={{ width: `${skill.level}%` }}
                        ></div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-8">Technologies</h3>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { name: "Frontend", tech: ["HTML/CSS", "JavaScript", "React"], color: "blue" },
                  { name: "Backend", tech: ["Node.js", "Spring Boot"], color: "green" },
                  { name: "Database", tech: ["MongoDB", "MySQL", "PostgreSQL"], color: "purple" },
                  { name: "Tools", tech: ["Git", "Docker", "VS Code", "IntelliJ","Figma"], color: "orange" }
                ].map((category, index) => (
                  <div key={index} className={`bg-${category.color}-50 p-6 rounded-xl`}>
                    <h4 className={`font-semibold text-${category.color}-700 mb-3`}>{category.name}</h4>
                    <ul className="space-y-1">
                      {category.tech.map((tech, techIndex) => (
                        <li key={techIndex} className="text-gray-600 text-sm">{tech}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Get In Touch</h2>
            <div className="w-20 h-1 bg-blue-400 mx-auto"></div>
            <p className="text-xl text-gray-300 mt-6 max-w-2xl mx-auto">
              I'm always open to discussing new opportunities and interesting projects.
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold text-white mb-6">Let's Connect</h3>
              <p className="text-gray-300 mb-8">
                Whether you have a project in mind, want to collaborate, or just want to say hello, 
                I'd love to hear from you. Let's create something amazing together!
              </p>
              
              <div className="space-y-4">
                <div className="flex items-center text-gray-300">
                  <Mail className="mr-4 text-blue-400" size={24} />
                  <span>kirongogoi007@gmail.com</span>
                </div>
                {/* <div className="flex items-center text-gray-300">
                  <Phone className="mr-4 text-blue-400" size={24} />
                  <span>+91 98765 43210</span>
                </div> */}
                <div className="flex items-center text-gray-300">
                  <MapPin className="mr-4 text-blue-400" size={24} />
                  <span>Guwahati, Assam, India</span>
                </div>
              </div>
              
              <div className="flex space-x-6 mt-8">
                <a href="https://github.com/Kiron-gogoi" className="text-gray-300 hover:text-blue-400 transition-colors">
                  <Github size={28} />
                </a>
                <a href="https://www.linkedin.com/in/kirongogoi/" className="text-gray-300 hover:text-blue-400 transition-colors">
                  <Linkedin size={28} />
                </a>
                {/* <a href="#" className="text-gray-300 hover:text-blue-400 transition-colors">
                  <Mail size={28} />
                </a> */}
              </div>
            </div>
            
            <div className="bg-gray-800 p-8 rounded-xl">
              <form  className="space-y-6" onSubmit={handleContactSubmit}>
                <div>
                  <label htmlFor="name" className="block text-gray-300 mb-2">Name</label>
                  <input 
                    type="text" 
                    name="name"
                    onChange={handleOnChange}
                    value={formData.name}            
                    className="w-full px-4 py-3 bg-gray-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-gray-300 mb-2">Email</label>
                  <input 
                    type="email" 
                    name="email"
                    onChange={handleOnChange}
                    value={formData.email}
                    className="w-full px-4 py-3 bg-gray-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="your.email@example.com"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-gray-300 mb-2">Message</label>
                  <textarea 
                    name="message"
                    onChange={handleOnChange}
                    value={formData.message}
                    rows={5}
                    className="w-full px-4 py-3 bg-gray-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Tell me about your project or just say hello!"
                  ></textarea>
                </div>
                <button 
                  type="submit"
                  className="w-full bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transform hover:scale-105 transition-all duration-200 flex items-center justify-center"
                >
                  <Send className="mr-2" size={20} />
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-300 mb-4 md:mb-0">
              © 2025 Kiron Gogoi. All rights reserved.
            </div>
            <div className="flex space-x-6">
              <a href="#" className="text-gray-300 hover:text-blue-400 transition-colors">
                <Github size={24} />
              </a>
              <a href="https://www.linkedin.com/in/kirongogoi/" className="text-gray-300 hover:text-blue-400 transition-colors">
                <Linkedin size={24} />
              </a>
              {/* <a href="#" className="text-gray-300 hover:text-blue-400 transition-colors">
                <Mail size={24} />
              </a> */}
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;