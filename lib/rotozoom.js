'use strict'

const libRotozoom = libgfx('../dep/SDL2_rotozoom')

class rotozoom {
	constructor(_surface) {
		this._surface = _surface
	}

	rotozoom(angle = 0, zoomx = 0, zoomy = 0) {
		libRotozoom.rotozoomSurfaceXY(this._surface, angle, zoomx, zoomy, 1)
	}
	zoom(zoomx = 0, zoomy = 0) {
		libRotozoom.zoomSurface(this._surface, zoomx, zoomy, 1)
	}
	shrink(factorx = 0, factory = 0) {
		libRotozoom.shrinkSurface(this._surface, factorx, factory)
	}
	rotate90(turns = 0) {
		libRotozoom.rotateSurface90Degrees(this._surface, turns)
	}
}

module.exports = rotozoom