import { navbar, sidebar } from './configs'

module.exports = {
  lang: "en-US",
  title: "Senses - Smart Mirror",
  description: "Modern, clean & minimalistic design software for your Smart Mirror.",
  repo: "senses-smart-mirror/senses-docs",
  head: [
    [
      "link",
      {
        rel: "icon",
        type: "image/png",
        sizes: "16x16",
        href: `/images/favicon.png`,
      },
    ],
    ['meta', { name: 'msapplication-TileColor', content: '#27B5E2' }],
    ['meta', { name: 'theme-color', content: '#27B5E2' }],
  ],
  footer: {
    license: {
      text: 'MIT License',
      link: 'https://opensource.org/licenses/MIT'
    },
    copyright: `Copyright © 2020-${new Date().getFullYear()} Nick Thesing`
  },

  themeConfig: {
    codeTheme: "default",
    activeHeaderLinks: false,
    logo: "/senses-logo.png",
    docsRepo: 'senses-smart-mirror/senses-docs',
    docsBranch: 'main',
    editLinks: true,
    smoothScroll: true,
    editLinkText: 'Help us improve this page!',
    lastUpdated: 'Updated',
    locales: {
      /**
       * English locale config
       *
       * As the default locale of @vuepress/theme-default is English,
       * we don't need to set all of the locale fields
       */
      '/': {
        // navbar
        navbar: navbar.en,
  
        // sidebar
        sidebar: sidebar.en
      },
    }
  }
};
