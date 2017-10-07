'use strict'

let express = require('express');
let ProductoCtrlr = require('../controllers/productos');
let api = express.Router();
// Exportacion para manejo de archivos
let multipart = require('connect-multiparty');
let md_upload = multipart({uploadDir : './uploads/productos'});

api.post('/prod', ProductoCtrlr.newProducto);
api.get('/prod', ProductoCtrlr.getProductos);
api.get('/prod/:id', ProductoCtrlr.getProducto);
api.put('/prod/:id', ProductoCtrlr.updateProducto);
api.delete('/prod/:id', ProductoCtrlr.deleteProducto);
module.exports = api;
