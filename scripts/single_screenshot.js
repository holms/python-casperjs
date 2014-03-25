var casper = require('casper').create({
  verbose: true,
  logLevel: "debug"
});

var screenshotUrl = 'http://google.com/'
var screenshotFileName = "thumbie.png"

if (casper.cli.args.length < 1) {
  casper
    .echo("Usage: $ casperjs screenshots.js http://example.com")
    .exit(1)
  ;
} else {
  screenshotUrl = casper.cli.args[0];
  screenshotFileName = casper.cli.args[1];
}

casper.start(screenshotUrl, function() {
  this.echo('Current location is ' + this.getCurrentUrl(), 'info');
  this.viewport(1024, 768)
  this.thenOpen(screenshotUrl, function() {
    this.wait(3000);
  });
  this.echo('Screenshot for ' + screenshotFileName, 'info');
  this.capture(screenshotFileName, {
        top: 0, left: 0, width: 1024, height: 768
  });
});


casper.run();
