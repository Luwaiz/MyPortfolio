import "./App.css";

function App() {
	return (
		<div className="portfolio">
			{/* Navigation */}
			<nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
				<div className="container">
					<a className="navbar-brand fw-bold" href="#home">
						Portfolio
					</a>
					<button
						className="navbar-toggler"
						type="button"
						data-bs-toggle="collapse"
						data-bs-target="#navbarNav"
					>
						<span className="navbar-toggler-icon"></span>
					</button>
					<div className="collapse navbar-collapse" id="navbarNav">
						<ul className="navbar-nav ms-auto">
							<li className="nav-item">
								<a className="nav-link" href="#home">
									Home
								</a>
							</li>
							<li className="nav-item">
								<a className="nav-link" href="#about">
									About
								</a>
							</li>
							<li className="nav-item">
								<a className="nav-link" href="#skills">
									Skills
								</a>
							</li>
							<li className="nav-item">
								<a className="nav-link" href="#projects">
									Projects
								</a>
							</li>
							<li className="nav-item">
								<a className="nav-link" href="#contact">
									Contact
								</a>
							</li>
						</ul>
					</div>
				</div>
			</nav>

			{/* Hero Section */}
			<section id="home" className="hero-section">
				<div className="container">
					<div className="row align-items-center min-vh-100">
						<div className="col-lg-8 mx-auto text-center">
							<h1 className="display-3 fw-bold mb-3 animate-fade-in">
								Hi, I'm <span className="text-primary">Eluwa Emmanuel</span>
							</h1>
							<p className="lead mb-4 text-bold animate-fade-in-delay">
								Mobile App Developer | Product Designer
							</p>
							<div className="d-flex gap-3 justify-content-center animate-fade-in-delay-2">
								<a href="#projects" className="btn btn-primary btn-lg px-4">
									View My Work
								</a>
								<a
									href="#contact"
									className="btn btn-outline-primary btn-lg px-4"
								>
									Contact Me
								</a>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* About Section */}
			<section id="about" className="section-padding bg-light">
				<div className="container">
					<h2 className="section-title text-center mb-5">About Me</h2>
					<div className="row">
						<div className="col-lg-8 mx-auto">
							<p className="lead text-center mb-4">
								I'm a passionate mobile app developer and product designer
								focused on creating beautiful, intuitive mobile experiences.
								With expertise in React Native for mobile development,
								Express.js for backend solutions, and Figma for product design,
								I bring ideas to life from concept to deployment.
							</p>
							<div className="row g-4 mt-4">
								<div className="col-md-4 text-center">
									<div className="stat-card">
										<h3 className="fw-bold text-primary">2+</h3>
										<p className="text-muted">Years Experience</p>
									</div>
								</div>
								<div className="col-md-4 text-center">
									<div className="stat-card">
										<h3 className="fw-bold text-primary">10+</h3>
										<p className="text-muted">Apps Developed</p>
									</div>
								</div>
								<div className="col-md-4 text-center">
									<div className="stat-card">
										<h3 className="fw-bold text-primary">5+</h3>
										<p className="text-muted">Happy Clients</p>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* Skills Section */}
			<section id="skills" className="section-padding">
				<div className="container">
					<h2 className="section-title text-center mb-5">
						Skills & Technologies
					</h2>
					<div className="row g-4">
						<div className="col-md-4 col-sm-6">
							<div className="skill-card">
								<h5 className="fw-bold mb-3">Mobile Development</h5>
								<div className="d-flex flex-wrap gap-2">
									<span className="badge bg-primary">React Native</span>
									<span className="badge bg-primary">JavaScript</span>
									<span className="badge bg-primary">TypeScript</span>
									<span className="badge bg-primary">iOS</span>
									<span className="badge bg-primary">Android</span>
								</div>
							</div>
						</div>
						<div className="col-md-4 col-sm-6">
							<div className="skill-card">
								<h5 className="fw-bold mb-3">Backend</h5>
								<div className="d-flex flex-wrap gap-2">
									<span className="badge bg-success">Express.js</span>
									<span className="badge bg-success">Node.js</span>
									<span className="badge bg-success">REST APIs</span>
									<span className="badge bg-success">MongoDB</span>
								</div>
							</div>
						</div>
						<div className="col-md-4 col-sm-6">
							<div className="skill-card">
								<h5 className="fw-bold mb-3">Design</h5>
								<div className="d-flex flex-wrap gap-2">
									<span className="badge bg-warning">Figma</span>
									<span className="badge bg-warning">UI/UX Design</span>
									<span className="badge bg-warning">Prototyping</span>
									<span className="badge bg-warning">Wireframing</span>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* Projects Section */}
			<section id="projects" className="section-padding bg-light">
				<div className="container">
					<h2 className="section-title text-center mb-5">Featured Projects</h2>
					<div className="row g-4">
						<div className="col-lg-4 col-md-6">
							<div className="project-card">
								<div className="project-image">
									<img src="https://res.cloudinary.com/dmutxmoj3/image/upload/v1760514688/Screenshot_2025-10-15-08-42-03-125_com.eluwaiz.KRides_xnhztw.jpg" alt="KRides App" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
								</div>
								<div className="project-content">
									<h4 className="fw-bold mb-2">KRides</h4>
									<p className="text-muted mb-3">
										A full-featured transportation mobile app for booking
										tricycles within vast institutions built with React Native,
										Firebase and Express.js backend.
									</p>
									<div className="d-flex gap-2 mb-3">
										<span className="badge bg-primary">React Native</span>
										<span className="badge bg-success">Express.js</span>
										<span className="badge bg-warning">Figma</span>
										<span className="badge bg-success">Firebase</span>
									</div>
									<div className="d-flex gap-2">
										<a href="#" className="btn btn-sm btn-outline-primary">
											View Details
										</a>
										<a href="https://github.com/Luwaiz/KRides" target="_blank" rel="noopener noreferrer" className="btn btn-sm btn-outline-secondary">
											GitHub
										</a>
									</div>
								</div>
							</div>
						</div>
						<div className="col-lg-4 col-md-6">
							<div className="project-card">
								<div className="project-image">
									<img src="https://res.cloudinary.com/dmutxmoj3/image/upload/v1760514940/XpensePage_aulc1k.jpg" alt="Expense Tracking App" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
								</div>
								<div className="project-content">
									<h4 className="fw-bold mb-2">Expense Tracking App</h4>
									<p className="text-muted mb-3">
										An intuitive expense tracking mobile app to help users
										manage their finances effectively.
									</p>
									<div className="d-flex gap-2 mb-3">
										<span className="badge bg-primary">React Native</span>
										<span className="badge bg-success">Node.js</span>
										<span className="badge bg-warning">Figma</span>
									</div>
									<div className="d-flex gap-2">
										<a href="#" className="btn btn-sm btn-outline-primary">
											View Details
										</a>
										<a href="https://github.com/Luwaiz/Xpense" target="_blank" rel="noopener noreferrer" className="btn btn-sm btn-outline-secondary">
											GitHub
										</a>
									</div>
								</div>
							</div>
						</div>
						<div className="col-lg-4 col-md-6">
							<div className="project-card">
								<div className="project-image">
									<img src="https://res.cloudinary.com/dmutxmoj3/image/upload/v1760514908/TutorPage_mhvvus.jpg" alt="Tutor App" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
								</div>
								<div className="project-content">
									<h4 className="fw-bold mb-2">Tutor App</h4>
									<p className="text-muted mb-3">
										A mobile app connecting students with study materials for various
										subjects, featuring quiz functionalities and progress tracking.
									</p>
									<div className="d-flex gap-2 mb-3">
										<span className="badge bg-primary">React Native</span>
										<span className="badge bg-warning">Figma</span>
										<span className="badge bg-success">Firebase</span>
									</div>
									<div className="d-flex gap-2">
										<a href="#" className="btn btn-sm btn-outline-primary">
											View Design
										</a>
										<a href="https://github.com/Luwaiz/Tutor" target="_blank" rel="noopener noreferrer" className="btn btn-sm btn-outline-secondary">
											GitHub
										</a>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* Contact Section */}
			<section id="contact" className="section-padding">
				<div className="container">
					<h2 className="section-title text-center mb-5">Get In Touch</h2>
					<div className="row">
						<div className="col-lg-6 mx-auto">
							<div className="contact-card">
								<p className="text-center text-muted mb-4">
									I'm always open to new opportunities and collaborations. Feel
									free to reach out!
								</p>
								<div className="d-flex flex-column gap-3">
									<div className="contact-item">
										<strong>Email:</strong>
										<a href="mailto:your.email@example.com" className="ms-2">
											emmaeluwa2021@gmail.com
										</a>
									</div>
									<div className="contact-item">
										<strong>LinkedIn:</strong>
										<a
											href="https://linkedin.com/in/emmanuel-eluwa-138606276/"
											className="ms-2"
										>
											linkedin.com/in/emmanuel-eluwa
										</a>
									</div>
									<div className="contact-item">
										<strong>GitHub:</strong>
										<a href="https://github.com/Luwaiz" className="ms-2">
											github.com/Luwaiz
										</a>
									</div>
								</div>
								<div className="text-center mt-4">
									<a
										href="mailto:emmaeluwa2021@gmail.com"
										className="btn btn-primary btn-lg"
									>
										Send Message
									</a>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* Footer */}
			<footer className="bg-dark text-white py-4">
				<div className="container text-center">
					<p className="mb-0">
						&copy; 2025 Eluwa Emmanuel. Mobile App Developer & Product Designer.
					</p>
				</div>
			</footer>
		</div>
	);
}

export default App;
