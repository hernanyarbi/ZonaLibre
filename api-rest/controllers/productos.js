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

//function para obtener un producto espesifico
function getProducto(req, res){
  let productoId=req.params.id;
  Producto.findById(productoId,(err,producto) =>{
    if (err) {
      res.status(500).send({ msg : 'Error al obtener el producto' });
    } else if ( !producto ){
      res.status(404).send({ msg : 'No pudo obtener el producto' });
    }else{
      res.status(200).send({ producto});
    }
  });
}

//function para actualizar un producto
function updateProducto(req, res){
  let productoId=req.params.id;
  let params = req.body;
  Producto.findByIdAndUpdate(productoId, params,
                            (err,productoUpdate) =>{
    if (err) {
      res.status(500).send({ msg : 'Error al actualizar el producto' });
    } else if ( !productoUpdate ){
      res.status(404).send({ msg : 'No pudo actualizar el producto' });
    }else{
      res.status(200).send({ producto : productoUpdate });
    }
  });
}

//Funcion para eliminar un producto
function deleteProducto(req, res){
  let productoId=req.params.id;
  Producto.findByIdAndRemove(productoId,(err,productoUpdate) =>{
    if (err) {
      res.status(500).send({ msg : 'Error al eliminar el producto' });
    } else if ( !productoUpdate ){
      res.status(404).send({ msg : 'No pudo eliminar el producto' });
    }else{
      res.status(200).send({ producto : productoUpdate });
    }
  });
}

module.exports = {
  newProducto,
  getProductos,
  getProducto,
  updateProducto,
  deleteProducto
}
