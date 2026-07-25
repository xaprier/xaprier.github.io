import siteConfig, { PinnedProject } from '../site.config';
import RepoCard, { ResolvedProject } from './RepoCard';
import repoMeta from '../generated/repo-meta.json';
import type { RepoMeta } from '../../scripts/fetch-repo-meta';

const metaMap: Record<string, RepoMeta> = repoMeta;

function resolve(project: PinnedProject): ResolvedProject {
  const meta = project.repo ? metaMap[project.repo] : undefined;
  return {
    name: project.name,
    url: project.url,
    visibility: project.visibility,
    languageColor: project.languageColor,
    // manual value wins when set, GitHub fills the gap
    description: project.description ?? meta?.description ?? '',
    language: project.language ?? meta?.language ?? '',
    // live data wins when available, manual value is just the fallback
    stars: meta?.stars ?? project.stars ?? 0,
    updated: meta?.updated ?? project.updated ?? '--',
  };
}

export default function ProjectList() {
  return (
    <div className="blk">
      <div className="sec-head">
        <span className="hash">#</span> pinned
      </div>
      <div className="repos">
        {siteConfig.pinnedProjects.map((project) => (
          <RepoCard project={resolve(project)} key={project.name} />
        ))}
      </div>
    </div>
  );
}
