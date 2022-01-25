# Speech <small>(beta)</small>

<em>** This module is still in beta as we are improving the code and testing out the functionality. Please take this in consideration while using this module.</em>

<br />

::: warning Please note 
 This module requires you to enable the Cloud Speech-to-Text API in Google Cloud Console and enable billing! Using this module will cost you money! 
:::

<br />

The Speech module is responsible for adding the ability to control your Smart Mirror with your voice. <br /><br /> The module works with <strong>Wake Word</strong> functionality which means it will start processing your request after you "wake up" the Smart Mirror. The Wake word is <strong>"Smart Mirror"</strong>. After you woke up the Smart Mirror is will start using Google Speech to Text Api to translate your speech to text which is used by the Smart Mirror software.

### Speech Widget

The [Speech Widget](/widgets/speech) will show a small microphone icon on your Smart Mirror. The speech widget will indicate when you are talking and what translation is coming back from the Google Speech API. 

### Functionality

- <strong>What can I say</strong> <br />
  Displays the list of things you can say in the Speech widget.
- <strong>Go home</strong><br />
  Hides the "What can I say" in the Speech widget.
- <strong>Turn off / on</strong><br />
  Turn the Smart Mirror off or on.
- <strong>Stand by</strong><br />
  Turn the Smart Mirror into standby mode.
- <strong>Switch Profile *profile name*</strong><br />
  Switch profiles to mentioned profile name
- <strong>Show *widget name*</strong><br />
  Shows or hide a widget based on widget name mentioned


### Requirements

We are updating this part of the documentation as soon as this module comes out of beta release. If you have any question please refer to the [Github Issues](https://github.com/senses-smart-mirror/senses-smartmirror/issues).