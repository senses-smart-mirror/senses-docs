# Introduction

In this section you will find more information about how to <strong>create</strong> your own widgets and <strong>import</strong> them onto the Smart Mirror.

::: tip Please note
In this section we will refer to the Senses - CLI [Github](https://github.com/senses-smart-mirror/senses-cli) - [NPM](https://npmjs.com)
:::

## Required knowledge

In order to start creating your own widget and share your creation with the community it is good to have some knowledge / experience with the following.

1. Vuejs (2)
2. Nodejs & Express
3. Git <small>(to share your widget)</small>
4. Typescript & Javascript

## General Advice

As you probably want to share your own widget we advise you to follow the guidelines as best as possible and provide the following information in your README file.

- High quality image / screenshot of your widget
- A short description
- What external Api's it depends upon. 
- Configuration examples 
- Installation manual
- Free to use or premium widget <small>(a widget that uses a paid subscription from a third party)</small>

## Widget structure

If you create a new widget with the Senses - Smart Mirror CLI. The folder structure will look like:

- Gui
  - public 
  - src 
    - components
    - {widget-name}.vue
    - ...
  - vue.config.js
  - ...
- Server
  - src 
    - {widget-name}-config.ts
    - {widget-name}-helper.ts
  - webpack.config.js
  - ... 
- README.md <small>(your most important file)</small>

<em>Both "Gui" and "Server" contain several configuration / build files as well as "main entry" files. Building & importing the widget with the Senses - Smart Mirror CLI will automatically handle this.</em>

### GUI 
The GUI contains the design of the widget and fetches the data from any source or from the server (helper) file. The GUI holds the HTML & CSS and is written with VueJS. There is no limitations as in what you can do here. If its possible in Javascript and VueJS, you can do it.

### Server (helper files)
The server or helper file contains any logic that will be executed in NodeJS. Senses - Smart Mirror will automatically load the server file and execute the code. 

Any data send between the GUI and Server (helper file) is shared with the help of websockets. From the GUI and Server there is an API available.

### Widget configuration File
The configuration file will look like: <strong>{your-widget}-config.ts</strong> and can be found in the server files as well. This is your main entry where you put any configuration (widget settings) for you widget. This file will also contain the name of your widget and description as well as some other options.

<br />

``` ts 

const exampleConfig: SmartMirror.IWidgetConfig = {
	name: 'example',
	icon: 'fad fa-align-justify',
	helper: true,
	link: "your_url_link",
	author: "your_name_here",
	version: "0.0.1",
	settings: [{
		name: "title",
		displayOnly: true,
		label: "Label",
		order: 1,
		type: 'text',
		description: "example description"
	}, {
		name: "header",
		label: "Widget Title",
		type: 'input',
		value: "example",
		description: "The header title of the widget."
	}]
}

module.exports = exampleConfig;
```
<br /><br />

Look at [Chuck Norris Example Widget](https://github.com/senses-smart-mirror/senses-widgets) for a full example. In this example you can view the widget config files as well as some API's for the widget helper.
