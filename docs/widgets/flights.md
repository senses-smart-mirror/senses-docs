# Flights 

The Flights widget shows the arrival & departure flights from <strong>Schiphol Amsterdam Airport in the The Netherlands</strong>. This widget requires you to have a developer account at [Schiphol Developer Center](https://developer.schiphol.nl/). 

<em>Please read more about how to get an account in the How to Use section on this page.</em>

## Screenshot

<div class="image-wrapper">
  <img class="widget-image" src="/images/widgets/flights.png" alt="Flights Widget" width="500"/>
</div>

## Functionality

- Show Arrivals
- Show Departures
- Fetch new data based on interval
- Show a specific flight based on Flight Number
- Show Destination or source 
- Show Flight Codeshares
- Show Flight Airline
- Limit the results
- Show or hide icons 
- Show in minimal design in wake up screen.

## How to use

1. Create an account at [Schiphol Developer Center](https://developer.schiphol.nl/). 
2. After creating an account visit the <strong>"Applications"</strong> page and create a new application.
3. Specify the "application name" and "description".
4. After creating the new application you will see the Application ID and the Application Keys.
5. Add the Flights Widget on your Smart Mirror using the Senses - Smart Mirror App.
6. Copy the Application ID and Application Key and provide them in the Senses - Smart Mirror App.

All done, you can now use the flights widget.

## Configuration


| Setting | Description |
| ----------- | ----------- |
| Widget Title | Widget header title |
| App ID (Application Id) | The ID from the Schiphol Developer Center |
| API KEY (Subscription Id) | The Api key from the Schiphol Developer Center | 
| Show Specific Flight | Specify a Flight Number <em>(example: KL1301)</em> to only show 1 flight. |
| Show Arrivals | Toggle this option to show the arrivals | 
| Show Departures | Toggle this option to show the departures | 
| Show Destination or source | Toggle to show the destination for outgoing flights or the source for incoming flights |
| Show Flights Codeshares | Toggle to show the Flight Codeshares. <em>Some flights use multiple codes</em> |
| Show flights Airline | Toggle to show the flight airline. |
| Interval | Specify the interval in which the widget will poll for new data. |
| Limit | Specify the amount the of items to be displayed. The limit of items could be influenced by the flights that share the same codeshare. |
| Show Icons | Toggle this option to show the icons |

All other configuration settings are explained [here](/widgets/introduction.html#default-widget-configuration-options).