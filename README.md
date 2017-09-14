## cordova-version-sync

This script will sync your config.xml package version with npm package version
specified in your package.json.


### Usage
you can specify a `version` key in your npm package.json `scripts`
with this script in it:

> If preversion, version, or postversion are in the scripts property 
> of the package.json, they will be executed as part of running npm version.
  [https://docs.npmjs.com/cli/version](https://docs.npmjs.com/cli/version)

`npm install cordova-version-sync --save-dev`

then edit package.json to the script:

// somewhere in your package.json
`
 "scripts": {
    "dev": "node webpack/dev-server.js",
    "build": "node webpack/build.js",
    "version": "cordova-version-sync"
  },
`

now you can use `npm version` command and config.xml will follow !