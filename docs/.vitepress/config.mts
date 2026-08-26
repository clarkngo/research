import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'Clark Ngo — Research',
  description: 'Publications, preprints, and active research by Clark Ngo',

  // Project page: served at https://<user>.github.io/research/
  // Change to '/' if this ever moves to a user/apex site or custom domain.
  base: '/research/',

  cleanUrls: true,
  lastUpdated: true,

  // Standalone static pages under public/ (e.g. presentation decks) are
  // served as-is and aren't VitePress routes, so the dead-link checker
  // can't resolve them to a source page.
  ignoreDeadLinks: [/\/presentations\//],

  head: [['link', { rel: 'icon', href: '/research/favicon.ico' }]],

  themeConfig: {
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Publications', link: '/publications/' },
      { text: 'Working Papers', link: '/working-papers/' },
      { text: 'In Progress', link: '/in-progress/' },
      { text: 'Archive', link: '/archive/' },
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/clarkngo' },
    ],

    search: {
      provider: 'local',
    },

    aside: false,

    footer: {
      message: 'Research hub — built with VitePress',
      copyright: 'Copyright © Clark Ngo',
    },
  },
})
