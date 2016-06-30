var FFI = require('ffi')
var ArrayType = require('ref-array')
var Struct = require('ref-struct')
var Union = require('ref-union');
var ref = require('ref')



var voit = exports.voit = ref.types.void
var int32 = exports.int32 = ref.types.int32
var uchar = exports.uchar = ref.types.uchar
var uchar_ptr = exports.uchar_ptr = ref.refType(uchar)
var uint32 = exports.uint32 = ref.types.uint32

FFI.Library('libSDL2_gfx', {
	SDL_imageFilterMMXdetect: [ int32, [ ] ],
	SDL_imageFilterMMXoff: [ voit, [ ] ],
	SDL_imageFilterMMXon: [ voit, [ ] ],
	SDL_imageFilterAdd: [ int32, [ uchar_ptr, uchar_ptr, uchar_ptr, uint32, ] ],
	SDL_imageFilterMean: [ int32, [ uchar_ptr, uchar_ptr, uchar_ptr, uint32, ] ],
	SDL_imageFilterSub: [ int32, [ uchar_ptr, uchar_ptr, uchar_ptr, uint32, ] ],
	SDL_imageFilterAbsDiff: [ int32, [ uchar_ptr, uchar_ptr, uchar_ptr, uint32, ] ],
	SDL_imageFilterMult: [ int32, [ uchar_ptr, uchar_ptr, uchar_ptr, uint32, ] ],
	SDL_imageFilterMultNor: [ int32, [ uchar_ptr, uchar_ptr, uchar_ptr, uint32, ] ],
	SDL_imageFilterMultDivby2: [ int32, [ uchar_ptr, uchar_ptr, uchar_ptr, uint32, ] ],
	SDL_imageFilterMultDivby4: [ int32, [ uchar_ptr, uchar_ptr, uchar_ptr, uint32, ] ],
	SDL_imageFilterBitAnd: [ int32, [ uchar_ptr, uchar_ptr, uchar_ptr, uint32, ] ],
	SDL_imageFilterBitOr: [ int32, [ uchar_ptr, uchar_ptr, uchar_ptr, uint32, ] ],
	SDL_imageFilterDiv: [ int32, [ uchar_ptr, uchar_ptr, uchar_ptr, uint32, ] ],
	SDL_imageFilterBitNegation: [ int32, [ uchar_ptr, uchar_ptr, uint32, ] ],
	SDL_imageFilterAddByte: [ int32, [ uchar_ptr, uchar_ptr, uint32, uchar, ] ],
	SDL_imageFilterAddUint: [ int32, [ uchar_ptr, uchar_ptr, uint32, uint32, ] ],
	SDL_imageFilterAddByteToHalf: [ int32, [ uchar_ptr, uchar_ptr, uint32, uchar, ] ],
	SDL_imageFilterSubByte: [ int32, [ uchar_ptr, uchar_ptr, uint32, uchar, ] ],
	SDL_imageFilterSubUint: [ int32, [ uchar_ptr, uchar_ptr, uint32, uint32, ] ],
	SDL_imageFilterShiftRight: [ int32, [ uchar_ptr, uchar_ptr, uint32, uchar, ] ],
	SDL_imageFilterShiftRightUint: [ int32, [ uchar_ptr, uchar_ptr, uint32, uchar, ] ],
	SDL_imageFilterMultByByte: [ int32, [ uchar_ptr, uchar_ptr, uint32, uchar, ] ],
	SDL_imageFilterShiftRightAndMultByByte: [ int32, [ uchar_ptr, uchar_ptr, uint32, uchar, uchar, ] ],
	SDL_imageFilterShiftLeftByte: [ int32, [ uchar_ptr, uchar_ptr, uint32, uchar, ] ],
	SDL_imageFilterShiftLeftUint: [ int32, [ uchar_ptr, uchar_ptr, uint32, uchar, ] ],
	SDL_imageFilterShiftLeft: [ int32, [ uchar_ptr, uchar_ptr, uint32, uchar, ] ],
	SDL_imageFilterBinarizeUsingThreshold: [ int32, [ uchar_ptr, uchar_ptr, uint32, uchar, ] ],
	SDL_imageFilterClipToRange: [ int32, [ uchar_ptr, uchar_ptr, uint32, uchar, uchar, ] ],
	SDL_imageFilterNormalizeLinear: [ int32, [ uchar_ptr, uchar_ptr, uint32, int32, int32, int32, int32, ] ],
}, exports)