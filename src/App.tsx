import { useState } from "react";
import { usePortfolioData } from "./hooks/usePortfolioData";
import { ProjectCard } from "./components/ProjectCard";
import type { ProjectCategory } from "./types";
import "./App.css";

const CATEGORY_ORDER: ProjectCategory[] = ["mobile", "web"];
const CATEGORY_LABELS: Record<ProjectCategory, string> = {
	mobile: "Mobile App Development",
	web: "Web Development",
};

function App() {
	const [showAllProjects, setShowAllProjects] = useState(false);
	const { projects, profile, loading } = usePortfolioData();

	const hasHiddenProjects = projects.some((p) => !p.defaultVisible);
	const shownProjects = showAllProjects
		? projects
		: projects.filter((p) => p.defaultVisible);

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
								<a className="nav-link" href="#home">Home</a>
							</li>
							<li className="nav-item">
								<a className="nav-link" href="#about">About</a>
							</li>
							<li className="nav-item">
								<a className="nav-link" href="#skills">Skills</a>
							</li>
							<li className="nav-item">
								<a className="nav-link" href="#projects">Projects</a>
							</li>
							<li className="nav-item">
								<a className="nav-link" href="#contact">Contact</a>
							</li>
						</ul>
					</div>
				</div>
			</nav>

			{/* Hero Section */}
			<section id="home" className="hero-section">
				<div className="hero-orb hero-orb-1" />
				<div className="hero-orb hero-orb-2" />
				<div className="hero-orb hero-orb-3" />
				<div className="container">
					<div className="row align-items-center min-vh-100 py-5">
						<div className="col-lg-7 hero-left">
							<div className="hero-available-badge animate-slide-up">
								<span className="hero-pulse-dot" />
								Available for new projects
							</div>
							<h1 className="hero-title animate-slide-up-1">
								Hi, I'm <br />
								<span className="hero-name-gradient">Eluwa Emmanuel</span>
							</h1>
							<p className="hero-subtitle animate-slide-up-2">
								{profile?.heroSubtitle ?? "Mobile App Developer | Product Designer"}
							</p>
							<div className="d-flex gap-3 animate-slide-up-3 flex-wrap">
								<a href="#projects" className="btn btn-primary btn-lg px-4">
									View My Work
								</a>
								<a href="#contact" className="btn btn-outline-primary btn-lg px-4">
									Contact Me
								</a>
							</div>
							<div className="hero-stats animate-slide-up-4">
								<div className="hero-stat">
									<span className="hero-stat-number">{profile?.yearsExperience ?? "3+"}</span>
									<span className="hero-stat-label">Years Exp.</span>
								</div>
								<div className="hero-stat-divider" />
								<div className="hero-stat">
									<span className="hero-stat-number">{profile?.appsBuilt ?? "10+"}</span>
									<span className="hero-stat-label">Apps Built</span>
								</div>
								<div className="hero-stat-divider" />
								<div className="hero-stat">
									<span className="hero-stat-number">{profile?.happyClients ?? "5+"}</span>
									<span className="hero-stat-label">Clients</span>
								</div>
							</div>
						</div>
						<div className="col-lg-5 d-none d-lg-flex justify-content-center animate-slide-up-2">
							<div className="hero-visual">
								<div className="hero-card-mockup">
									<div className="hero-card-dots">
										<div className="hero-card-dot dot-red" />
										<div className="hero-card-dot dot-yellow" />
										<div className="hero-card-dot dot-green" />
									</div>
									<div className="hero-code-lines">
										<div className="hero-code-line" style={{ width: "75%" }} />
										<div className="hero-code-line accent" style={{ width: "55%" }} />
										<div className="hero-code-line" style={{ width: "88%" }} />
										<div className="hero-code-line accent" style={{ width: "42%" }} />
										<div className="hero-code-line" style={{ width: "68%" }} />
										<div className="hero-code-line" style={{ width: "30%" }} />
										<div className="hero-code-line accent" style={{ width: "72%" }} />
										<div className="hero-code-line" style={{ width: "50%" }} />
										<div className="hero-code-line" style={{ width: "80%" }} />
										<div className="hero-code-line accent" style={{ width: "38%" }} />
									</div>
								</div>
								<div className="hero-floating-badge fb-1">⚛ React Native</div>
								<div className="hero-floating-badge fb-2">🔥 Firebase</div>
								<div className="hero-floating-badge fb-3">🤖 AI / LLM</div>
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
								{profile?.aboutText}
							</p>
							<div className="row g-4 mt-4">
								<div className="col-md-4 text-center">
									<div className="stat-card">
										<h3 className="fw-bold text-primary">
											{profile?.yearsExperience ?? "3+"}
										</h3>
										<p className="text-muted">Years Experience</p>
									</div>
								</div>
								<div className="col-md-4 text-center">
									<div className="stat-card">
										<h3 className="fw-bold text-primary">
											{profile?.appsBuilt ?? "10+"}
										</h3>
										<p className="text-muted">Apps Developed</p>
									</div>
								</div>
								<div className="col-md-4 text-center">
									<div className="stat-card">
										<h3 className="fw-bold text-primary">
											{profile?.happyClients ?? "5+"}
										</h3>
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
									<span className="badge bg-success">Firebase</span>
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
					{loading ? (
						<div className="text-center py-5">
							<div className="spinner-border text-primary" role="status">
								<span className="visually-hidden">Loading...</span>
							</div>
						</div>
					) : (
						<>
							{CATEGORY_ORDER.map((category) => {
								const categoryProjects = shownProjects.filter(
									(p) => (p.category ?? "mobile") === category
								);
								if (categoryProjects.length === 0) return null;
								return (
									<div key={category} className="mb-5">
										<h3 className="projects-category-title mb-4">
											{CATEGORY_LABELS[category]}
										</h3>
										<div className="row g-4">
											{categoryProjects.map((project) => (
												<ProjectCard key={project.id} project={project} />
											))}
										</div>
									</div>
								);
							})}
							{hasHiddenProjects && (
								<div className="text-center mt-4">
									<button
										type="button"
										className="btn btn-outline-primary btn-lg px-4"
										onClick={() => setShowAllProjects((v) => !v)}
									>
										{showAllProjects ? "Show Less" : "See All"}
									</button>
								</div>
							)}
						</>
					)}
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
										<a href={`mailto:${profile?.email}`} className="ms-2">
											{profile?.email}
										</a>
									</div>
									<div className="contact-item">
										<strong>LinkedIn:</strong>
										<a href={profile?.linkedinUrl} className="ms-2">
											{profile?.linkedinLabel}
										</a>
									</div>
								</div>
								<div className="text-center mt-4">
									<a
										href={`mailto:${profile?.email}`}
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
