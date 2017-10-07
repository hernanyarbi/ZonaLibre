'use strict'

let mongoose = require('mongoose');
let Schema = mongoose.Schema;

let ClienteSchema = Schema({
  nombre : String,
  contacto : Number
});

module.exports = mongoose.model('Cliente', ClienteSchema );
