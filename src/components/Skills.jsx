import {
    FaJava, FaReact, FaNodeJs, FaDocker, FaAws, FaGit, FaLinux, FaPython, FaDatabase
} from 'react-icons/fa';
import {
    SiSpringboot, SiMongodb, SiMysql, SiJavascript, SiTypescript, SiCplusplus,
    SiDotnet, SiPostman, SiGooglecloud
} from 'react-icons/si';
import './Skills.css';

const Skills = () => {
    const skillCategories = [
        {
            title: 'Programming Languages',
            skills: [
                { name: 'Java', icon: <FaJava /> },
                { name: 'JavaScript', icon: <SiJavascript /> },
                { name: 'C/C++', icon: <SiCplusplus /> },
                { name: 'Python', icon: <FaPython /> },
                { name: 'C#', icon: <SiDotnet /> },
            ],
        },
        {
            title: 'Frameworks & Libraries',
            skills: [
                { name: 'Spring Boot', icon: <SiSpringboot /> },
                { name: 'React.js', icon: <FaReact /> },
                { name: 'Node.js', icon: <FaNodeJs /> },
                { name: 'Express.js', icon: <FaNodeJs /> },
                { name: '.NET Core', icon: <SiDotnet /> },
            ],
        },
        {
            title: 'Databases',
            skills: [
                { name: 'MySQL', icon: <SiMysql /> },
                { name: 'MongoDB', icon: <SiMongodb /> },
            ],
        },
        {
            title: 'DevOps & Cloud',
            skills: [
                { name: 'AWS', icon: <FaAws /> },
                { name: 'GCP', icon: <SiGooglecloud /> },
                { name: 'Docker', icon: <FaDocker /> },
                { name: 'Linux', icon: <FaLinux /> },
            ],
        },
        {
            title: 'Developer Tools',
            skills: [
                { name: 'Git', icon: <FaGit /> },
                { name: 'Postman', icon: <SiPostman /> },
            ],
        },
    ];

    const coursework = [
        'Data Structures', 'Algorithms', 'Object Oriented Programming',
        'Database Management System', 'Operating System',
        'MVC Architecture', 'Software Development Methodologies'
    ];

    return (
        <section id="skills" className="skills">
            <div className="container">
                <h2 className="section-title">Technical <span>Skills</span></h2>

                <div className="skills-grid">
                    {skillCategories.map((category, index) => (
                        <div key={index} className="skill-category glass-card">
                            <h3 className="category-title">{category.title}</h3>
                            <div className="skills-list">
                                {category.skills.map((skill, i) => (
                                    <div key={i} className="skill-item">
                                        <span className="skill-icon">{skill.icon}</span>
                                        <span className="skill-name">{skill.name}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>

                <div className="coursework-section glass-card">
                    <h3 className="category-title">📚 Relevant Coursework</h3>
                    <div className="coursework-list">
                        {coursework.map((course, index) => (
                            <span key={index} className="coursework-item">{course}</span>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Skills;
