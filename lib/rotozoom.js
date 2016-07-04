'use strict'

const libRotozoom = libgfx('../dep/SDL2_rotozoom')

class rotozoom {
	constructor(_surface) {
		this._surface = _surface
	}

	rotozoom(angle, zoomx, zoomy) {
		angle = +(angle || 0)
		zoomx = +(zoomx || 0)
		zoomy = +(zoomy || zoomx)
		libRotozoom.rotozoomSurfaceXY(this._surface, angle, zoomx, zoomy, 1)
	}
	zoom(zoomx, zoomy) {
		zoomx = +(zoomx || 0)
		zoomy = +(zoomy || zoomx)
		libRotozoom.zoomSurface(this._surface, zoomx, zoomy, 1)
	}
	shrink(factorx, factory) {
		factorx = +(factorx || 0)
		factory = +(factory || factorx)
		libRotozoom.shrinkSurface(this._surface, factorx, factory)
	}
	rotate90(turns) {
		turns = +(turns || 0)
		libRotozoom.rotateSurface90Degrees(this._surface, turns)
	}
}

module.exports = rotozoom