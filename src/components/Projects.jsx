import { FaExternalLinkAlt, FaGithub } from 'react-icons/fa';
import './Projects.css';

const Projects = () => {
    const projects = [
        {
            title: 'Online Quiz Platform',
            description:
                'A microservices-based quiz platform with separate Auth, Quiz, and Attempt services using Spring Boot and Eureka, with JWT-based authentication and role-based authorization enforced at the API Gateway level.',
            technologies: ['Spring Boot', 'Spring Cloud', 'Eureka', 'Gateway', 'React', 'PostgreSQL', 'JWT', 'Microservices'],
            features: [
                'Microservices architecture with Auth, Quiz, and Attempt services',
                'JWT-based authentication and role-based authorization',
                'Relational schemas in PostgreSQL for quizzes, questions, attempts, and users',
                'Service discovery and centralized routing via API Gateway',
            ],
            github: 'https://github.com/Lonewolf-0/quiz-platform',
            gradient: 'gradient-1',
        },
        {
            title: 'E-Learning Platform',
            description:
                'A full-stack e-learning platform using React (Vite) and Node.js for course management and user authentication with integrated secure payments.',
            technologies: ['React', 'Vite', 'Node.js', 'Razorpay API', 'JWT', 'MongoDB'],
            features: [
                'Course management system',
                'Razorpay integration for secure payments',
                'JWT-based authentication with admin-level access controls',
                'Admin controls and dashboard',
            ],
            github: 'https://github.com/Lonewolf-0/e-learning',
            link: 'https://e-learning-kxzr.onrender.com',
            gradient: 'gradient-2',
        },
        {
            title: 'Realtime Code Editor',
            description:
                'A real-time collaborative code editor enabling live, multi-user code sharing using WebSockets, with synchronized editing to support pair programming.',
            technologies: ['ReactJS', 'NodeJS', 'WebSockets', 'Socket.io'],
            features: [
                'Real-time code synchronization',
                'Live, multi-user code sharing',
                'Synchronized editing for pair programming',
                'Responsive web interface',
            ],
            github: 'https://github.com/Lonewolf-0/realtime-editor',
            link: 'https://realtime-editor-thqg.onrender.com/',
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
                                {project.github && (
                                    <a href={project.github} target="_blank" rel="noopener noreferrer" className="project-link">
                                        <FaGithub /> View Code
                                    </a>
                                )}
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
