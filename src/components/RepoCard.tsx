export interface ResolvedProject {
  name: string;
  url: string;
  visibility: 'public' | 'private';
  description: string;
  language: string;
  languageColor: string;
  stars: number;
  updated: string;
}

export default function RepoCard({ project }: { project: ResolvedProject }) {
  return (
    <div className="repo">
      <div className="repo-top">
        <a className="repo-name" href={project.url}>
          {project.name}
        </a>
        <span className="repo-visibility">{project.visibility}</span>
      </div>
      <div className="repo-desc">{project.description}</div>
      <div className="repo-meta">
        <span>
          <span className="lang-dot" style={{ background: project.languageColor }} />
          {project.language}
        </span>
        <span>★ {project.stars}</span>
        <span>updated: {project.updated}</span>
      </div>
    </div>
  );
}
