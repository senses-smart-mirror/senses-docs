# Mercedes

The Mercedes widget will show your Mercedes Car data.

<em>This widget is a premium widget and you will need to setup an developer account in order to use the widget.</em>

## Screenshot

<div class="image-wrapper">
  <img class="widget-image" src="/images/widgets/mercedes.png" alt="Mercedes Widget" width="260"/>
</div>  

## Functionality

The Mercedes Widget has the following functionality:

- Display Milage
- Display range 
- Display gas level
- Display Lock status for car, rooftop and gas intake
- Display heading (the heading the car is currently parked).

## How to use

Before you can use the Mercedes widget you will need to configure your Mercedes Me Account. Please follow the following steps in order to configure your account for Senses - Smart Mirror.

<strong>Steps:</strong>

1. Create an Mercedes Me Id on [Mercedes Page](https://id.mercedes-benz.com/ciam/auth/login#/register)

2. After you created and verified your account nagivate to the [Console Page](https://developer.mercedes-benz.com/console).

3. If this is your first time nagivating to this page, please accept the Terms Of Use.

4. Create a new project by clicking "Create your First Project"

5. Fill in the Project Name and Business Purpose. You can put anything here, but for good practice describe that you are using this Product for you Senses - Smart Mirror.

6. After creating the Project click on "Add Product" and choose "Fuel Status". Next click on "Get for Free" and click "Confirm" in the bottom. 

7. Repeat step 6 for: "Pay as you Drive Insurance", "Vehicle Lock status", "Vehicle Status" and "Electric Vehicle Status" (if you have a electric vehicle).

8. After adding the above products click the button "Subscribe".

9. You are now subscribed to the products and the page will nagivate to the Project Page. Here we will create the credentials by clicking "Generate Credentials".

10. From the pop up that opened, copy the Client ID and Client Secret and paste them in the Senses - App - Mercedes Widget. <em>Please note you can only see the Secret once, if you close this pop up you will need to create a new secret.</em>

11. Under "Redirect URLs" provide the following redirect URL: <em>https://downloadmirror.nl/oauth/mercedes</em>.
<br /><br />
You are now done setting up the Mercedes Me Product Account. We will continue in the next steps to get your vehicle ID (VIN number).
<br /><br />
12. In the Mercedes Me app on your phone you can find your VIN (Vehicle ID) number. Open the Mercedes Me app and open the menu (on the left, hamburger menu).

13. If you car is already in the App (if not; go to step 15.) you select your car and choose "Vehicle Information". You will find the VIN number on this page.

14. Provide the VIN number in the Senses - App - Mercedes Widget.

15. Follow the app instructions to add your car in the Mercedes Me App first. After adding your car you will see the VIN number as well.

16. Save the Mercedes Widget inside the Senses - App and open the widget settings again. 

17. Click on Connect Mercedes Api and choose "Allow". <em>We assume here that you are already logged in with the same account as you are using for the Mercedes Me App. and that you connected your Car with the same email address.</em>

<strong>Please note: that after provided all the details the widget might now have data. It can take a while before your car actually sends the data. Starting your car briefly and give it time to sync with the Mercedes Me app can help. We recommend to wait around ~ 30 minutes.</strong>

## Configuration

The following configuration settings are available for the Calendar Widget.

| Setting | Description |
| ----------- | ----------- |
| Connect Google | This button will allow you to connect your Mercedes Account to Senses. Please see the above instructions. |
| Widget title | The header title of the widget |
| Client ID | Paste your Client id from above instructions here. | 
| Client Secret | Paste your Client Secret from above instructions here. |
| Access Token | After setting up your Google Account this setting will automatically be populated. |
| Refresh Token | After setting up your Google Account this setting will automatically be populated. |
| Vehicle ID (VIN) | Provide the vehicle ID. | 
| Show Car Heading | Enable this option to show the car heading. | 
| Show Mileage | Enable this option to show the car mileage. |
| Show car is locked | Enable this option to show if the car is fully locked | 
| Show gas intake locked | Enable this option to show if the gas intake is locked |
| Show rooftop locked | Enable this option to show if the rooftop is locked | 
| Interval | Specify the interval in between Senses will poll for new data (in milliseconds). We recommend to put '600000' which translates to every 10 minutes |

All other configuration settings are explained [here](/widgets/introduction.html#default-widget-configuration-options).