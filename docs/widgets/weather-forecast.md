# Weather Forecast

The Weather Forecast widget shows the expected weather for the next 5 days. The data can be displayed in a list or in a graph. 

This widget is using the [Open Weather Api](https://openweathermap.org/). You will need to create an account and copy / paste the API key in the Senses - App.

## Screenshot

<div class="image-wrapper">
  <img class="widget-image" src="/images/widgets/weather-forecast-1.png" alt="Weather Forecast Widget" width="300"/>
  <img class="widget-image" src="/images/widgets/weather-forecast-2.png" alt="Weather Forecast Widget" width="300"/>
</div>

## Functionality

- Display forecast data for next 5 days.
- Display forecast data in a graph.
- Display different units
- Different language support

## How to use

Follow the following steps for set up the weather widget.

1. Go to: [Open Weather Api](https://openweathermap.org/) and create an account (or sign in).

2. After creating an account navigate to API Keys section and generate a new API key.

3. Copy the newly created API key and paste the key in the Weather widget in Senses - App. 

4. Configure the Weather widget to your likings.

## Configuration

The following configuration options are available for this widget.

| Setting | Description |
| ----------- | ----------- |
| Widget Title | Widget header title |
| Default URL | Specify the URL for the Weather Data. This is set to the Open Weather Api at this time |
| API Key | Paste the API Key from [Open Weather Api](https://openweathermap.org/) |
| Units | Choose between Metric or Imperial |
| Show Graph | Enable this option to display the forecast in a graph |
| Show animation | Enable this option to animate the graph. This option must be enabled if you use this widget in the [animator](/guide/general-settings.html). 
| Language | Choose the language. View all possibilities on the [Open Weather Site](https://openweathermap.org/current#multi). |
| Interval | Specify the interval in between the widget will poll for new data. The Open Weather API has a very strict limit. We advise to only pull for new data once every 60 seconds. |

All other configuration settings are explained [here](/widgets/introduction.html#default-widget-configuration-options).