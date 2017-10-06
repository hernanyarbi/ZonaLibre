'use strict'

let mongoose = require('mongoose');
let app = require('./app');
let port = process.env.PORT || 3838;
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/ZonaLibre', (err,res) =>{
  if(err){
    throw err;
  }else{
    console.log('la base de datos esta corriendo correctamente');
    app.listen(port, function(){
    console.log('Puesrto Corriendo en localhost:'+port);
    });
  }
});
