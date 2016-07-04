var FFI = require('ffi')
var ArrayType = require('ref-array')
var Struct = require('ref-struct')
var Union = require('ref-union');
var ref = require('ref')



var voit = exports.voit = ref.types.void
var uint32 = exports.uint32 = ref.types.uint32
var Uint32 = exports.Uint32 = uint32
var int32 = exports.int32 = ref.types.int32
var uchar = exports.uchar = ref.types.uchar
var Uint8 = exports.Uint8 = uchar
var SDL_Color = exports.SDL_Color = Struct({
	r: Uint8,
	g: Uint8,
	b: Uint8,
	a: Uint8,
})
var SDL_Color_ptr = exports.SDL_Color_ptr = ref.refType(SDL_Color)
var SDL_Palette = exports.SDL_Palette = Struct({
	ncolors: int32,
	colors: SDL_Color_ptr,
	version: Uint32,
	refcount: int32,
})
var SDL_Palette_ptr = exports.SDL_Palette_ptr = ref.refType(SDL_Palette)
var c__S_SDL_PixelFormat_FI_padding_arr = ArrayType(Uint8, 2)
var voit_ptr = exports.voit_ptr = ref.refType(voit)
var SDL_PixelFormat = exports.SDL_PixelFormat = Struct({
	format: Uint32,
	palette: SDL_Palette_ptr,
	BitsPerPixel: Uint8,
	BytesPerPixel: Uint8,
	padding: c__S_SDL_PixelFormat_FI_padding_arr,
	Rmask: Uint32,
	Gmask: Uint32,
	Bmask: Uint32,
	Amask: Uint32,
	Rloss: Uint8,
	Gloss: Uint8,
	Bloss: Uint8,
	Aloss: Uint8,
	Rshift: Uint8,
	Gshift: Uint8,
	Bshift: Uint8,
	Ashift: Uint8,
	refcount: int32,
	next: voit_ptr,
})
var SDL_PixelFormat_ptr = exports.SDL_PixelFormat_ptr = ref.refType(SDL_PixelFormat)
var SDL_Rect = exports.SDL_Rect = Struct({
	x: int32,
	y: int32,
	w: int32,
	h: int32,
})
var SDL_BlitMap = exports.SDL_BlitMap = Struct({
})
var SDL_BlitMap_ptr = exports.SDL_BlitMap_ptr = ref.refType(SDL_BlitMap)
var SDL_Surface = exports.SDL_Surface = Struct({
	flags: Uint32,
	format: SDL_PixelFormat_ptr,
	w: int32,
	h: int32,
	pitch: int32,
	pixels: voit_ptr,
	userdata: voit_ptr,
	locked: int32,
	lock_data: voit_ptr,
	clip_rect: SDL_Rect,
	map: SDL_BlitMap_ptr,
	refcount: int32,
})
var SDL_Surface_ptr = exports.SDL_Surface_ptr = ref.refType(SDL_Surface)
var double = exports.double = ref.types.double
var int32_ptr = exports.int32_ptr = ref.refType(int32)

FFI.Library('libSDL2_gfx', {
	rotozoomSurface: [ SDL_Surface_ptr, [ SDL_Surface_ptr, double, double, int32, ] ],
	rotozoomSurfaceXY: [ SDL_Surface_ptr, [ SDL_Surface_ptr, double, double, double, int32, ] ],
	rotozoomSurfaceSize: [ voit, [ int32, int32, double, double, int32_ptr, int32_ptr, ] ],
	rotozoomSurfaceSizeXY: [ voit, [ int32, int32, double, double, double, int32_ptr, int32_ptr, ] ],
	zoomSurface: [ SDL_Surface_ptr, [ SDL_Surface_ptr, double, double, int32, ] ],
	zoomSurfaceSize: [ voit, [ int32, int32, double, double, int32_ptr, int32_ptr, ] ],
	shrinkSurface: [ SDL_Surface_ptr, [ SDL_Surface_ptr, int32, int32, ] ],
	rotateSurface90Degrees: [ SDL_Surface_ptr, [ SDL_Surface_ptr, int32, ] ],
}, exports)