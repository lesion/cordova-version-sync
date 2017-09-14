#! /usr/bin/env node
var path = require('path')
var fs = require('fs')

var cordovaConfig = path.join(process.cwd(), 'config.xml')
var packageJson = require(path.join(process.cwd(), 'package.json'))

fs.readFile(cordovaConfig, function (err, data) {
  if (err) throw err
  data = data.toString()
  data = data.replace(/(<widget.*version=")[0-9\.]*/, '$1' + packageJson.version)
  fs.writeFile(cordovaConfig, data)
})

