<script setup lang="ts">
defineProps<{ status: string }>()

const colorFor: Record<string, string> = {
  Published: '#1a7f37',
  Proceedings: '#8250df',
  'Under Review': '#9a6700',
  'Active WIP': '#0969da',
  Coursework: '#0f766e',
  Defended: '#4338ca',
  Archived: '#6e7781',
}
</script>

<template>
  <span
    class="status-badge"
    :style="{
      '--badge-color': colorFor[status] ?? '#6e7781',
    }"
  >
    {{ status }}
  </span>
</template>

<style scoped>
.status-badge {
  display: inline-block;
  padding: 2px 10px;
  border-radius: 999px;
  font-size: 12px;
  font-weight: 600;
  color: var(--badge-color);
  background-color: color-mix(in srgb, var(--badge-color) 14%, transparent);
  border: 1px solid color-mix(in srgb, var(--badge-color) 35%, transparent);
  white-space: nowrap;
}
</style>
