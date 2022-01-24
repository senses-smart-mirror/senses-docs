# Spotify

The Spotify widget will display the current played song from Spotify. 

## Screenshot

<div class="image-wrapper">
  <img class="widget-image" src="/images/widgets/spotify.png" alt="Spotify Widget" width="300"/>
</div>

## Functionality

The Spotify widget has the following functionality: 

- Simple connect to your Spotify account
- Display the current playing song title and artist
- Display the device the song is playing
- Display the album title
- Display the song image

## How to use

Following the following steps to set up Spotify. 

1. Open the [Spotify Developer Console](https://developer.spotify.com/console/).

2. Login or sign up for an account if prompt. Accept any terms of condition that could be applied to your account.

3. Visit the [Dashboard](https://developer.spotify.com/dashboard/applications)

4. Create a new app by clicking on the "Create an App" button.

5. Specify the "App Name" and "App Description" and click "Create"

The new Application is now created. We will continue with the steps in order to provide the correct settings. 

6. Click on "Edit Settings" and provide the following value under "Redirect URI's": <em>https://downloadmirror.nl/oauth/spotify</em>

7. Save the settings page.

8. In the overview screen copy the "Client ID" and the "Client Secret".

9. Add the Spotify widget on the Smart Mirror through the Senses - App.

10. Paste the Client ID and Client Secret and save the Spotify widget.

11. Open the Spotify widget settings again and click on "Connect Spotify".

12. The Senses - App will now show the Spotify login page. After login you will automatically go back to the Senses - App. 

13. Your Spotify data will now be displayed on the Smart Mirror.

## Configuration

The following configuration options are available for this widget.

| Setting | Description |
| ----------- | ----------- |
| Widget Title | Widget header title |
| Show / hide device | Enable this option to display the current device you are playing the Spotify Music on |
| Show / hide the image | Enable this option to display the song image | 
| Show / hide the album | Enable this option to display the song album name |
| Interval | Specify the interval in between the widget will poll for new data. |

All other configuration settings are explained [here](/widgets/introduction.html#default-widget-configuration-options).