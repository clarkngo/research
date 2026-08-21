import { createContentLoader } from 'vitepress'

export interface ResearchItem {
  url: string
  title: string
  status: 'Published' | 'Proceedings' | 'Under Review' | 'Active WIP' | 'Archived'
  date: string
  year: number
  venue: string
  authors: string[]
  tags: string[]
  pdf_link: string | null
  code_repo: string | null
  bibtex: string | null
  abstract: string
  category: string
}

declare const data: ResearchItem[]
export { data }

export default createContentLoader(
  [
    'publications/*.md',
    'working-papers/*.md',
    'in-progress/*.md',
    'archive/*.md',
  ],
  {
    includeSrc: false,
    render: false,
    excerpt: false,
    transform(raw) {
      return raw
        .filter((page) => {
          if (page.url.endsWith('/')) return false // section index.md pages
          const slug = (page.url.split('/').filter(Boolean).pop() ?? '').toLowerCase()
          return slug !== '' && slug !== 'template'
        })
        .map((page): ResearchItem => {
          const fm = page.frontmatter
          const category = page.url.split('/').filter(Boolean)[0] ?? ''
          return {
            url: page.url,
            title: fm.title ?? 'Untitled',
            status: fm.status ?? 'Archived',
            date: fm.date ?? '',
            year: fm.date ? Number(String(fm.date).slice(0, 4)) : 0,
            venue: fm.venue ?? '',
            authors: fm.authors ?? [],
            tags: fm.tags ?? [],
            pdf_link: fm.pdf_link ?? null,
            code_repo: fm.code_repo ?? null,
            bibtex: fm.bibtex ?? null,
            abstract: fm.abstract ?? '',
            category,
          }
        })
        .sort((a, b) => (a.date < b.date ? 1 : -1))
    },
  },
)
