'use strict'

let mongoose = require('mongoose');
let Schema = mongoose.Schema;

let VentaSchema = Schema({
  numero_venta : Number,
  fecha_venta : Date,
  descripcion : String,
  monto : Number
});

module.exports = mongoose.model('Venta', VentaSchema);
