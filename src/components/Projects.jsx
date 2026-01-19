import { FaExternalLinkAlt, FaGithub } from 'react-icons/fa';
import './Projects.css';

const Projects = () => {
    const projects = [
        {
            title: 'Online Quiz Platform',
            description:
                'A scalable quiz platform built with microservices architecture featuring centralized API routing, service discovery, and secure communication between services.',
            technologies: ['Spring Boot', 'Spring Cloud', 'Eureka', 'Gateway', 'React', 'Microservices'],
            features: [
                'RESTful microservices architecture',
                'Centralized API routing with Spring Cloud Gateway',
                'Service discovery using Eureka',
                'React-based modern frontend',
            ],
            gradient: 'gradient-1',
        },
        {
            title: 'E-Learning Platform',
            description:
                'A full-stack e-learning platform with comprehensive course management, secure payment integration, and robust authentication system.',
            technologies: ['React', 'Vite', 'Node.js', 'Razorpay API', 'JWT', 'MongoDB'],
            features: [
                'Course management system',
                'Razorpay payment integration',
                'JWT-based authentication',
                'Admin controls and dashboard',
            ],
            gradient: 'gradient-2',
        },
        {
            title: 'Realtime Code Editor',
            description:
                'A collaborative code editor enabling real-time code sharing using WebSockets, perfect for pair programming sessions.',
            technologies: ['ReactJS', 'NodeJS', 'WebSockets', 'Socket.io'],
            features: [
                'Real-time code synchronization',
                'WebSocket-based live updates',
                'Collaborative editing support',
                'Responsive web interface',
            ],
            link: '#',
            gradient: 'gradient-3',
        },
    ];

    return (
        <section id="projects" className="projects">
            <div className="container">
                <h2 className="section-title">
                    Featured <span>Projects</span>
                </h2>

                <div className="projects-grid">
                    {projects.map((project, index) => (
                        <div key={index} className={`project-card ${project.gradient}`}>
                            <div className="project-header">
                                <div className="project-number">0{index + 1}</div>
                                <h3 className="project-title">{project.title}</h3>
                            </div>

                            <p className="project-description">{project.description}</p>

                            <ul className="project-features">
                                {project.features.map((feature, i) => (
                                    <li key={i}>{feature}</li>
                                ))}
                            </ul>

                            <div className="project-tech">
                                {project.technologies.map((tech, i) => (
                                    <span key={i} className="tech-tag">
                                        {tech}
                                    </span>
                                ))}
                            </div>

                            <div className="project-links">
                                {project.link && (
                                    <a href={project.link} target="_blank" rel="noopener noreferrer" className="project-link">
                                        <FaExternalLinkAlt /> Live Demo
                                    </a>
                                )}
                                <a href="#" className="project-link">
                                    <FaGithub /> View Code
                                </a>
                            </div>

                            <div className="project-glow"></div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
