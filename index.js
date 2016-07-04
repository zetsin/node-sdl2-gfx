'use strict'

let gfx = {
	require(name) {
		return require('./dep/' + name)
	},
	class(name) {
		return require('./lib/' + name)
	}
}

module.exports = gfx