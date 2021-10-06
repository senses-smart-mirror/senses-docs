import { navbar, sidebar } from './configs'

module.exports = {
  lang: "en-US",
  title: "Senses - Smart Mirror",
  description: "This is my first VuePress site",
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
  ],

  themeConfig: {
    logo: "http://getnick.nl/assets/images/mirror-stack.png",
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
  },
};
