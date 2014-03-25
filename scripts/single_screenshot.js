/*
* Takes provided URL passed as argument and make screenshots of this page with several viewport sizes.
* These viewport sizes are arbitrary, taken from iPhone & iPad specs, modify the array as needed
* @author: https://gist.github.com/nhoizey/4060568
* Modified By: cthorn@phase2technology.com
* CHANGELOG: new viewports
* Usage:
* $ casperjs screenshots.js http://example.com
*/

var casper = require('casper').create({
  verbose: true,
  logLevel: "debug"
});

var screenshotUrl = 'http://google.com/',
    screenshotNow = new Date(),
    screenshotFileName = "thumbie.png"
    viewports = [
      {
        'name': 'xvfb-1024-768',
        'viewport': { width: 1024, height: 768 }
      }
    ];

if (casper.cli.args.length < 2) {
  casper
    .echo("Usage: $ casperjs screenshots.js http://example.com myfile.png")
    .exit(1)
  ;
} else {
  screenshotUrl = casper.cli.args[0];
  screenshotFileName = casper.cli.args[1];
}

casper.start(screenshotUrl, function() {
  this.echo('Current location is ' + this.getCurrentUrl(), 'info');
});

casper.each(viewports, function(casper, viewport) {
  this.then(function() {
    this.viewport(viewport.viewport.width, viewport.viewport.height);
  });
  this.thenOpen(screenshotUrl, function() {
    this.wait(3000);
  });
  this.then(function(){
    this.echo('Screenshot for ' + screenshotFileName, 'info');
    this.capture(screenshotFileName, {
        top: 0,
        left: 0,
        width: viewport.viewport.width,
        height: viewport.viewport.height
    });
  });
});

casper.run();

function pad(number) {
  var r = String(number);
  if ( r.length === 1 ) {
    r = '0' + r;
  }
  return r;
}
