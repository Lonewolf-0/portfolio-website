import { FaGraduationCap, FaCalendarAlt, FaMapMarkerAlt } from 'react-icons/fa';
import './About.css';

const About = () => {
    const education = [
        {
            degree: 'Post Graduation Diploma in Advanced Computing',
            institution: 'Center for Development of Advanced Computing',
            location: 'Pune',
            period: 'August 2025 – February 2026',
            isCurrent: true,
        },
        {
            degree: 'B.Tech in Computer Science and Engineering',
            institution: 'ABES Engineering College',
            location: 'Ghaziabad',
            period: 'October 2021 – May 2025',
            isCurrent: false,
        },
        {
            degree: 'Higher Secondary Education',
            institution: 'City Vocational Public School',
            location: 'Meerut',
            period: '2020',
            isCurrent: false,
        },
        {
            degree: 'Secondary Education',
            institution: 'City Vocational Public School',
            location: 'Meerut',
            period: '2018',
            isCurrent: false,
        },
    ];

    return (
        <section id="about" className="about">
            <div className="container">
                <h2 className="section-title">
                    About <span>Me</span>
                </h2>

                <div className="about-content">
                    <div className="about-text">
                        <p className="about-intro">
                            I'm a <span className="highlight">Backend-focused Software Engineer</span> with hands-on experience
                            building Spring Boot microservices, JWT-secured APIs, and scalable full-stack applications. Currently
                            pursuing my Post Graduation Diploma in Advanced Computing from CDAC Pune, I'm dedicated to building
                            robust, efficient, and production-ready systems.
                        </p>
                        <p className="about-description">
                            With experience in <span className="highlight">Spring Boot</span>, <span className="highlight">React</span>,
                            and <span className="highlight">Node.js</span>, I love solving complex problems and turning ideas into reality.
                            I have a keen interest in microservices architecture, cloud technologies, and creating seamless
                            user experiences.
                        </p>
                        <p className="about-description">
                            When I'm not coding, you'll find me solving DSA problems on LeetCode, exploring new technologies,
                            or contributing to open-source projects. I believe in continuous learning and staying updated
                            with the latest trends in software development.
                        </p>

                        <div className="about-stats">
                            <div className="stat-item">
                                <span className="stat-number">3+</span>
                                <span className="stat-label">Projects Built</span>
                            </div>
                            <div className="stat-item">
                                <span className="stat-number">1526</span>
                                <span className="stat-label">CodeChef Rating</span>
                            </div>
                            <div className="stat-item">
                                <span className="stat-number">GATE</span>
                                <span className="stat-label">2025 Qualified</span>
                            </div>
                        </div>
                    </div>

                    <div className="education-section">
                        <h3 className="education-title">
                            <FaGraduationCap /> Education Journey
                        </h3>
                        <div className="education-timeline">
                            {education.map((edu, index) => (
                                <div key={index} className={`education-card ${edu.isCurrent ? 'current' : ''}`}>
                                    <div className="education-indicator">
                                        <div className="indicator-dot"></div>
                                        {index !== education.length - 1 && <div className="indicator-line"></div>}
                                    </div>
                                    <div className="education-content">
                                        <h4 className="education-degree">{edu.degree}</h4>
                                        <p className="education-institution">{edu.institution}</p>
                                        <div className="education-meta">
                                            <span className="education-location">
                                                <FaMapMarkerAlt /> {edu.location}
                                            </span>
                                            <span className="education-period">
                                                <FaCalendarAlt /> {edu.period}
                                            </span>
                                        </div>
                                        {edu.isCurrent && <span className="current-badge">Current</span>}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
