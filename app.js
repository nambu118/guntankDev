var http = require('http');
var server = http.createServer();
var fs = require('fs');
var settings = require('./settings');
var motorControlCommands = require('./motorControl');

motorControlCommands.setForward(500);

server.on('request', function(req, res) {
	var url = req.url;
	motorControl(url);
	if ('/' == url) {
		fs.readFile(__dirname + '/index.html', 'UTF-8', function(err, data) {
			res.writeHead(200, {
				'Content-Type' : 'text/html'
			});
			res.write(data);
			res.end();
		});
	} else if ('/controller.js' == url) {
		fs.readFile(__dirname + '/controller.js', 'UTF-8', function(err, data) {
			res.writeHead(200, {
				'Content-Type' : 'text/plain'
			});
			res.write(data);
			res.end();
		});
	}
})

function motorControl(url) {
	motorControlId = url.slice(1, 2);
	launchId = url.slice(2, 3);
	if (launchId == 1)
		motorControlCommands.launch();

	if (motorControlId == 1) {
		motorControlCommands.setForward(500);
		motorControlCommands.run();
	} else if (motorControlId == 0) {
		motorControlCommands.stop();
	} else if (motorControlId == 1) {
		motorControlCommands.setForward(500);
		motorControlCommands.run();
	} else if (motorControlId == 2) {
		motorControlCommands.setRight(500);
		motorControlCommands.run();
	} else if (motorControlId == 3) {
		motorControlCommands.setLeft(500);
		motorControlCommands.run();
	} else if (motorControlId == 4) {
		motorControlCommands.setBack(500);
		motorControlCommands.run();
	} else if (motorControlId == 5) {
		motorControlCommands.setFoward(1500);
		motorControlCommands.run();
	} else if (motorControlId == 6) {
		motorControlCommands.up(50);
		motorControlCommands.angle();
	} else if (motorControlId == 7) {
		motorControlCommands.down(50);
		motorControlCommands.angle();
	}
}

console.log(settings);
server.listen(settings.port, settings.host)
