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
        '/widgets/clock.md',
        '/widgets/crypto.md',
        '/widgets/crypto-graph.md',
        '/widgets/chuck-norris.md',
        '/widgets/compliments.md',
        '/widgets/flights.md',
        '/widgets/formula1.md',
        '/widgets/github-stars.md',
        '/widgets/hue.md',
        '/widgets/internet-connection.md',
        '/widgets/mercedes.md',
        '/widgets/nest.md',
        '/widgets/news-feed.md',
        '/widgets/notifications.md',
        '/widgets/profile.md',
        '/widgets/qr.md',
        '/widgets/quote.md',
        '/widgets/rain-radar.md',
        '/widgets/reddit.md',
        '/widgets/reminders.md',
        '/widgets/spacer.md',
        '/widgets/speech.md',
        '/widgets/speed-cameras.md',
        '/widgets/speedtest.md',
        '/widgets/spotify.md',
        '/widgets/stats.md',
        '/widgets/stocks.md',
        '/widgets/text-clock.md',
        '/widgets/todos.md',
        '/widgets/trains.md',
        '/widgets/travel-time.md',
        '/widgets/version-viewer.md',
        '/widgets/video-player.md',
        '/widgets/voice.md',
        '/widgets/weather.md',
        '/widgets/weather-forecast.md',
      ],
    },
    ]
}