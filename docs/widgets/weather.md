# Weather

The Weather widget display the current weather for the located provided. It will also show wind direction and speed as well as the runrise.

This widget is using the [Open Weather Api](https://openweathermap.org/). You will need to create an account and copy / paste the API key in the Senses - App.

## Screenshot  

<div class="image-wrapper">
  <img class="widget-image" src="/images/widgets/weather.png" alt="Weather Widget" width="320"/>
</div>

## Functionality

The Weather widget has the following functionality.

- Show weather data
- Display different units
- Different language support
- Show or hide description
- Show or hide Location
- Show or hide wind information

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
| City ID | ID (name) of the city. | 
| API Key | Paste the API Key from [Open Weather Api](https://openweathermap.org/) |
| Units | Choose between Metric or Imperial |
| Language | Choose the language. View all possibilities on the [Open Weather Site](https://openweathermap.org/current#multi). |
| Show description | Enable this option to show the weather description. |
| Show location | Enable this option to show the location | 
| Show wind information | Enable this option to show the wind information data | 
| Interval | Specify the interval in between the widget will poll for new data. The Open Weather API has a very strict limit. We advise to only pull for new data once every 60 seconds. |

All other configuration settings are explained [here](/widgets/introduction.html#default-widget-configuration-options).