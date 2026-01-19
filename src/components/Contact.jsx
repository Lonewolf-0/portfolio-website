import { useState } from 'react';
import { FaEnvelope, FaPhone, FaLinkedin, FaGithub, FaPaperPlane, FaMapMarkerAlt, FaCode } from 'react-icons/fa';
import { SiLeetcode } from 'react-icons/si';
import './Contact.css';

const Contact = () => {
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const mailtoLink = `mailto:aryan.tyagi202@gmail.com?subject=Portfolio Contact from ${formData.name}&body=${formData.message}%0D%0A%0D%0AFrom: ${formData.email}`;
        window.location.href = mailtoLink;
    };

    const contactInfo = [
        { icon: <FaEnvelope />, label: 'Email', value: 'aryan.tyagi202@gmail.com', link: 'mailto:aryan.tyagi202@gmail.com' },
        { icon: <FaPhone />, label: 'Phone', value: '+91 7055479404', link: 'tel:+917055479404' },
        { icon: <FaMapMarkerAlt />, label: 'Location', value: 'India', link: null },
    ];

    const socialLinks = [
        { icon: <FaLinkedin />, label: 'LinkedIn', link: 'https://www.linkedin.com/in/aryantyagi-/' },
        { icon: <FaGithub />, label: 'GitHub', link: 'https://github.com/Lonewolf-0' },
        { icon: <SiLeetcode />, label: 'LeetCode', link: 'https://leetcode.com/u/lonewolf-0/' },
        { icon: <FaCode />, label: 'Codolio', link: 'https://codolio.com/profile/lonewolf' },
    ];

    return (
        <section id="contact" className="contact">
            <div className="container">
                <h2 className="section-title">Get In <span>Touch</span></h2>

                <div className="contact-grid">
                    <div className="contact-info">
                        <h3 className="contact-subtitle">Let's Connect!</h3>
                        <p className="contact-description">
                            I'm always open to discussing new opportunities, interesting projects,
                            or just having a chat about technology. Feel free to reach out!
                        </p>

                        <div className="contact-details">
                            {contactInfo.map((info, index) => (
                                <div key={index} className="contact-item">
                                    <span className="contact-icon">{info.icon}</span>
                                    <div className="contact-text">
                                        <span className="contact-label">{info.label}</span>
                                        {info.link ? (
                                            <a href={info.link} className="contact-value">{info.value}</a>
                                        ) : (
                                            <span className="contact-value">{info.value}</span>
                                        )}
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div className="social-section">
                            <h4 className="social-title">Follow Me</h4>
                            <div className="social-links">
                                {socialLinks.map((social, index) => (
                                    <a key={index} href={social.link} target="_blank" rel="noopener noreferrer"
                                        className="social-btn" aria-label={social.label}>
                                        {social.icon}
                                    </a>
                                ))}
                            </div>
                        </div>
                    </div>

                    <form className="contact-form glass-card" onSubmit={handleSubmit}>
                        <div className="form-group">
                            <label htmlFor="name">Your Name</label>
                            <input type="text" id="name" name="name" value={formData.name}
                                onChange={handleChange} placeholder="John Doe" required />
                        </div>
                        <div className="form-group">
                            <label htmlFor="email">Your Email</label>
                            <input type="email" id="email" name="email" value={formData.email}
                                onChange={handleChange} placeholder="john@example.com" required />
                        </div>
                        <div className="form-group">
                            <label htmlFor="message">Your Message</label>
                            <textarea id="message" name="message" rows="5" value={formData.message}
                                onChange={handleChange} placeholder="Write your message here..." required />
                        </div>
                        <button type="submit" className="btn btn-primary submit-btn">
                            <FaPaperPlane /> Send Message
                        </button>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default Contact;
