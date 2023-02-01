"use strict";

//setTimeout(function() {
//    console.log('hola leiber')
//}, 2000);
var getUsuarioById = function getUsuarioById(id, callback) {
  var usuario = {
    id: id,
    nombre: 'leiber'
  };
  setTimeout(function () {
    callback(usuario);
  }, 2500);
};

getUsuarioById(10, function (usuario) {
  console.log(usuario.id);
  console.log(usuario.nombre.toUpperCase());
});