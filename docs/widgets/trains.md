# Trains

The Trains widget will display <strong>arrival</strong>, <strong>departure</strong> and <strong>disruptions</strong> data for all train stations in The Netherlands. For this widget [a NS account](https://apiportal.ns.nl/) is required. 

<em>Currently only working with public transport in The Netherlands. Do you know a datasource or open API for other countries? Let us know and we might add the functionality.</em>

## Screenshot

<div class="image-wrapper">
  <img class="widget-image" src="/images/widgets/trains-1.png" alt="Trains Widget" width="360"/>
  <img class="widget-image" src="/images/widgets/trains-2.png" alt="Trains Widget" width="360"/>
</div>

## Functionality

The Trains widget has the following functionality: 

- Choose Station from list of known NS Stations
- Display arrivals on a station
- Display departures from a station 
- Display disruptions around a station
- Filter departure station to show commute

## How to use

1. Create an account at [NS API Portal](https://apiportal.ns.nl/signin). Select the option "Externe Bezoeker".

2. Click "Sign Up Now" in order to start creating an account.

3. Provide the details and verify your email address. 

4. Navigate to the [Product Page](https://apiportal.ns.nl/products?api=reisinformatie-api).

5. Select the "NS-App" product and click "Abonneren" (subscribe). <em>If you want you can specify a name, this is option and you can leave this as "NS-App"</em>

6. Click on "Bevestigen". The page will now redirect to your profile where you can see your keys. 

7. Click on "weergeven" under "Primaire Sleuten" and copy the API Key.

8. Provide (paste) the key in the Trains Widget.

## Configuration

The following configuration options are available for this widget.

| Setting | Description |
| ----------- | ----------- |
| Widget Title | Widget header title |
| API Key | Specify the API Key from [NS API Portaal](https://apiportal.ns.nl/) |
| Station Name | After provided a valid API Key this list will display all stations. Use the search to typeahead and select the station. Please note: first save the widget after providing the API Key. |
| Show Arrivals | Toggle on this option to show the arrivals |
| Show Departures | Toggle on this option to show the departures | 
| Show Disruptions | Toggle on this option to show the disruptions |
| Arrivals Limit | Limit the amount of items to be displayed for arrivals |
| Departures Limit | Limit the amount of items to be displayed for departures |
| Stations Filter | Specify a station (name) to show this station in the departures list |
| Show Icons | Toggle on this option to show the icons in the lists |
| Interval | Specify the interval in between the widget will poll for new data. |

All other configuration settings are explained [here](/widgets/introduction.html#default-widget-configuration-options).