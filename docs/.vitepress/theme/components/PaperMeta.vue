<script setup lang="ts">
import { useData } from 'vitepress'
import { ref } from 'vue'
import StatusBadge from './StatusBadge.vue'

const { frontmatter } = useData()
const copied = ref(false)
const showViewer = ref(false)

function copyBibtex() {
  if (!frontmatter.value.bibtex) return
  navigator.clipboard.writeText(frontmatter.value.bibtex)
  copied.value = true
  setTimeout(() => (copied.value = false), 1500)
}
</script>

<template>
  <div class="paper-meta">
    <h1>{{ frontmatter.title }}</h1>
    <div class="row">
      <StatusBadge :status="frontmatter.status" />
      <span class="venue" v-if="frontmatter.venue">{{ frontmatter.venue }}</span>
      <span class="date" v-if="frontmatter.date">{{ String(frontmatter.date) }}</span>
    </div>

    <p class="authors" v-if="frontmatter.authors?.length">
      {{ frontmatter.authors.join(', ') }}
    </p>

    <p class="abstract" v-if="frontmatter.abstract">{{ frontmatter.abstract }}</p>

    <div class="tags" v-if="frontmatter.tags?.length">
      <span class="tag" v-for="tag in frontmatter.tags" :key="tag">{{ tag }}</span>
    </div>

    <div class="links">
      <a v-if="frontmatter.pdf_link" :href="frontmatter.pdf_link" target="_blank" rel="noopener">PDF</a>
      <button v-if="frontmatter.pdf_link" class="cite-btn" @click="showViewer = !showViewer">
        {{ showViewer ? 'Hide Viewer' : 'View PDF' }}
      </button>
      <a v-if="frontmatter.code_repo" :href="frontmatter.code_repo" target="_blank" rel="noopener">Code</a>
      <button v-if="frontmatter.bibtex" class="cite-btn" @click="copyBibtex">
        {{ copied ? 'Copied!' : 'Copy BibTeX' }}
      </button>
    </div>

    <div v-if="showViewer && frontmatter.pdf_link" class="pdf-viewer">
      <iframe :src="frontmatter.pdf_link" title="PDF viewer" />
    </div>

    <details v-if="frontmatter.bibtex" class="bibtex-block">
      <summary>BibTeX</summary>
      <pre>{{ frontmatter.bibtex }}</pre>
    </details>

    <hr />
  </div>
</template>

<style scoped>
.paper-meta {
  margin-bottom: 24px;
}
.row {
  display: flex;
  align-items: center;
  gap: 10px;
  flex-wrap: wrap;
  margin-bottom: 8px;
}
.venue {
  font-weight: 600;
  color: var(--vp-c-text-1);
}
.date {
  color: var(--vp-c-text-3);
  font-size: 14px;
}
.authors {
  color: var(--vp-c-text-2);
  font-size: 14px;
  margin: 4px 0;
}
.abstract {
  color: var(--vp-c-text-2);
  line-height: 1.6;
}
.tags {
  display: flex;
  gap: 6px;
  flex-wrap: wrap;
  margin: 8px 0;
}
.tag {
  font-size: 12px;
  padding: 2px 8px;
  border-radius: 6px;
  background: var(--vp-c-default-soft);
  color: var(--vp-c-text-2);
}
.links {
  display: flex;
  gap: 12px;
  align-items: center;
  margin-top: 10px;
}
.cite-btn {
  font-size: 13px;
  padding: 3px 10px;
  border-radius: 6px;
  border: 1px solid var(--vp-c-divider);
  background: var(--vp-c-bg-soft);
  cursor: pointer;
}
.bibtex-block {
  margin-top: 10px;
}
.bibtex-block pre {
  white-space: pre-wrap;
  font-size: 12px;
}
.pdf-viewer {
  margin-top: 14px;
  border: 1px solid var(--vp-c-divider);
  border-radius: 8px;
  overflow: hidden;
}
.pdf-viewer iframe {
  display: block;
  width: 100%;
  height: 80vh;
  border: none;
}
</style>
