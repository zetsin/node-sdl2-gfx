var FFI = require('ffi')
var ArrayType = require('ref-array')
var Struct = require('ref-struct')
var Union = require('ref-union');
var ref = require('ref')



var voit = exports.voit = ref.types.void
var uchar = exports.uchar = ref.types.uchar
var gfxPrimitivesFontdata_arr = ArrayType(uchar, 2048)

FFI.Library(__dirname + '/libSDL2_gfx', {
}, exports)