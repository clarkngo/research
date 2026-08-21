---
layout: doc
title: Research
---

# Research

Publications, working papers, active investigations, and archived work by
Clark Ngo.

<div class="category-chips">
  <a :href="withBase('/publications/')" class="chip">Publications</a>
  <a :href="withBase('/working-papers/')" class="chip">Working Papers</a>
  <a :href="withBase('/in-progress/')" class="chip">In Progress</a>
  <a :href="withBase('/archive/')" class="chip">Archive</a>
</div>

<ResearchList />

<script setup>
import { withBase } from 'vitepress'
</script>

<style scoped>
.category-chips {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin: 12px 0 20px;
}
.chip {
  font-size: 13px;
  font-weight: 600;
  padding: 4px 12px;
  border-radius: 999px;
  border: 1px solid var(--vp-c-divider);
  background: var(--vp-c-default-soft);
  color: var(--vp-c-text-2) !important;
  text-decoration: none !important;
  transition: border-color 0.15s, color 0.15s;
}
.chip:hover {
  border-color: var(--vp-c-brand-1);
  color: var(--vp-c-brand-1) !important;
}
</style>
