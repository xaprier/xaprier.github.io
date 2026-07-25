// Env vars read via process.env across build-time scripts. Values live in
// `.env` (gitignored) locally, or repo secrets in CI — see `.env.example`.

declare namespace NodeJS {
  interface ProcessEnv {
    /** GitHub PAT used by scripts/fetch-repo-meta.ts to raise API rate limits / read private repos. Optional — falls back to unauthenticated requests. */
    GITHUB_TOKEN?: string;
  }
}
