import { Link } from 'react-scroll';
import { FaLinkedin, FaGithub, FaEnvelope, FaPhone, FaChevronDown, FaDownload, FaCode } from 'react-icons/fa';
import { SiLeetcode } from 'react-icons/si';
import resumePdf from '../assets/AryanTyagi.pdf';
import './Hero.css';

const Hero = () => {
    return (
        <section id="hero" className="hero">
            <div className="hero-bg">
                <div className="gradient-orb orb-1"></div>
                <div className="gradient-orb orb-2"></div>
                <div className="gradient-orb orb-3"></div>
                <div className="grid-overlay"></div>
            </div>

            <div className="hero-content">
                <div className="hero-text">
                    <p className="hero-greeting">Hello, I'm</p>
                    <h1 className="hero-name">Aryan Tyagi</h1>
                    <h2 className="hero-title">
                        <span className="typing-text">Full Stack Developer</span>
                    </h2>
                    <p className="hero-description">
                        Passionate about building scalable web applications with modern technologies.
                        Specializing in Spring Boot, React, and cloud-native solutions.
                    </p>

                    <div className="hero-social">
                        <a href="mailto:aryan.tyagi202@gmail.com" className="social-link" aria-label="Email">
                            <FaEnvelope />
                        </a>
                        <a href="tel:+917055479404" className="social-link" aria-label="Phone">
                            <FaPhone />
                        </a>
                        <a href="https://www.linkedin.com/in/aryantyagi-/" target="_blank" rel="noopener noreferrer" className="social-link" aria-label="LinkedIn">
                            <FaLinkedin />
                        </a>
                        <a href="https://github.com/Lonewolf-0" target="_blank" rel="noopener noreferrer" className="social-link" aria-label="GitHub">
                            <FaGithub />
                        </a>
                        <a href="https://leetcode.com/u/lonewolf-0/" target="_blank" rel="noopener noreferrer" className="social-link" aria-label="LeetCode">
                            <SiLeetcode />
                        </a>
                        <a href="https://codolio.com/profile/lonewolf" target="_blank" rel="noopener noreferrer" className="social-link" aria-label="Codolio">
                            <FaCode />
                        </a>
                    </div>

                    <div className="hero-buttons">
                        <Link to="projects" smooth={true} duration={500} offset={-80} className="btn btn-primary">
                            View My Work
                        </Link>
                        <a
                            href={resumePdf}
                            download="AryanTyagi_Resume.pdf"
                            className="btn btn-resume"
                        >
                            <FaDownload /> Resume
                        </a>
                        <Link to="contact" smooth={true} duration={500} offset={-80} className="btn btn-secondary">
                            Get in Touch
                        </Link>
                    </div>
                </div>

                <div className="hero-visual">
                    <div className="code-window">
                        <div className="window-header">
                            <div className="window-dot red"></div>
                            <div className="window-dot yellow"></div>
                            <div className="window-dot green"></div>
                        </div>
                        <div className="code-content">
                            <pre>
                                <code>
                                    <span className="code-keyword">const</span> <span className="code-variable">developer</span> = {'{'}
                                    {'\n'}  <span className="code-property">name</span>: <span className="code-string">"Aryan Tyagi"</span>,
                                    {'\n'}  <span className="code-property">skills</span>: [<span className="code-string">"Java"</span>, <span className="code-string">"React"</span>, <span className="code-string">"Spring"</span>],
                                    {'\n'}  <span className="code-property">passion</span>: <span className="code-string">"Building amazing apps"</span>,
                                    {'\n'}  <span className="code-property">coffee</span>: <span className="code-boolean">true</span>,
                                    {'\n'}{'}'};
                                    {'\n'}
                                    {'\n'}<span className="code-keyword">while</span> (<span className="code-variable">alive</span>) {'{'}
                                    {'\n'}  <span className="code-function">learn</span>();
                                    {'\n'}  <span className="code-function">code</span>();
                                    {'\n'}  <span className="code-function">innovate</span>();
                                    {'\n'}{'}'}
                                </code>
                            </pre>
                        </div>
                    </div>
                </div>
            </div>

            <Link to="about" smooth={true} duration={500} offset={-80} className="scroll-indicator">
                <FaChevronDown />
            </Link>
        </section>
    );
};

export default Hero;
