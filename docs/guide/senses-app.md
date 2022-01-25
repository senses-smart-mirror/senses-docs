# Senses - App

The Senses - App is created to help configure the Smart Mirror and to easy set up different layouts. The Senses - App is a web application launched and connected from the Senses - Smart Mirror Software. You will have to start the Smart Mirror software first before you can open the web app. 

#### Open the Senses - App
 
By default the newly installed Senses - Smart Mirror software will display a QR code. This QR Code will open the Senses - App in any web browser. 

<em>You can also manually open the Senses - App by visiting the Raspberry PI IP address on your home network and add the port: <strong>7011</strong>. For example: 10.0.0.1:7011.</em> 

#### Progressive web app 

The Senses - App is a so called PWA and can be saved on your mobile as an 'normal' app. This means you only have to scan the QR code once in order to open the app. After saving the web page on your Phone OS you can open the newly installed app to open the Senses - App and connect to the Smart Mirror.

#### Global Options 
<br />

<div class="image-wrapper">
  <img class="widget-image" src="/global-options.png" alt="Global Options" width="300"/>
</div>

With the Senses - App you can configure the Smart Mirror with widgets and configuration options but you can also use several actions or options. The following actions are possible: 

- <strong>Reload configuration file</strong>
<br />You can use this option to reload all the widgets and configuration. Reloading will flush the cache and fetch new data. This option could be useful when one widget is not showing correct data.

- <strong>Toggle Standby Mode</strong>
<br />Use this option to toggle the software standby mode. In standby mode all widgets will not fetch any new data.

- <strong>Create Backup Configuration</strong>
<br />With this option you can create a backup configuration. Every 5 minutes and before updating the software a backup will be automatically created. 

- <strong>Use Backup configuration</strong>
<br />Use the last created backup configuration and reload all widgets.

- <strong>Turn Off / On</strong>
<br />Turn off or on the Senses - Software. This will stop all widgets from fetching new data. The GUI will show a black screen. 

- <strong>Turn Off / On Monitor</strong>
<br />Turn off or on the Senses - Software and monitor. This will stop all widgets from fetching new data and turns off the monitor.

- <strong>Check for Updates</strong>
<br />Using this option will check if there are new updates for the Senses - Smart Mirror software. If there is a new version available you can trigger the automatically update.

- <strong>Connect to WIFI</strong>
<br />Pressing this option will display the connect to internet overlay. In this overlay you can see to which current WIFI endpoint the Raspberry PI is connected. You can also connect to other networks from this screen. 