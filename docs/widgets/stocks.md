# Stocks

The Stocks widget will display stock data from different symbols. It uses [Finnhub Data](https://finnhub.io/) to get the data realtime.

<em>For this widget you will need to create an external account. Please know that Finnhub Data API has a usage limit</em> 

## Screenshot

<div class="image-wrapper">
  <img class="widget-image" src="/images/widgets/stocks.png" alt="Stocks Widget" width="360"/>
</div>

## Functionality

- Show realtime stock data based on given symbols
- Shows 24 hours change in percentage.

## How to use

1. Go to [Finnhub Data](https://finnhub.io/) and create an account. 

2. After creating an account copy the "API Key".

3. Paste the API Key in the Stock widgets configuration options.

4. Provide the list with symbols you want see. <em>You can comma separate multiple symbols. Example: IBM,AAPL,TSLA,GME</em>.

## Configuration

The following configuration options are available for this widget.

| Setting | Description |
| ----------- | ----------- |
| Widget Title | Widget header title |
| Symbols | Specify the symbols, you can specify multiple symbols by separating them with a comma. <em>Example: IBM,AAPL,TSLA,GME</em>. |
| Api Key | Specify the API Key from [Finnhub Data](https://finnhub.io/).
| Interval | Specify the interval in between the widget will poll for new data. |

All other configuration settings are explained [here](/widgets/introduction.html#default-widget-configuration-options).