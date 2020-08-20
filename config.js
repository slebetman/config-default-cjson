const path = require('path');
const cjson = require('cjson');
const appRoot = require('app-root-path');

function file (fname) {
	return path.normalize(path.join(appRoot.toString(), fname));
}

var conf = cjson.load([
	file('config-default.json'),
	file('config.json')
], true);

module.exports = conf;
