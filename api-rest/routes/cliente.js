'use strict'

let express = require('express');
let ClienteCtrlr = require('../controllers/cliente');
let api = express.Router();

api.post('/client', ClienteCtrlr.newCliente);
api.get('/client', ClienteCtrlr.getClientes);
api.get('/client/:id', ClienteCtrlr.getCliente);
api.put('/client/:id', ClienteCtrlr.updateCliente);
api.delete('/client/:id', ClienteCtrlr.deleteCliente);

module.exports = api;
