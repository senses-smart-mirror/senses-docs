# Calendar

The Calendar widget shows your calendar data from your Google Account. This widget is a premium widget and you will need to setup an developer account in order to use the widget.

## Screenshot

<div class="image-wrapper">
  <img class="widget-image" src="/images/widgets/calendar.png" alt="Calendar Widget" width="400"/>
</div>  

## Functionality

The calendar widget can do the following: 

- Show calendar items from your Google Calendar.
- Show time to next appointment.
- Show next appointment in the text widget.
- Set the interval in between new data will be fetched. 
- Show today's appointments or all appointments
- Limit the amount of appointments
- Show or hide the start time
- Conditional show only if there are items for the current.
- Minimal design for wake up screen
- Different widget designs

## How to use

You can add the Calendar widget to the Smart Mirror with the Senses - App. After placing the widget to the grid the configuration settings will automatically open.

### Google Instructions

In order to access your personal calendar please follow the following instructions. 

<em>We advise you to setup the Google Account on a normal Desktop/Laptop browser and not on your mobile.</em>

1. Navigate to: [Google CLoud Console](https://console.cloud.google.com/)

2. Login with your Google Account and provide any details mentioned in pop ups (for example: provide your country and access the Terms Of Service). <em>It could be that you don't need to do this step anymore.</em>

3. On the "Dashboard" screen select <strong>"Create project"</strong>. This will open a new page to create a new project.

4. Provide the project name (examples: smart-mirror, or senses-smart-mirror).
5. Click Create Project in order to create the new project.
<br /><br />
<strong>Your project is now created and you will see the project's dashboard.</strong>
<br /><br />
6. In the "search products and resources" bar search for Calendar API and select <strong>"Google Calendar API"</strong>

7. A new screen has opened where you press <strong>"Enable"</strong>. This will enable the Calendar API in your project.

8. On the "Manage Google Calendar API" you now click on the <strong>"Credentials"</strong> page.

9. On this page click on the <strong>Configure Consent Screen</strong> option.

10. On the OAuth Consent Screen choose "External" and press the button <strong>Create</strong>.

11. Fill in the following fields: App name, User Support Email and Developer Contact Information. 

12. Click on <strong>"Add Domain"</strong> and specify: <em>downloadmirror.com</em>. (This website will redirect you automatically back to the Smart Mirror App)

13. Click <strong>Continue"</strong>. Your Consent Screen is now created. 

14. Click <strong>"add users"</strong> under <strong>Test Users</strong> and specify your own email address. 

15. Click on <strong>"Credentials"</strong> and click <strong>"Create Credentials"</strong> (in the top) and select <strong>OAuth Client ID</strong>.

16. Select <strong>"Web Application"</strong> under Application Type and specify a name.

17. Click "Add URI" under <strong>Authorized Redirect URI's</strong> and add: <em>https://downloadmirror.nl/oauth/google</em>

18. Click create which will show your Client ID and Client Secret. Copy both of these strings and add them to the options in the Calendar in the Senses App. 
<br /><br />
<strong>You are now done inside the Google Console and you can leave this page.</strong>
<br /><br />
19. After copying both <em>Client ID</em> and the <em>Client Secret</em> into the app save the Calendar widget and open the settings again by clicking on the Calendar Widget on the grid.

20. Click "Connect Google" and login with your Google Account.  

You now successfully enabled Google with Senses - Smart Mirror. Add an item to your calendar to see it reflected in the widget. Please note that the calendar widget maybe is configured to only show appointments for the current day. You can change this setting in the Calendar settings.

## Configuration

The following configuration settings are available for the Calendar Widget.

| Setting | Description |
| ----------- | ----------- |
| Connect Google | This button will allow you to connect your Google Calendar to Senses. Please see the above instructions on how to setup this. |
| Client ID | Paste your Client id from above instructions here. | 
| Client Secret | Paste your Client Secret from above instructions here. |
| Access Token | After setting up your Google Account this setting will automatically be populated. |
| Refresh Token | After setting up your Google Account this setting will automatically be populated. |
| Widget Title | The header title of the widget |
| Interval | Specify the interval in between Senses will poll for new events / calendar items (in milliseconds). We recommend to put '600000' which translates to every 10 minutes |
| Icons | Show or hide icons per calendar item |
| Show Today's appointments only | Display only today's calendar items or disable all. Enabling this option will only show today's appointments.
| Start Time | Show or hide the start time for the calendar items. | 
| From now | Show or hide the "from now" for the calendar items. | 
| Amount | Amount of calendar items to be displayed. | 
| Conditional show | Enabling this setting will show the calendar widget only if there are appointments to show. |

All other configuration settings are explained [here](/widgets/introduction.html#default-widget-configuration-options).