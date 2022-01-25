# Installation

There are 2 easy ways to install the Senses software for your Smart Mirror; you can use Curl for a manual installation or use the Senses CLI. For both installations please follow the prerequisites first.

## Prerequisites

1. Install NodeJS

```sudo apt-get install -y nodejs```

## Option 1: Using Senses CLI

Before installing the full Senses - Smart Mirror software make sure you have all prerequisites installed and ready!

First we will install the Senses CLI with NPM and then use CLI commands to further download the software.

<b>Installation steps</b>

1. Install Senses CLI

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

4. Next step to [Configure](/guide/configuration.md) the Smart Mirror

## Option 2: Using Curl

``` bash
bash -c  "$(curl -sL https://raw.githubusercontent.com/senses-smart-mirror/senses-scripts/main/lib/raspberry-pi-install.sh)"
```


## Latest Version
Detailed release notes for each version are available on [GitHub](https://github.com/senses-smart-mirror/senses-smartmirror/).