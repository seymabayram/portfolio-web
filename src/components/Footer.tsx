import React from 'react';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="footer">
            <div className="container footer-container">
                <p>&copy; {currentYear} My Portfolio. All rights reserved.</p>
                <div className="social-links">
                    <a href="#" target="_blank" rel="noopener noreferrer">GitHub</a>
                    <a href="#" target="_blank" rel="noopener noreferrer">LinkedIn</a>
                    <a href="#" target="_blank" rel="noopener noreferrer">Twitter</a>
                </div>
            </div>
            <style>{`
        .footer {
            background-color: var(--card-bg);
            padding: 2rem 0;
            margin-top: auto;
            border-top: 1px solid rgba(255,255,255,0.1);
        }
        .footer-container {
            display: flex;
            justify-content: space-between;
            align-items: center;
            flex-wrap: wrap;
            gap: 1rem;
        }
        .social-links {
            display: flex;
            gap: 1.5rem;
        }
      `}</style>
        </footer>
    );
};

export default Footer;
