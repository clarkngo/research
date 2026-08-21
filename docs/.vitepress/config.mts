import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'Clark Ngo — Research',
  description: 'Publications, preprints, and active research by Clark Ngo',

  // Project page: served at https://<user>.github.io/research/
  // Change to '/' if this ever moves to a user/apex site or custom domain.
  base: '/research/',

  cleanUrls: true,
  lastUpdated: true,

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
