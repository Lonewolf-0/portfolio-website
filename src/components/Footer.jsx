import { FaHeart } from 'react-icons/fa';
import './Footer.css';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="footer">
            <div className="container">
                <div className="footer-content">
                    <div className="footer-logo">
                        <span className="logo-text">AT</span>
                        <p className="footer-tagline">Building the future, one line of code at a time.</p>
                    </div>

                    <div className="footer-copyright">
                        <p>
                            © {currentYear} Aryan Tyagi. Made with <FaHeart className="heart-icon" /> in India
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
