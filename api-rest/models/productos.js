'use strict'

let mongoose = require('mongoose');
let Schema = mongoose.Schema;

let ProductoSchema = Schema({
  descripcion : String,
  codigo : String,
  precioReal : Number,
  precioVenta : Number,
  cantidad : Number,
  image : String
});

module.exports = mongoose.model('Producto', ProductoSchema);
