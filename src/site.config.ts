// Edit this file to change page content — meta, neofetch block, contrib
// graph source, pinned projects, contact info. No other file needs touching
// for a content-only change.

export interface NeofetchRow {
  key: string;
  value: string;
}

export interface PinnedProject {
  name: string;
  url: string;
  visibility: 'public' | 'private';
  description?: string; // if unset, description is fetched from GitHub at build time
  language?: string; // if unset, language is fetched from GitHub at build time
  languageColor: string; // css color or var(--xxx)
  repo?: string; // "owner/repo" — when set, star count is fetched from GitHub at build time
  stars?: number; // fallback shown when `repo` is unset or the build-time fetch failed
  updated?: string; // fallback shown when `repo` is unset or the build-time fetch failed
}

export interface ContactRow {
  key: string;
  value: string;
  href?: string;
}

export interface SiteConfig {
  meta: {
    title: string;
    lang: string;
  };
  terminalLabel: string;
  promptPath: string;
  neofetch: {
    user: string;
    rule: string;
    rows: NeofetchRow[];
    swatchColors: string[]; // css var names, e.g. "--red"
  };
  contrib: {
    githubUser: string;
    snakeRepo: string; // "owner/repo"
    outputBranch: string;
    snakeSvgPath: string; // path of the SVG within the output branch
    contributionsJsonPath: string; // path of the stats json within the output branch
  };
  pinnedProjects: PinnedProject[];
  contact: ContactRow[];
}

const siteConfig: SiteConfig = {
  meta: {
    title: 'xaprier ~ Seymen Kalkan',
    lang: 'en',
  },
  terminalLabel: 'xaprier@cachy: ~/workspace',
  promptPath: '~',
  neofetch: {
    user: 'xaprier@cachy',
    rule: '-----------------',
    rows: [
      { key: 'OS', value: 'CachyOS Linux x86_64' },
      { key: 'WM', value: 'Hyprland (caelestia-shell)' },
      { key: 'CPU', value: 'Intel i5-9300H' },
      { key: 'GPU', value: 'NVIDIA GTX 1650 / Intel UHD 630' },
      { key: 'Shell', value: 'fish + foot' },
    ],
    swatchColors: ['--red', '--peach', '--yellow', '--green', '--blue', '--mauve'],
  },
  contrib: {
    githubUser: 'xaprier',
    snakeRepo: 'xaprier/snk-on-contrib-graph',
    outputBranch: 'output',
    snakeSvgPath: 'github-contribution-grid-snake-dark.svg',
    contributionsJsonPath: 'contributions.json',
  },
  pinnedProjects: [
    {
      name: 'workspace',
      url: 'https://github.com/xaprier/workspace',
      visibility: 'public',
      description: 'A content-driven personal engineering portfolio template — Astro + Svelte islands, MDX-driven, token-themed.',
      language: 'TypeScript',
      stars: 0,
      languageColor: '#cf927d',
      repo: 'xaprier/workspace',
      updated: '--',
    },
    {
      name: 'XQMprViewer',
      url: 'https://github.com/xaprier/XQMprViewer',
      visibility: 'public',
      description: 'An open-source Qt + VTK multi-planar (MPR) DICOM viewer — a from-scratch foundation for Qt/VTK medical imaging tooling.',
      language: 'C++ & Qt QML & VTK',
      languageColor: 'var(--blue)',
      repo: 'xaprier/XQMprViewer',
      stars: 0, 
      updated: '--',
    },
    {
      name: 'CodExam',
      url: 'https://github.com/Haticeakt7/codexam',
      visibility: 'public',
      description: 'A realtime online coding-quiz platform — Docker-sandboxed execution, live monitoring, anticheat, and keystroke-recorded playback.',
      language: 'React & .Net Core',
      languageColor: 'var(--green)',
      repo: 'Haticeakt7/codexam',
      stars: 0,
      updated: '--',
    },
    {
      name: 'XAimAssist',
      url: 'https://github.com/xaprier/XAimAssist',
      visibility: 'public',
      description: 'XAimAssist is an open-source 3D FPS aim training application built with modern C++ architecture, Qt6, and VTK rendering.',
      language: 'C++ & Qt QML & VTK',
      languageColor: 'var(--blue)',
      repo: 'xaprier/XAimAssist',
      stars: 0,
      updated: '--',
    },
    {
      name: 'XFingerCrack',
      url: 'https://github.com/xaprier/XFingerCrack',
      visibility: 'public',
      description: 'XFingerCrack is a local keyboard typing speed test application built with QML. Inspired by MonkeyType.',
      language: 'C++ & Qt QML',
      languageColor: 'var(--blue)',
      repo: 'xaprier/XFingerCrack',
      stars: 0,
      updated: '--',
    },
    {
      name: 'XFakeContrib',
      url: 'https://github.com/xaprier/XFakeContrib',
      visibility: 'public',
      description: 'XFakeContrib is a fake contribution maker whenever date you want.',
      language: 'C++ & Qt QML',
      languageColor: 'var(--blue)',
      repo: 'xaprier/XFakeContrib',
      stars: 0,
      updated: '--',
    },
  ],
  contact: [
    { key: 'github', value: 'xaprier', href: 'https://github.com/xaprier' },
    { key: 'email', value: 'seymenkalkan@gmail.com', href: 'mailto:seymenkalkan@gmail.com' },
    { key: 'linkedin', value: 'xaprier', href: 'https://linkedin.com/in/xaprier' },
    { key: 'web', value: 'xaprier.dev', href: '#' },
    { key: 'portfolio', value: 'portfolio.xaprier.dev', href: 'https://portfolio.xaprier.dev' },
    { key: 'location', value: 'Erzurum, Turkey' },
  ],
};

export default siteConfig;
