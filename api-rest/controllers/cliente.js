'use strict'

let Cliente = require('../models/cliente');

// funcion para agregar Cliente
function newCliente(req, res){
  let cliente = new Cliente();
  let params = req.body;
  cliente.nombre = params.nombre;
  cliente.contacto = params.contacto;

  cliente.save((err, clienteSave)=>{
    if(err){
      res.status(500).send({ msg : 'Error al guardar cliente' });
    }else if(!clienteSave){
      res.status(404).send({ msg : 'No se pudo guardar el cliente' });
    }else{
      res.status(200).send({ cliente : clienteSave });
    }
  });
}

// function para obtener los clienteSave
function getClientes(req, res){
  Cliente.find((err, clientes) => {
    if(err){
      res.status(500).send({ msg : 'Error al obtener los clientes' });
    }else if(!clientes){
      res.status(404).send({ msg : 'No se pudo obtener los clientes' });
    }else{
      res.status(200).send({ cliente : clientes });
    }
  });
}

// funcion para obtener un cliente espesifico
function getCliente(req, res){
  let clienteId = req.params.id;
  Cliente.findById(clienteId, (err,cliente)=>{
    if(err){
      res.status(500).send({ msg : 'Error al obtener el cliente' });
    }else if(!cliente){
      res.status(404).send({ msg : 'No se pudo obtener el cliente' });
    }else{
      res.status(200).send({ cliente });
    }
  });
}

// funcion para actualizar un cliente espesifico
function updateCliente(req, res){
  let clienteId = req.params.id;
  let params = req.body;
  Cliente.findByIdAndUpdate(clienteId,params, (err,cliente)=>{
    if(err){
      res.status(500).send({ msg : 'Error al actualizar el cliente' });
    }else if(!cliente){
      res.status(404).send({ msg : 'No se pudo actualizar el cliente' });
    }else{
      res.status(200).send({ cliente });
    }
  });
}

// funcion para eliminar un cliente espesifico
function deleteCliente(req, res){
  let clienteId = req.params.id;
  Cliente.findByIdAndRemove(clienteId, (err,cliente)=>{
    if(err){
      res.status(500).send({ msg : 'Error al eliminar el cliente' });
    }else if(!cliente){
      res.status(404).send({ msg : 'No se pudo eliminar el cliente' });
    }else{
      res.status(200).send({ cliente });
    }
  });
}

module.exports = {
  newCliente,
  getClientes,
  getCliente,
  updateCliente,
  deleteCliente
}
