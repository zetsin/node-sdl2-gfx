var FFI = require('ffi')
var ArrayType = require('ref-array')
var Struct = require('ref-struct')
var Union = require('ref-union');
var ref = require('ref')



var voit = exports.voit = ref.types.void
var uint32 = exports.uint32 = ref.types.uint32
var Uint32 = exports.Uint32 = uint32
var float = exports.float = ref.types.float
var c__SA_FPSmanager = exports.c__SA_FPSmanager = Struct({
	framecount: Uint32,
	rateticks: float,
	baseticks: Uint32,
	lastticks: Uint32,
	rate: Uint32,
})
var FPSmanager = exports.FPSmanager = c__SA_FPSmanager
var FPSmanager_ptr = exports.FPSmanager_ptr = ref.refType(FPSmanager)
var int32 = exports.int32 = ref.types.int32

FFI.Library(process.platform == 'win32' ? 'SDL2_gfx' : 'libSDL2_gfx', {
	SDL_initFramerate: [ voit, [ FPSmanager_ptr, ] ],
	SDL_setFramerate: [ int32, [ FPSmanager_ptr, Uint32, ] ],
	SDL_getFramerate: [ int32, [ FPSmanager_ptr, ] ],
	SDL_getFramecount: [ int32, [ FPSmanager_ptr, ] ],
	SDL_framerateDelay: [ Uint32, [ FPSmanager_ptr, ] ],
}, exports)