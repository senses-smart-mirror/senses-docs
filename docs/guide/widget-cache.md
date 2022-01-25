# Widget Cache 

All widgets that are using an external API are using a build in cache mechanism. By default this is 30 seconds which means that every 30 seconds a real API call will be made to the external API's. This feature is implemented to not go over the rate limits for this external API's and avoid any not expected costs. 

Fetching new data in widgets also depends on the "interval" option that most widget have. If you have a higher number as interval than the 30 seconds it will always fetch new data.