# Installation & Usage

There are 2 easy ways to install the Senses software for your Smart Mirror; you can use Curl for a manual installation or use the Senses CLI. For both installations please follow the prerequisites first.

## Prerequisites

1. Install NodeJS

For more information on installing Node.js, see [nodejs.org](https://nodejs.org/en/). If you are unsure what version of Node.js runs on your system, run node -v in a terminal window.

## Installation with Senses CLI

Before installing the full Senses - Smart Mirror software make sure you have all prerequisites installed and ready!

First we will install the Senses CLI with NPM and then use CLI commands to further download the software.

<b>Installation steps</b>

1. Install Senses CLI <small>(globally)</small>

``` bash
npm install -g @senses-mirror/senses-cli
```

2. Install Senses - Software

``` bash
senses install
```

3. If all good you will see: 

``` bash
All done. Senses - Smart Mirror successfully installed.
```

The Senses - Smart Mirror software is now installed. You will see a `senses-smartmirror` folder. 

## Installation with Curl

``` bash
bash -c  "$(curl -sL https://raw.githubusercontent.com/senses-smart-mirror/senses-scripts/main/lib/raspberry-pi-install.sh)"
```

## Starting Senses with NPM

Senses - Smart Mirror software can be started from <strong>within</strong> the `senses-smartmirror` with the following command: 

``` bash 
npm run start
```

## Starting Senses with the CLI

You can also use the Senses - ClI to start the Senses software. Run the following command inside the `senses-smartmirror` folder.

``` bash
senses run
```

## Starting Senses with PM2. 

Step 1: Follow the installation guide from [PM2](https://pm2.keymetrics.io/).

Step 2: Change directory to the parent of the senses-smartmirror and create a `pm2.json` file. 

Step 3: Paste the following JSON inside the pm2.json file

``` json
{
    "apps": [
        {
            "name": "Senses - Smart Mirror",
            "script": "npm",
            "cwd": "./senses-smartmirror",
	          "autorestart": false,
            "args" : "start"
        }
    ]
}
```

Step 4: Start PM2 with:

``` bash
pm2 start pm2.json
```

Step 5 <small>(optional)</small>: if you want to save the current PM2 configuration you can use the following command. This will remember the configuration when the operation system restarts.

``` bash 
pm2 save
```

## Next Step
The next step to [Configure](/guide/configuration.md) the Smart Mirror

## Latest Version
Detailed release notes for each version are available on [GitHub](https://github.com/senses-smart-mirror/senses-smartmirror/).