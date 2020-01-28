var fs = require('fs');
var motorSetting = require('./motorSetting');

exports.setForward = function(speed) {
	fs.writeFileSync(motorSetting.outA + '/speed_sp', speed);
	fs.writeFileSync(motorSetting.outB + '/speed_sp', speed);
}

exports.setForward = function(speed) {
	fs.writeFileSync(motorSetting.outA + '/speed_sp', speed);
	fs.writeFileSync(motorSetting.outB + '/speed_sp', speed);
}

exports.setBack = function(speed) {
	fs.writeFileSync(motorSetting.outA + '/speed_sp', -speed);
	fs.writeFileSync(motorSetting.outB + '/speed_sp', -speed);
}

exports.setRight = function(speed) {
	fs.writeFileSync(motorSetting.outA + '/speed_sp', speed);
	fs.writeFileSync(motorSetting.outB + '/speed_sp', -speed);
}

exports.setLeft = function(speed) {
	fs.writeFileSync(motorSetting.outA + '/speed_sp', -speed);
	fs.writeFileSync(motorSetting.outB + '/speed_sp', speed);
}

exports.run = function() {
	fs.writeFileSync(motorSetting.outA + '/command', 'run-forever');
	fs.writeFileSync(motorSetting.outB + '/command', 'run-forever');
}

exports.stop = function() {
	fs.writeFileSync(motorSetting.outA + '/command', 'stop');
	fs.writeFileSync(motorSetting.outB + '/command', 'stop');
	fs.writeFileSync(motorSetting.outD + '/command', 'stop');
}

exports.launch = function() {
	fs.writeFileSync(motorSetting.outC + '/speed_sp', 500);
	fs.writeFileSync(motorSetting.outC + '/position_sp', 360);
	fs.writeFileSync(motorSetting.outC + '/command', 'run-to-rel-pos');
}

exports.up = function(speed) {
	fs.writeFileSync(motorSetting.outD + '/speed_sp', speed);
}

exports.down = function(speed) {
	fs.writeFileSync(motorSetting.outD + '/speed_sp', -speed);
}
exports.angle = function() {
	fs.writeFileSync(motorSetting.outD + '/command', 'run-forever');
}
