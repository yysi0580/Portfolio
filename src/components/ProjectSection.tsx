import ProjectCard from "./ProjectCard";
import { projects } from "../data/projects";

function ProjectSection() {
  return (
    <section className="section work-section" id="projects">
      <div className="section-header" data-animate>
        <div>
          <p className="section-index">02</p>
          <h2>Selected Projects</h2>
        </div>
        <p className="section-header__summary">
          채용 담당자와 면접관이 빠르게 읽을 수 있도록, 다룬 비즈니스 흐름과 맡은
          구현 포인트가 드러나는 순서로 정리했습니다.
        </p>
      </div>

      <div className="work-list">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
}

export default ProjectSection;
