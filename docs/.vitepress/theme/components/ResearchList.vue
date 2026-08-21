<script setup lang="ts">
import { computed, ref } from 'vue'
import { data as allItems } from '../research.data'
import StatusBadge from './StatusBadge.vue'

const props = defineProps<{
  category?: string // 'publications' | 'working-papers' | 'in-progress' | 'archive'
}>()

const search = ref('')
const statusFilter = ref<string>('All')
const tagFilter = ref<string>('All')

const scoped = computed(() =>
  props.category ? allItems.filter((i) => i.category === props.category) : allItems,
)

const statuses = computed(() => ['All', ...new Set(scoped.value.map((i) => i.status))])
const tags = computed(() => ['All', ...new Set(scoped.value.flatMap((i) => i.tags))])

const filtered = computed(() =>
  scoped.value.filter((i) => {
    const matchesSearch =
      !search.value ||
      i.title.toLowerCase().includes(search.value.toLowerCase()) ||
      i.authors.join(' ').toLowerCase().includes(search.value.toLowerCase()) ||
      i.venue.toLowerCase().includes(search.value.toLowerCase())
    const matchesStatus = statusFilter.value === 'All' || i.status === statusFilter.value
    const matchesTag = tagFilter.value === 'All' || i.tags.includes(tagFilter.value)
    return matchesSearch && matchesStatus && matchesTag
  }),
)
</script>

<template>
  <div class="research-list">
    <div class="filters">
      <input
        class="search"
        type="text"
        v-model="search"
        placeholder="Search title, author, venue..."
      />
      <select v-model="statusFilter">
        <option v-for="s in statuses" :key="s" :value="s">{{ s === 'All' ? 'All statuses' : s }}</option>
      </select>
      <select v-model="tagFilter">
        <option v-for="t in tags" :key="t" :value="t">{{ t === 'All' ? 'All tags' : t }}</option>
      </select>
    </div>

    <p class="count">{{ filtered.length }} item{{ filtered.length === 1 ? '' : 's' }}</p>

    <div class="cards">
      <a v-for="item in filtered" :key="item.url" :href="item.url" class="card">
        <div class="card-top">
          <StatusBadge :status="item.status" />
          <span class="year" v-if="item.year">{{ item.year }}</span>
        </div>
        <h3>{{ item.title }}</h3>
        <p class="venue" v-if="item.venue">{{ item.venue }}</p>
        <p class="authors" v-if="item.authors.length">{{ item.authors.join(', ') }}</p>
        <div class="tags" v-if="item.tags.length">
          <span class="tag" v-for="tag in item.tags" :key="tag">{{ tag }}</span>
        </div>
      </a>
    </div>

    <p v-if="!filtered.length" class="empty">No items match your filters.</p>
  </div>
</template>

<style scoped>
.filters {
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
  margin: 20px 0 8px;
}
.search {
  flex: 1;
  min-width: 200px;
}
.search,
select {
  padding: 6px 10px;
  border-radius: 6px;
  border: 1px solid var(--vp-c-divider);
  background: var(--vp-c-bg-soft);
  color: var(--vp-c-text-1);
  font-size: 14px;
}
.count {
  color: var(--vp-c-text-3);
  font-size: 13px;
  margin-bottom: 12px;
}
.cards {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 14px;
}
.card {
  display: block;
  padding: 16px;
  border: 1px solid var(--vp-c-divider);
  border-radius: 10px;
  text-decoration: none !important;
  color: inherit;
  transition: border-color 0.15s;
}
.card:hover {
  border-color: var(--vp-c-brand-1);
}
.card-top {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 8px;
}
.year {
  font-size: 12px;
  color: var(--vp-c-text-3);
}
.card h3 {
  font-size: 16px;
  margin: 0 0 6px;
  border: none;
  padding: 0;
}
.venue {
  font-size: 13px;
  font-weight: 600;
  color: var(--vp-c-text-2);
  margin: 0 0 4px;
}
.authors {
  font-size: 13px;
  color: var(--vp-c-text-3);
  margin: 0 0 8px;
}
.tags {
  display: flex;
  gap: 6px;
  flex-wrap: wrap;
}
.tag {
  font-size: 11px;
  padding: 2px 7px;
  border-radius: 6px;
  background: var(--vp-c-default-soft);
  color: var(--vp-c-text-2);
}
.empty {
  color: var(--vp-c-text-3);
  padding: 24px 0;
}
</style>
