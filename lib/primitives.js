'use strict'

const libPrimitives = require('../dep/SDL2_gfxPrimitives')
const utils = require('./utils')

const ref = require('ref')

class primitives {
	constructor(_render) {
		this._render = _render
	}

	point(x = 0, y = 0, rgba = 0) {
		rgba = utils.parseRGBA(rgba)
		libPrimitives.pixelRGBA(this._render, +x, +y, rgba.r, rgba.g, rgba.b, rgba.a)
	}
	line(x1 = 0, y1 = 0, x2 = 0, y2 = 0, rgba = 0, width = 0) {
		rgba = utils.parseRGBA(rgba)
		if(width == 0) {
			libPrimitives.aalineRGBA(this._render, +x1, +y1, +x2, +y2, rgba.r, rgba.g, rgba.b, rgba.a)
		} else {
			libPrimitives.thickLineRGBA(this._render, +x1, +y1, +x2, +y2, width, rgba.r, rgba.g, rgba.b, rgba.a)
		}
	}
	rect(x1 = 0, y1 = 0, x2 = 0, y2 = 0, rgba = 0, rad = 0) {
		rgba = utils.parseRGBA(rgba)
		if(rad == 0) {
			libPrimitives.rectangleRGBA(this._render, +x1, +y1, +x2, +y2, rgba.r, rgba.g, rgba.b, rgba.a)
		} else {
			libPrimitives.roundedRectangleRGBA(this._render, +x1, +y1, +x2, +y2, rad, rgba.r, rgba.g, rgba.b, rgba.a)
		}
	}
	rectFilled(x1 = 0, y1 = 0, x2 = 0, y2 = 0, rgba = 0, rad = 0) {
		rgba = utils.parseRGBA(rgba)
		if(rad == 0) {
			libPrimitives.boxRGBA(this._render, +x1, +y1, +x2, +y2, rgba.r, rgba.g, rgba.b, rgba.a)
		} else {
			libPrimitives.roundedBoxRGBA(this._render, +x1, +y1, +x2, +y2, rad, rgba.r, rgba.g, rgba.b, rgba.a)
		}
	}
	ellipse(x = 0, y = 0, rx = 0, ry = 0, rgba = 0) {
		rgba = utils.parseRGBA(rgba)
		libPrimitives.aaellipseRGBA(this._render, +x, +y, +rx, +ry, rgba.r, rgba.g, rgba.b, rgba.a)
	}
	ellipseFilled(x = 0, y = 0, rx = 0, ry = 0, rgba = 0) {
		rgba = utils.parseRGBA(rgba)
		libPrimitives.filledEllipseRGBA(this._render, +x, +y, +rx, +ry, rgba.r, rgba.g, rgba.b, rgba.a)
	}
	pie(x = 0, y = 0, rad = 0, start = 0, end = 0, rgba = 0) {
		rgba = utils.parseRGBA(rgba)
		libPrimitives.pieRGBA(this._render, +x, +y, +rad, +start, +end, rgba.r, rgba.g, rgba.b, rgba.a)
	}
	pieFilled(x = 0, y = 0, rad = 0, start = 0, end = 0, rgba = 0) {
		rgba = utils.parseRGBA(rgba)
		libPrimitives.filledPieRGBA(this._render, +x, +y, +rad, +start, +end, rgba.r, rgba.g, rgba.b, rgba.a)
	}
	trigon(x1 = 0, y1 = 0, x2 = 0, y2 = 0, x3 = 0, y3 = 0, rgba = 0) {
		rgba = utils.parseRGBA(rgba)
		libPrimitives.aatrigonRGBA(this._render, +x1, +y1, +x2, +y2, +x3, +y3, rgba.r, rgba.g, rgba.b, rgba.a)
	}
	trigonFilled(x1 = 0, y1 = 0, x2 = 0, y2 = 0, x3 = 0, y3 = 0, rgba = 0) {
		rgba = utils.parseRGBA(rgba)
		libPrimitives.filledTrigonRGBA(this._render, +x1, +y1, +x2, +y2, +x3, +y3, rgba.r, rgba.g, rgba.b, rgba.a)
	}
	polygon(points = [], rgba = 0) {
		if(points.length < 3) {
			return
		}
		let size = ref.types.int16.size
		let vx = new Buffer(size * points.length)
		let vy = new Buffer(size * points.length)
		points.forEach((point, index) => {
			point = utils.arraylike2obj(point, 'x,y')
			vx.set(ref.alloc('int16', point.x), index * size)
			vy.set(ref.alloc('int16', point.y), index * size)
		})

		rgba = utils.parseRGBA(rgba)

		libPrimitives.aapolygonRGBA(this._render, vx, vy, points.length, rgba.r, rgba.g, rgba.b, rgba.a)
	}
	polygonFilled(points = [], rgba = 0) {
		if(points.length < 3) {
			return
		}
		let size = ref.types.int16.size
		let vx = new Buffer(size * points.length)
		let vy = new Buffer(size * points.length)
		points.forEach((point, index) => {
			point = utils.arraylike2obj(point, 'x,y')
			vx.set(ref.alloc('int16', point.x), index * size)
			vy.set(ref.alloc('int16', point.y), index * size)
		})

		rgba = utils.parseRGBA(rgba)

		libPrimitives.filledPolygonRGBA(this._render, vx, vy, points.length, rgba.r, rgba.g, rgba.b, rgba.a)
	}
	polygonImage(points = [], image, dx = 0, dy = 0) {
		if(points.length < 3) {
			return
		}
		let size = ref.types.int16.size
		let vx = new Buffer(size * points.length)
		let vy = new Buffer(size * points.length)
		points.forEach((point, index) => {
			point = utils.arraylike2obj(point, 'x,y')
			vx.set(ref.alloc('int16', point.x), index * size)
			vy.set(ref.alloc('int16', point.y), index * size)
		})

		libPrimitives.texturedPolygon(this._render, vx, vy, points.length, image._surface, +dx, +dy)
	}
	bezier(points = [], step = 2, rgba = 0) {
		if(points.length < 3 || step < 2) {
			return
		}
		let size = ref.types.int16.size
		let vx = new Buffer(size * points.length)
		let vy = new Buffer(size * points.length)
		points.forEach((point, index) => {
			point = utils.arraylike2obj(point, 'x,y')
			vx.set(ref.alloc('int16', point.x), index * size)
			vy.set(ref.alloc('int16', point.y), index * size)
		})

		rgba = utils.parseRGBA(rgba)

		libPrimitives.bezierRGBA(this._render, vx, vy, points.length, step, rgba.r, rgba.g, rgba.b, rgba.a)
	}
}

module.exports = primitives