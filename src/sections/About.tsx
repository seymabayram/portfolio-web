const About = () => {
    return (
        <section id="about" className="about-section">
            <div className="container">
                <h2>About Me</h2>
                <div className="about-content">
                    <p className="lead-text">
                        I am a passionate Software Engineer dedicated to building efficient, scalable, and user-friendly applications.
                        With a strong foundation in modern web technologies, I transform complex requirements into elegant digital solutions.
                    </p>
                    <div className="skills-grid">
                        <div className="skill-category">
                            <h3>Frontend</h3>
                            <p>React, TypeScript, Tailwind CSS, Next.js</p>
                        </div>
                        <div className="skill-category">
                            <h3>Backend</h3>
                            <p>Node.js, Express, Python, SQL/NoSQL</p>
                        </div>
                        <div className="skill-category">
                            <h3>Tools</h3>
                            <p>Git, Docker, VS Code, Figma (for collaboration)</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
