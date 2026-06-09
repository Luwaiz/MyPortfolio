import type { Project } from "../types";

interface Props {
  project: Project;
}

export function ProjectCard({ project }: Props) {
  return (
    <div className="col-lg-4 col-md-6">
      <div className="project-card">
        <div className="project-image">
          <img
            src={project.imageUrl}
            alt={project.imageAlt}
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
          />
        </div>
        <div className="project-content">
          <h4 className="fw-bold mb-2">{project.title}</h4>
          <p className="text-muted mb-3">{project.description}</p>
          <div className="d-flex gap-2 mb-3">
            {project.badges.map((badge) => (
              <span key={badge.label} className={`badge bg-${badge.color}`}>
                {badge.label}
              </span>
            ))}
          </div>
          <div className="d-flex gap-2">
            {project.linkUrl ? (
              <a
                href={project.linkUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-sm btn-outline-primary"
              >
                {project.buttonLabel}
              </a>
            ) : (
              <span className="btn btn-sm btn-outline-primary disabled" aria-disabled="true">
                {project.buttonLabel}
              </span>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
