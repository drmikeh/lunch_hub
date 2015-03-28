 /*jshint unused:false */

/***************
  This file allow to configure a proxy system plugged into BrowserSync
  in order to redirect backend requests while still serving and watching
  files from the web project
***************/

'use strict';

var httpProxy  = require('http-proxy');
var chalk      = require('chalk');
var dateformat = require('dateformat');

var enableProxy  = true;
var proxyTarget  = 'http://localhost:3000/'
var proxyContext = new RegExp('/api/');

var proxy = httpProxy.createProxyServer({
  target: proxyTarget
});

proxy.on('error', function(error, req, res) {
  res.writeHead(500, { 'Content-Type': 'text/plain' } );
  console.error(chalk.red('[Proxy]'), error);
});

/*
 * The proxy middleware is an Express middleware added to BrowserSync to
 * handle backend requests and proxy them to your backend.
 */
function proxyMiddleware(req, res, next) {
  // check if url is a candidate for proxying
  if (proxyContext.test(req.url)) {
    var time = '['+chalk.grey(dateformat(new Date(), 'HH:MM:ss'))+']';
    var prefix = chalk.magenta('http-proxy:');
    var requestUrl = chalk.green(req.method + ' ' + req.url);
    console.log(time, prefix, requestUrl);
    proxy.web(req, res);
  } else {
    next();
  }
}

module.exports = function() {
  console.log('enableProxy: ' + enableProxy);
  return enableProxy ? [proxyMiddleware] : [];
};
