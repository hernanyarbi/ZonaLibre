'use strict'

let fs = require('fs');
let path = require('path');
let mongoosePaginate = require('mongoose-pagination');
let Producto = require('../models/productos');

//Funcion de nuevo producto
function newProducto(req, res){
  let producto = new Producto();
  let params = req.body;

  producto.descripcion = params.descripcion;
  producto.codigo = params.codigo;
  producto.precioReal = params.precioReal;
  producto.precioVenta = params.precioVenta;
  producto.cantidad = params.cantidad;
  producto.image = null;

  producto.save((err, productoSave)=>{
    if(err){
      res.status(500).send({msg : 'Error al guardar el producto'});
    }else if (!productoSave) {
      res.status(404).send({msg : 'No se pudo guardar el producto'});
    }else {
      res.status(200).send({producto : productoSave});
    }
  });
}

//function para obtener productos
function getProductos(req, res){
  Producto.find((err, productos)=>{
    if(err){
      res.status(500).send({msg : 'Error al obtener el producto'});
    }else if (!productos) {
      res.status(404).send({msg : 'No se pudo obtener el producto'});
    }else {
      res.status(200).send({productos});
    }
  });
}

module.exports = {
  newProducto,
  getProductos
}
