import { FaBriefcase, FaCalendarAlt, FaMapMarkerAlt, FaCheckCircle } from 'react-icons/fa';
import './Experience.css';

const Experience = () => {
    const experiences = [
        {
            title: 'Summer Internship',
            company: 'Investek',
            location: 'Gurugram, India',
            period: 'July 2024 - August 2024',
            description: [
                'Developed and studied stock prediction apps that can predict stock prices using historical data from Yahoo Finance and Facebook Prophet.',
                'In the app, users select a stock and prediction period (1-4 years), and the app downloads and caches the data, plots historical prices.',
                'Used Prophet to predict and visualize future trends, offering CSV downloads of the data.',
            ],
            technologies: ['Python', 'Facebook Prophet', 'Yahoo Finance API', 'Data Visualization', 'Machine Learning'],
        },
    ];

    const achievements = [
        {
            title: 'GATE CS 2025 Qualified',
            description: 'Successfully qualified the Graduate Aptitude Test in Engineering for Computer Science',
            icon: '🎯',
        },
        {
            title: 'CodeChef Rating 1526',
            description: 'Achieved competitive programming rating demonstrating strong problem-solving skills',
            icon: '⭐',
        },
    ];

    const certificates = [
        {
            title: 'AWS Academy Graduate - AWS Academy Cloud Foundations',
            issuer: 'Amazon Web Services',
            icon: '☁️',
        },
        {
            title: 'The Complete 2023 Web Development Bootcamp',
            issuer: 'Angela Yu (Udemy)',
            icon: '💻',
        },
    ];

    return (
        <section id="experience" className="experience">
            <div className="container">
                <h2 className="section-title">
                    Experience & <span>Achievements</span>
                </h2>

                <div className="experience-grid">
                    <div className="experience-main">
                        <h3 className="subsection-title">
                            <FaBriefcase /> Work Experience
                        </h3>
                        {experiences.map((exp, index) => (
                            <div key={index} className="experience-card glass-card">
                                <div className="experience-header">
                                    <div className="experience-info">
                                        <h4 className="experience-title">{exp.title}</h4>
                                        <p className="experience-company">{exp.company}</p>
                                    </div>
                                    <div className="experience-meta">
                                        <span className="experience-location">
                                            <FaMapMarkerAlt /> {exp.location}
                                        </span>
                                        <span className="experience-period">
                                            <FaCalendarAlt /> {exp.period}
                                        </span>
                                    </div>
                                </div>
                                <ul className="experience-points">
                                    {exp.description.map((point, i) => (
                                        <li key={i}>
                                            <FaCheckCircle className="check-icon" />
                                            {point}
                                        </li>
                                    ))}
                                </ul>
                                <div className="experience-tech">
                                    {exp.technologies.map((tech, i) => (
                                        <span key={i} className="skill-tag">{tech}</span>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="experience-side">
                        <div className="achievements-section">
                            <h3 className="subsection-title">🏆 Achievements</h3>
                            <div className="achievements-list">
                                {achievements.map((achievement, index) => (
                                    <div key={index} className="achievement-card glass-card">
                                        <span className="achievement-icon">{achievement.icon}</span>
                                        <div className="achievement-content">
                                            <h4 className="achievement-title">{achievement.title}</h4>
                                            <p className="achievement-description">{achievement.description}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="certificates-section">
                            <h3 className="subsection-title">📜 Certificates</h3>
                            <div className="certificates-list">
                                {certificates.map((cert, index) => (
                                    <div key={index} className="certificate-card glass-card">
                                        <span className="certificate-icon">{cert.icon}</span>
                                        <div className="certificate-content">
                                            <h4 className="certificate-title">{cert.title}</h4>
                                            <p className="certificate-issuer">{cert.issuer}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Experience;
