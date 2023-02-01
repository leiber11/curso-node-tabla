"use strict";

var kakaroto = {
  nombre: 'Goku',
  poder: 'camejamejaaaa',
  edad: 50,
  getNombre: function getNombre() {
    return "".concat(this.nombre, "  ").concat(this.poder);
  }
};
console.log(kakaroto.getNombre()); //const nombre = kakaroto.nombre;
//const poder = kakaroto.poder;

var nombre = kakaroto.nombre,
    poder = kakaroto.poder,
    _kakaroto$edad = kakaroto.edad,
    edad = _kakaroto$edad === void 0 ? 0 : _kakaroto$edad;
console.log(nombre, poder, edad); // function imprimirHeroe({ nombre, poder, edad = 0 }) {
//     nombre = 'leiber';
//     console.log(nombre, poder, edad);
// }
// //imprimirHeroe(kakaroto);
// const heroes = ['batman', 'superman', 'optimus'];
// const h1 = heroes[0];
// console.log(h1);