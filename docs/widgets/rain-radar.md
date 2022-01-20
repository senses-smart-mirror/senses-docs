# Rain Radar

The Rain Radar widget will display the rain forecast in a graph. It will also display when the rain starts & stops. 

<em>Currently the Rain Radar widget is only configured to work in The Netherlands. Please reach out to us if you have a data source that we can add to the widget.</em>

## Screenshot

<div class="image-wrapper">
  <img class="widget-image" src="/images/widgets/rain-radar-1.png" alt="Rain Radar Widget" width="400"/>
  <img class="widget-image" src="/images/widgets/rain-radar-2.png" alt="Rain Radar Widget" width="400"/>
</div>

## Functionality

- Shows rain forecast for the next 2 hours in a graph.
- Shows notifications when rain is expect.
- Conditional show to only show the widget when rain is expected.
- Specify latitude and longitude to see the forecast in your area.

## How to use

Simple add the Rain Radar widget to the Smart Mirror and configure the latitude and longitude in the Senses - App.

## Configuration

The following configuration options can be changed for this widget:

| Setting | Description |
| ----------- | ----------- |
| Widget Title | Widget header title |
| Latitude and Longitude | Specify the latitude and longitude for the area you are in (You can use Google Maps to find the latitude and longtiude). |
| Display Notifications | Toggle on this option to display a notification when rain is expected in the next 2 hours. |
| Conditional show | Toggle on this option to only show the widget when rain is expected in the next 2 hours. |
| Interval | Specify the interval in between the widget will poll for new data. |

All other configuration settings are explained [here](/widgets/introduction.html#default-widget-configuration-options).