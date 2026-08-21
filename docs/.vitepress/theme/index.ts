import DefaultTheme from 'vitepress/theme'
import type { Theme } from 'vitepress'
import ResearchList from './components/ResearchList.vue'
import PaperMeta from './components/PaperMeta.vue'
import StatusBadge from './components/StatusBadge.vue'
import './custom.css'

export default {
  extends: DefaultTheme,
  enhanceApp({ app }) {
    app.component('ResearchList', ResearchList)
    app.component('PaperMeta', PaperMeta)
    app.component('StatusBadge', StatusBadge)
  },
} satisfies Theme
