import { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="container nav-container">
        <div className="nav-logo-container">
          <img src="/profil_navbar.png" alt="Profile" className="profile-photo" />
          <span className="logo-text">Şeyma Bayram</span>
        </div>

        <button
          className="nav-toggle"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle navigation"
        >
          {isOpen ? '✕' : '☰'}
        </button>

        <ul className={`nav-links ${isOpen ? 'active' : ''}`}>
          <li><a href="#hero" onClick={() => setIsOpen(false)}>Home</a></li>
          <li><a href="#about" onClick={() => setIsOpen(false)}>About</a></li>
          <li><a href="#projects" onClick={() => setIsOpen(false)}>Projects</a></li>
          <li><a href="#contact" onClick={() => setIsOpen(false)}>Contact</a></li>
        </ul>
      </div>
      <style>{`
        .navbar {
          background-color: var(--nav-bg);
          backdrop-filter: blur(10px);
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          z-index: 1000;
          padding: 0.5rem 0;
          box-shadow: 0 2px 15px rgba(0,0,0,0.05); /* Soft shadow only */
          border-bottom: none; /* Removed border */
          font-family: 'Playfair Display', serif;
        }
        .nav-container {
          display: flex;
          justify-content: space-between;
          align-items: center;
          width: 90%; /* Responsive width */
          max-width: 1400px; /* Center content like Hero section */
          margin: 0 auto; /* Center horizontally */
        }
        .nav-logo-container {
           display: flex;
           align-items: center;
           gap: 1rem;
           text-decoration: none;
        }
        .logo-text {
            font-size: 1.2rem;
            font-weight: bold;
            color: var(--nav-text-color, #4A1915);
        }
        .profile-placeholder {
            width: 50px;
            height: 50px;
            background-color: #d1d5db;
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            color: #4A1915;
            font-weight: bold;
            font-size: 1.2rem;
            border: 2px solid #4A1915;
            flex-shrink: 0;
        }
        .profile-photo {
            width: 50px;
            height: 50px;
            border-radius: 50%;
            object-fit: cover;
            border: 2px solid #A0522D;
            flex-shrink: 0;
        }
        .nav-links {
          display: flex;
          gap: 4rem;
          list-style: none;
          margin: 0;
          padding: 0;
        }
        .nav-links a {
            color: var(--nav-text-color, #4A1915);
            font-weight: 500;
            font-size: 1.3rem;
            text-decoration: none;
            padding: 0.5rem 0;
            position: relative;
            transition: color 0.3s ease;
        }
        .nav-links a::after {
            content: '';
            position: absolute;
            width: 0;
            height: 2px;
            bottom: 0;
            left: 50%;
            background-color: #4A1915;
            transition: all 0.3s ease;
            transform: translateX(-50%);
        }
        .nav-links a:hover::after {
            width: 100%;
        }
        .nav-links a:hover {
            color: #8B0000;
        }
        .nav-toggle {
          display: none;
          background: none;
          border: none;
          color: var(--nav-text-color, #4A1915);
          font-size: 1.5rem;
          cursor: pointer;
        }
        @media (max-width: 768px) {
          .nav-links {
            position: absolute;
            top: 100%;
            left: 0;
            width: 100%;
            flex-direction: column;
            background-color: var(--nav-bg);
            padding: 1rem;
            gap: 1rem;
            display: none;
            border-bottom: 1px solid rgba(255,255,255,0.2);
          }
          .nav-links.active {
            display: flex;
          }
          .nav-toggle {
            display: block;
          }
        }
      `}</style>
    </nav>
  );
};

export default Navbar;
