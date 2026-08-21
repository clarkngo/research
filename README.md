# Research

Central research hub for Clark Ngo — peer-reviewed publications, preprints,
active work-in-progress, and archived exploratory studies. Built with
[VitePress](https://vitepress.dev) and deployed to GitHub Pages on every
push to `main`.

**Live site:** https://clarkngo.github.io/research/

## Structure

```
docs/
├── .vitepress/
│   ├── config.mts              # site nav, sidebar, search
│   └── theme/
│       ├── index.ts            # registers custom components globally
│       ├── research.data.ts    # build-time loader that indexes all entries
│       └── components/
│           ├── ResearchList.vue   # filterable card grid (search/status/tag)
│           ├── PaperMeta.vue      # per-entry metadata block + BibTeX copy
│           └── StatusBadge.vue    # colored status pill
├── publications/    # peer-reviewed, conference, and journal papers
├── working-papers/  # preprints, submitted drafts, manuscripts
├── in-progress/     # active experiments, benchmarks, architecture designs
├── archive/         # early-stage, paused, or exploratory studies
└── index.md         # homepage — combined, filterable index of everything
```

## Adding a research entry

1. Create a new `.md` file in the relevant folder (`publications/`,
   `working-papers/`, `in-progress/`, or `archive/`).
2. Fill in the frontmatter schema:

   ```yaml
   ---
   title: "Paper Title"
   status: Published        # Published | Proceedings | Under Review | Active WIP | Archived
   date: "2026-01-01"       # quoted — unquoted dates get parsed as YAML timestamps
   venue: "Conference or Journal Name"
   authors: [Clark Ngo]
   tags: [tag-one, tag-two]
   pdf_link: null           # or a URL/path to the PDF
   code_repo: null          # or a URL to the code repository
   bibtex: null             # or a literal BibTeX block (see examples)
   abstract: >
     One-paragraph summary.
   ---

   <PaperMeta />
   ```

3. The entry is picked up automatically by `ResearchList` on the homepage
   and its section index — no manual registration needed.
4. See [`docs/working-papers/TEMPLATE.md`](docs/working-papers/TEMPLATE.md)
   for a copy-pasteable starting point, or any file under
   [`docs/publications/`](docs/publications) for a filled-in example.

## Adding a PDF

**Fastest path:** drop the raw file into `_inbox/` (untracked, local-only
— create it if it doesn't exist) and ask Claude to "process the inbox."
Claude reads each PDF, looks up the paper's real citation details, renames
it per the convention below, moves it into `docs/public/pdfs/`, and
drafts or updates the matching entry — for one file or several at once.

**Manually:** drop the file into [`docs/public/pdfs/`](docs/public/pdfs) — anything in
`docs/public/` is copied verbatim into the built site, so it's directly
downloadable at `https://clarkngo.github.io/research/pdfs/<filename>`
with no other setup.

Rename it to this pattern before adding it:

```
<first-author-surname>-<year>-<short-slug>.pdf
```

- **surname** — lowercase, first author only (e.g. `ngo`, `chung`)
- **year** — the paper's publication year (4 digits)
- **slug** —2–4 hyphenated words distilled from the title, not the full
  title (e.g. `serverless-computing-security`, not
  `serverless-computing-architecture-security-and-quality-analysis`)
- add a qualifier word (`-manuscript`, `-capstone`, `-poster`) instead of
  the slug when the file isn't the final published version — see
  [`docs/archive/2020-fullstack-documentation-capstone.md`](docs/archive/2020-fullstack-documentation-capstone.md)
  for an example

```
ngo-2020-serverless-computing-security.pdf
chung-2019-fintech-blockchain-chasm.pdf
ngo-fullstack-documentation-capstone.pdf     # capstone report, not a dated paper
```

Then set `pdf_link: /research/pdfs/<filename>.pdf` in the entry's
frontmatter — the `/research/` prefix matches the site's `base` config
in [`docs/.vitepress/config.mts`](docs/.vitepress/config.mts).

## Local development

```bash
npm install
npm run dev       # http://localhost:5173
npm run build      # outputs to docs/.vitepress/dist
npm run preview    # preview the production build
```

## Deployment

`.github/workflows/deploy.yml` builds the site and publishes it to GitHub
Pages on every push to `main`. In the repo settings, set **Pages → Build
and deployment → Source** to **GitHub Actions** (one-time setup).
