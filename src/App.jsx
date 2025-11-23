# 📋 FILE 8: src/App.jsx - COMPLETE CODE

**Name the file:** `src/App.jsx`

**Copy ALL of this code below:**

```javascript
import React, { useState, useEffect } from 'react';
import { Mail, Linkedin, Github, ExternalLink, Award, Briefcase, GraduationCap, Code, Database, Wrench, TrendingUp, ChevronDown, Menu, X, Download } from 'lucide-react';

const Portfolio = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [formStatus, setFormStatus] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'skills', 'projects', 'experience', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  const handleFormChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormStatus('Thank you! Your message has been received. I\'ll get back to you soon!');
    setFormData({ name: '', email: '', message: '' });
    setTimeout(() => setFormStatus(''), 5000);
  };

  const projects = [
    {
      title: "Datamind-AI Platform",
      category: "AI Analytics",
      description: "AI-powered platform that delivers intelligent insights and dynamic visualizations from complex datasets. Provides automated analysis and actionable recommendations.",
      tech: ["Lovable AI", "Opal AI", "Supabase", "Python"],
      highlights: ["Automated insights generation", "Interactive visualizations", "Real-time analytics"],
      gradient: "from-blue-500 to-purple-600"
    },
    {
      title: "SQLBot",
      category: "AI Tools",
      description: "Natural language to SQL query converter that transforms conversational requests into optimized database queries using advanced NLP and LLM technology.",
      tech: ["Lovable AI", "GPT-4", "Supabase", "SQL"],
      highlights: ["Natural language processing", "Query optimization", "Multi-database support"],
      gradient: "from-purple-500 to-pink-600"
    },
    {
      title: "Insightify AI Dashboards",
      category: "Business Intelligence",
      description: "Automated dashboard creation platform that generates comprehensive analytics dashboards from uploaded CSV files using AI, eliminating manual configuration.",
      tech: ["Opal AI", "Python", "Pandas", "Supabase"],
      highlights: ["One-click dashboard creation", "AI-powered data analysis", "Custom visualizations"],
      gradient: "from-cyan-500 to-blue-600"
    },
    {
      title: "Healthcare Alert Platform",
      category: "Healthcare Tech",
      description: "Complete healthcare management system that generates patient reports, prioritizes treatment urgency, and sends automated alerts for critical cases.",
      tech: ["Lovable AI", "Supabase", "Python", "Alert APIs"],
      highlights: ["Patient prioritization algorithm", "Automated reporting", "Real-time alerts"],
      gradient: "from-green-500 to-teal-600"
    },
    {
      title: "Travel Tracker App",
      category: "Travel & Booking",
      description: "All-in-one travel platform for trip planning, booking management, and real-time delay alerts. Comprehensive solution for modern travelers.",
      tech: ["Lovable AI", "Supabase", "Maps API", "Notification APIs"],
      highlights: ["Trip design & planning", "Real-time delay alerts", "Integrated booking system"],
      gradient: "from-orange-500 to-red-600"
    },
    {
      title: "ThinkAnalytics SaaS Platform",
      category: "SaaS Analytics",
      description: "Enterprise-grade analytics SaaS platform providing advanced business intelligence, predictive analytics, and customizable reporting dashboards.",
      tech: ["Opal AI", "Supabase", "Python", "Power BI"],
      highlights: ["Multi-tenant architecture", "Predictive analytics", "Custom reporting"],
      gradient: "from-violet-500 to-purple-600"
    }
  ];

  const skills = {
    "AI & Automation": [
      "Opal AI", "Lovable AI", "Lindy AI", "Wrap AI", "GPT-4", "Claude AI", "n8n Workflows"
    ],
    "Programming": [
      "Python", "SQL", "Pandas", "NumPy", "Matplotlib", "Scikit-learn"
    ],
    "Databases": [
      "MySQL", "PostgreSQL", "Supabase", "Firebase"
    ],
    "Analytics & BI": [
      "Power BI", "Excel", "Google Analytics", "Data Modeling", "ETL Pipelines"
    ],
    "Tools & Platforms": [
      "Git", "GitHub", "VS Code", "Jupyter", "API Integration"
    ],
    "Digital Marketing": [
      "SEO Optimization", "Social Media Marketing", "Content Strategy", "Campaign Management"
    ]
  };

  const experience = [
    {
      type: "work",
      title: "AI Automation & Analytics Intern",
      organization: "Trizen Ventures LLP",
      duration: "January 2025 - March 2025",
      location: "Remote",
      description: "Developed AI-driven automation workflows and analytics solutions using no-code/low-code platforms. Created intelligent dashboards and implemented data-driven insights for business decision-making.",
      achievements: [
        "Built 5+ AI automation workflows using Opal and Lovable AI",
        "Developed analytics dashboards for real-time business insights",
        "Implemented data pipelines using Supabase and Python"
      ]
    },
    {
      type: "work",
      title: "Data Analytics Trainee",
      organization: "Veda IT",
      duration: "August 2024 - January 2025",
      location: "Hyderabad, India",
      description: "Completed comprehensive data analytics training program covering Python, SQL, Power BI, and advanced analytics techniques. Worked on real-world projects involving data cleaning, visualization, and predictive modeling.",
      achievements: [
        "Mastered Power BI for creating interactive dashboards",
        "Completed 10+ hands-on data analytics projects",
        "Achieved proficiency in SQL query optimization and Python data manipulation"
      ]
    },
    {
      type: "education",
      title: "Bachelor of Technology - Computer Science & Engineering",
      organization: "Vishnu Institute of Technology",
      duration: "2021 - 2025",
      location: "Andhra Pradesh, India",
      description: "CGPA: 8.11/10.0",
      achievements: []
    }
  ];

  const certifications = [
    "Google Data Analytics Professional Certificate",
    "Power BI Visualization",
    "Python for Data Science",
    "SQL for Data Analytics",
    "Advanced Excel for Business Analytics"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-slate-900/95 backdrop-blur-sm z-50 border-b border-purple-500/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
              JAK
            </div>
            
            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-8">
              {['home', 'about', 'skills', 'projects', 'experience', 'contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className={`capitalize transition-colors ${
                    activeSection === item
                      ? 'text-purple-400'
                      : 'text-gray-300 hover:text-white'
                  }`}
                >
                  {item}
                </button>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden text-white"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-slate-800/95 backdrop-blur-sm">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {['home', 'about', 'skills', 'projects', 'experience', 'contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className="block w-full text-left px-3 py-2 capitalize text-gray-300 hover:text-white hover:bg-slate-700 rounded-md"
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center px-4 pt-16">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-8">
            <h1 className="text-5xl md:text-7xl font-bold mb-4 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent animate-fade-in">
              Jaswanth Anil Kumar
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-6">
              Data Analytics & AI Automation Specialist
            </p>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto mb-8">
              Building intelligent solutions with No-Code AI Tools, Python & Advanced Analytics
            </p>
          </div>
          
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            
              href="#contact"
              onClick={(e) => { e.preventDefault(); scrollToSection('contact'); }}
              className="px-8 py-3 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full font-semibold hover:shadow-lg hover:shadow-purple-500/50 transition-all transform hover:scale-105"
            >
              Get In Touch
            </a>
            
              href="#projects"
              onClick={(e) => { e.preventDefault(); scrollToSection('projects'); }}
              className="px-8 py-3 border-2 border-purple-500 rounded-full font-semibold hover:bg-purple-500/10 transition-all"
            >
              View Projects
            </a>
          </div>

          <div className="flex justify-center gap-6">
            <a href="mailto:jaswanth89136@gmail.com" className="text-gray-400 hover:text-purple-400 transition-colors">
              <Mail size={24} />
            </a>
            <a href="https://linkedin.com/in/jaswanth-anil-kumar-battu-a38104215" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-purple-400 transition-colors">
              <Linkedin size={24} />
            </a>
            <a href="https://github.com/ANIL-04-01" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-purple-400 transition-colors">
              <Github size={24} />
            </a>
          </div>

          <div className="mt-12 animate-bounce">
            <ChevronDown size={32} className="mx-auto text-purple-400" />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
            About Me
          </h2>
          
          <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-purple-500/20">
            <p className="text-lg text-gray-300 mb-6 leading-relaxed">
              I'm a passionate <span className="text-purple-400 font-semibold">Data Analytics and AI Automation professional</span> with expertise in building intelligent, data-driven solutions that transform business operations. My journey in tech combines traditional programming skills with cutting-edge AI tools to create innovative applications.
            </p>
            
            <p className="text-lg text-gray-300 mb-6 leading-relaxed">
              With hands-on experience at <span className="text-blue-400 font-semibold">Trizen Ventures</span> and <span className="text-blue-400 font-semibold">Veda IT</span>, I've developed a unique skill set that bridges the gap between complex data analysis and accessible, AI-powered automation. I specialize in leveraging no-code/low-code platforms like Lovable AI and Opal AI alongside traditional programming to deliver solutions faster without compromising quality.
            </p>

            <p className="text-lg text-gray-300 mb-8 leading-relaxed">
              My approach combines <span className="text-purple-400 font-semibold">analytical thinking</span>, <span className="text-purple-400 font-semibold">AI-driven innovation</span>, and <span className="text-purple-400 font-semibold">practical problem-solving</span> to create impactful solutions. Whether it's building intelligent dashboards, automating workflows, or developing full-stack applications, I'm driven by the challenge of turning data into actionable insights.
            </p>

            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center p-4 bg-slate-700/30 rounded-lg">
                <div className="text-3xl font-bold text-purple-400 mb-2">10+</div>
                <div className="text-gray-400">AI Automation Workflows</div>
              </div>
              <div className="text-center p-4 bg-slate-700/30 rounded-lg">
                <div className="text-3xl font-bold text-blue-400 mb-2">6+</div>
                <div className="text-gray-400">Featured Projects</div>
              </div>
              <div className="text-center p-4 bg-slate-700/30 rounded-lg">
                <div className="text-3xl font-bold text-pink-400 mb-2">8.11</div>
                <div className="text-gray-400">CGPA (B.Tech CSE)</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-4 bg-slate-800/30">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
            Skills & Technical Stack
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {Object.entries(skills).map(([category, skillList]) => (
              <div key={category} className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-purple-500/20 hover:border-purple-500/50 transition-all">
                <h3 className="text-xl font-bold mb-4 text-purple-400 flex items-center gap-2">
                  {category === "AI & Automation" && <Wrench size={20} />}
                  {category === "Programming" && <Code size={20} />}
                  {category === "Databases" && <Database size={20} />}
                  {category === "Analytics & BI" && <TrendingUp size={20} />}
                  {category === "Tools & Platforms" && <Briefcase size={20} />}
                  {category === "Digital Marketing" && <TrendingUp size={20} />}
                  {category}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {skillList.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full text-sm text-gray-300 border border-purple-500/30 hover:border-purple-500 transition-colors"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-4 text-center bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <p className="text-center text-gray-400 mb-12 max-w-2xl mx-auto">
            Innovative solutions built with AI-powered no-code platforms and traditional development tools
          </p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className="bg-slate-800/50 backdrop-blur-sm rounded-xl overflow-hidden border border-purple-500/20 hover:border-purple-500/50 transition-all hover:transform hover:scale-105 group"
              >
                <div className={`h-2 bg-gradient-to-r ${project.gradient}`}></div>
                <div className="p-6">
                  <div className="text-sm text-purple-400 mb-2">{project.category}</div>
                  <h3 className="text-xl font-bold mb-3 text-white group-hover:text-purple-400 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-gray-400 mb-4 text-sm leading-relaxed">
                    {project.description}
                  </p>
                  
                  <div className="mb-4">
                    <div className="text-xs text-gray-500 mb-2">Technologies:</div>
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech) => (
                        <span key={tech} className="px-2 py-1 bg-slate-700/50 rounded text-xs text-gray-300">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="border-t border-slate-700 pt-4">
                    <div className="text-xs text-gray-500 mb-2">Key Highlights:</div>
                    <ul className="space-y-1">
                      {project.highlights.map((highlight, i) => (
                        <li key={i} className="text-xs text-gray-400 flex items-start gap-2">
                          <span className="text-purple-400 mt-1">•</span>
                          <span>{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience & Education Section */}
      <section id="experience" className="py-20 px-4 bg-slate-800/30">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
            Experience & Education
          </h2>
          
          <div className="space-y-8">
            {experience.map((item, index) => (
              <div key={index} className="relative pl-8 pb-8 border-l-2 border-purple-500/30 last:pb-0">
                <div className="absolute -left-3 top-0 w-6 h-6 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center">
                  {item.type === 'work' ? <Briefcase size={14} /> : <GraduationCap size={14} />}
                </div>
                
                <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-purple-500/20 hover:border-purple-500/50 transition-all">
                  <div className="flex flex-wrap justify-between items-start mb-2">
                    <h3 className="text-xl font-bold text-white">{item.title}</h3>
                    <span className="text-sm text-purple-400">{item.duration}</span>
                  </div>
                  <div className="text-gray-400 mb-1">{item.organization}</div>
                  <div className="text-sm text-gray-500 mb-3">{item.location}</div>
                  <p className="text-gray-300 mb-4">{item.description}</p>
                  
                  {item.achievements.length > 0 && (
                    <ul className="space-y-2">
                      {item.achievements.map((achievement, i) => (
                        <li key={i} className="text-sm text-gray-400 flex items-start gap-2">
                          <span className="text-purple-400 mt-1">✓</span>
                          <span>{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Certifications */}
          <div className="mt-12 bg-slate-800/50 backdrop-blur-sm rounded-xl p-8 border border-purple-500/20">
            <h3 className="text-2xl font-bold mb-6 flex items-center gap-2 text-purple-400">
              <Award size={24} />
              Certifications
            </h3>
            <div className="grid md:grid-cols-2 gap-4">
              {certifications.map((cert, index) => (
                <div key={index} className="flex items-start gap-3 p-3 bg-slate-700/30 rounded-lg">
                  <Award size={16} className="text-purple-400 mt-1 flex-shrink-0" />
                  <span className="text-gray-300 text-sm">{cert}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold mb-4 text-center bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
            Get In Touch
          </h2>
          <p className="text-center text-gray-400 mb-12">
            Let's discuss how we can work together on your next project
          </p>
          
          <div className="grid md:grid-cols-2 gap-8">
            {/* Contact Form */}
            <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-8 border border-purple-500/20">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Name</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleFormChange}
                    required
                    className="w-full px-4 py-2 bg-slate-700/50 border border-purple-500/30 rounded-lg focus:outline-none focus:border-purple-500 text-white"
                    placeholder="Your name"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Email</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleFormChange}
                    required
                    className="w-full px-4 py-2 bg-slate-700/50 border border-purple-500/30 rounded-lg focus:outline-none focus:border-purple-500 text-white"
                    placeholder="your.email@example.com"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Message</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleFormChange}
                    required
                    rows="4"
                    className="w-full px-4 py-2 bg-slate-700/50 border border-purple-500/30 rounded-lg focus:outline-none focus:border-purple-500 text-white resize-none"
                    placeholder="Tell me about your project or inquiry..."
                  ></textarea>
                </div>
                
                <button
                  type="submit"
                  className="w-full px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg font-semibold hover:shadow-lg hover:shadow-purple-500/50 transition-all transform hover:scale-105"
                >
                  Send Message
                </button>
                
                {formStatus && (
                  <div className="text-center text-green-400 text-sm">{formStatus}</div>
                )}
              </form>
            </div>

            {/* Contact Info */}
            <div className="space-y-6">
              <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-purple-500/20">
                <h3 className="text-xl font-bold mb-4 text-purple-400">Contact Information</h3>
                
                <div className="space-y-4">
                  <a href="mailto:jaswanth89136@gmail.com" className="flex items-center gap-3 text-gray-300 hover:text-purple-400 transition-colors">
                    <Mail size={20} className="text-purple-400" />
                    <span>jaswanth89136@gmail.com</span>
                  </a>
                  
                  <a href="https://linkedin.com/in/jaswanth-anil-kumar-battu-a38104215" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-gray-300 hover:text-purple-400 transition-colors">
                    <Linkedin size={20} className="text-purple-400" />
                    <span>LinkedIn Profile</span>
                  </a>
                  
                  <a href="https://github.com/ANIL-04-01" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-gray-300 hover:text-purple-400 transition-colors">
                    <Github size={20} className="text-purple-400" />
                    <span>GitHub Profile</span>
                  </a>
                  
                  <div className="flex items-center gap-3 text-gray-300">
                    <ExternalLink size={20} className="text-purple-400" />
                    <span>Andhra Pradesh, India</span>
                  </div>
                </div>
              </div>

              <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-purple-500/20">
                <h3 className="text-xl font-bold mb-4 text-purple-400">Open To</h3>
                <ul className="space-y-3 text-gray-300">
                  <li className="flex items-start gap-2">
                    <span className="text-purple-400 mt-1">✓</span>
                    <span>Full-time opportunities in Data Analytics & AI</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-purple-400 mt-1">✓</span>
                    <span>Freelance projects and consulting</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-purple-400 mt-1">✓</span>
                    <span>Collaborative development work</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-purple-400 mt-1">✓</span>
                    <span>AI automation & analytics partnerships</span>
                  </li>
                </ul>
              </div>

              
                href="mailto:jaswanth89136@gmail.com?subject=Resume Request"
                className="flex items-center justify-center gap-2 w-full px-6 py-3 border-2 border-purple-500 rounded-lg font-semibold hover:bg-purple-500/10 transition-all"
              >
                <Download size={20} />
                Request Resume
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 border-t border-purple-500/20 bg-slate-900/50">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-gray-400 text-sm">
              © 2025 Jaswanth Anil Kumar. Built with React & Tailwind CSS.
            </div>
            
            <div className="flex gap-6">
              <button
                onClick={() => scrollToSection('home')}
          <div className="mt-6 text-center">
        <p className="text-gray-500 text-xs">
          Designed to showcase innovation in AI, Data Analytics, and Automation
        </p>
      </div>
    </div>
  </footer>
</div>
);
};
export default Portfolio;
