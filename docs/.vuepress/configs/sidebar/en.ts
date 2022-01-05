import { SidebarConfig } from "@vuepress/theme-default";

export const en: SidebarConfig = {
  '/': [
    {
      text: 'Guide',
      children: [
        '/guide/introduction.md',
        '/guide/requirements.md',
        '/guide/installation.md',
        '/guide/configuration.md',
        '/guide/upgrading.md',
        '/guide/general-settings.md',
        '/guide/license.md',
        '/guide/contributing.md',
        '/guide/support.md',
        '/guide/donate.md',
      ],
    }, 
    {
      text: 'Widget Development',
      children: [
        '/widget-development/introduction.md',
        '/widget-development/creating-a-new-widget.md',
        '/widget-development/developing-local.md',
        '/widget-development/building-importing-a-widget.md',
        '/widget-development/full-api.md',
      ],
    },
    {
      text: 'Module Development',
      children: [
        '/module-development/introduction.md'
      ],
    },
    {
      text: 'Modules',
      children: [
        '/modules/introduction.md',
        '/modules/wallpaper.md',
        '/modules/speech.md'
      ],
    },
    {
      text: 'Widgets',
      children: [
        '/widgets/introduction.md',
        '/widgets/calendar.md',
        '/widgets/news-feed.md'
      ],
    },
    ]
}