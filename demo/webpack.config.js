const path = require('path');

let config = require('@ucd-lib/cork-app-build').watch({
  root : path.join(__dirname, '..'),
  entry : 'cork-style.js',
  preview : 'demo',
  clientModules : 'node_modules'
});

module.exports = config;