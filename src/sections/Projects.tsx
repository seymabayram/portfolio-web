
const Projects = () => {
    return (
        <section id="projects" className="projects-section">
            <div className="container">
                <h2>Featured Projects</h2>
                <p className="section-subtitle">A selection of my technical work and software solutions.</p>
                <div className="project-grid">
                    {/* Project 1 */}
                    <div className="project-card">
                        <div className="project-content">
                            <h3>E-Commerce Platform</h3>
                            <p>A full-stack shopping application built with React and Node.js. Features include user authentication, product management, and secure payment integration.</p>
                            <span className="tech-tag">React</span>
                            <span className="tech-tag">Node.js</span>
                            <span className="tech-tag">MongoDB</span>
                        </div>
                    </div>

                    {/* Project 2 */}
                    <div className="project-card">
                        <div className="project-content">
                            <h3>Task Management API</h3>
                            <p>A robust RESTful API designed for productivity tools. Implements complex data relationships, caching strategies, and comprehensive documentation.</p>
                            <span className="tech-tag">TypeScript</span>
                            <span className="tech-tag">Express</span>
                            <span className="tech-tag">PostgreSQL</span>
                        </div>
                    </div>

                    {/* Project 3 */}
                    <div className="project-card">
                        <div className="project-content">
                            <h3>Real-time Dashboard</h3>
                            <p>An interactive analytics dashboard visualizing live data streams. Optimized for performance with efficient state management and WebSocket communication.</p>
                            <span className="tech-tag">Next.js</span>
                            <span className="tech-tag">Socket.io</span>
                            <span className="tech-tag">Chart.js</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Projects;
