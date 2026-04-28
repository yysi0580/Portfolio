import type { Project, ProjectLink } from "../data/projects";

type ProjectCardProps = {
  project: Project;
};

function isExternalLink(url: string) {
  return (
    url.startsWith("http://") ||
    url.startsWith("https://") ||
    url.startsWith("mailto:")
  );
}

function ProjectAnchor({ link }: { link: ProjectLink }) {
  const external = link.external ?? isExternalLink(link.url);

  return (
    <a
      href={link.url}
      target={external ? "_blank" : undefined}
      rel={external ? "noreferrer" : undefined}
    >
      {link.label}
    </a>
  );
}

function ProjectCard({ project }: ProjectCardProps) {
  return (
    <article
      className={`work-item${project.featured ? " work-item--featured" : ""}`}
      data-animate
    >
      <div className="work-item__meta">
        <span className="work-number">{project.order}</span>
        <div>
          <p className="work-type">{project.type}</p>
          <h3>{project.title}</h3>
        </div>
      </div>

      <div className="work-item__body">
        {project.emphasis ? <p className="work-emphasis">{project.emphasis}</p> : null}
        <p className="work-summary">{project.summary}</p>

        <ul className="work-points">
          {project.points.map((point) => (
            <li key={point}>{point}</li>
          ))}
        </ul>

        <div className="work-tags" aria-label={`${project.title} 기술 스택`}>
          {project.stack.map((stack) => (
            <span key={stack}>{stack}</span>
          ))}
        </div>

        {project.accessCards ? (
          <div className="work-access" aria-label={`${project.title} 접근 정보`}>
            {project.accessCards.map((card) => (
              <article key={card.title} className="work-access__card">
                <p className="work-access__eyebrow">{card.eyebrow}</p>
                <strong>{card.title}</strong>
                <p className="work-access__summary">{card.summary}</p>
                {card.credentials ? (
                  <div className="work-access__credentials" aria-label={`${card.title} 계정 정보`}>
                    <p className="work-access__credentials-title">테스트 계정</p>
                    {card.credentials.map((credential) => (
                      <div key={credential.label} className="work-access__credential-row">
                        <span>{credential.label}</span>
                        <code>{credential.value}</code>
                      </div>
                    ))}
                  </div>
                ) : null}
                <a
                  className="work-access__button"
                  href={card.action.url}
                  target={isExternalLink(card.action.url) ? "_blank" : undefined}
                  rel={isExternalLink(card.action.url) ? "noreferrer" : undefined}
                >
                  {card.action.label}
                </a>
              </article>
            ))}
          </div>
        ) : null}

        <div className="work-links">
          {project.links.map((link) => (
            <ProjectAnchor key={`${project.id}-${link.label}`} link={link} />
          ))}
        </div>
      </div>
    </article>
  );
}

export default ProjectCard;
