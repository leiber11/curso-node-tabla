"use strict";

var _require = require('./helpers/multiplicar'),
    crearArchivoTabla = _require.crearArchivoTabla;

var argv = require('yargs').option('b', {
  alias: 'base',
  type: 'number',
  demandOption: true
}).check(function (argv, options) {
  if (isNaN(argv.b)) {
    throw 'La base tiene que ser un numero';
  }

  return true;
}).option('l', {
  alias: 'lista',
  type: 'number',
  demandOption: false,
  "default": false
}).argv; // tabla de  ultiplicar


console.clear(); //console.log(process.argv);

console.log(argv); //console.log('numero:yargs', argv.base);
//const [ , ,arg3= numero5]=process.argv;
//const [ ,numero=5]=arg3.split('=');
//const numero = 6; 

crearArchivoTabla(argv.b).then(function (nombreArchivo) {
  return console.log(nombreArchivo, 'creado!!');
})["catch"](function (err) {
  return console.log(err);
});