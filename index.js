var path = require('path')

function gfx(name) {
	return require(path.join(__dirname, 'lib', name))
}

module.exports = gfx