// Runs before `vite build` (see package.json "build" script). For every
// pinnedProjects entry that has a `repo` slug set, fetches stars/description/
// language/last-pushed-date from GitHub and writes them to
// src/generated/repo-meta.json, which components import at build time.
// On any fetch failure, the previous cached entry is kept so a flaky/offline
// build doesn't wipe out already-known data.
import { writeFileSync, readFileSync, mkdirSync } from 'node:fs';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import siteConfig from '../src/site.config.ts';

const __dirname = dirname(fileURLToPath(import.meta.url));
const OUT_PATH = resolve(__dirname, '../src/generated/repo-meta.json');

export interface RepoMeta {
  stars: number;
  description: string | null;
  language: string | null;
  updated: string; // "YYYY-MM-DD", derived from pushed_at
}

function loadCache(): Record<string, RepoMeta> {
  try {
    return JSON.parse(readFileSync(OUT_PATH, 'utf-8'));
  } catch {
    return {};
  }
}

const authHeaders: Record<string, string> = process.env.GITHUB_TOKEN
  ? { Authorization: `Bearer ${process.env.GITHUB_TOKEN}` }
  : {};

async function fetchRepoMeta(repo: string): Promise<RepoMeta | null> {
  try {
    const res = await fetch(`https://api.github.com/repos/${repo}`, {
      headers: { Accept: 'application/vnd.github+json', ...authHeaders },
    });
    if (!res.ok) {
      console.warn(`[fetch-repo-meta] ${repo}: HTTP ${res.status}, keeping cached value`);
      return null;
    }
    const data = await res.json();
    return {
      stars: typeof data.stargazers_count === 'number' ? data.stargazers_count : 0,
      description: typeof data.description === 'string' ? data.description : null,
      language: typeof data.language === 'string' ? data.language : null,
      updated: typeof data.pushed_at === 'string' ? data.pushed_at.slice(0, 10) : '--',
    };
  } catch (err) {
    console.warn(`[fetch-repo-meta] ${repo}: ${(err as Error).message}, keeping cached value`);
    return null;
  }
}

const repos = [...new Set(siteConfig.pinnedProjects.map((p) => p.repo).filter((r): r is string => !!r))];
const cache = loadCache();
const result: Record<string, RepoMeta> = { ...cache };

for (const repo of repos) {
  const meta = await fetchRepoMeta(repo);
  if (meta) {
    result[repo] = meta;
    console.log(`[fetch-repo-meta] ${repo}: ${meta.stars} stars, updated ${meta.updated}`);
  }
}

mkdirSync(dirname(OUT_PATH), { recursive: true });
writeFileSync(OUT_PATH, JSON.stringify(result, null, 2) + '\n');
