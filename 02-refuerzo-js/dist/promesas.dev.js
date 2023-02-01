"use strict";

var empleados = [{
  id: 1,
  nombre: 'eileen'
}, {
  id: 2,
  nombre: 'gema'
}, {
  id: 3,
  nombre: 'leiber'
}];
var salarios = [{
  id: 1,
  salario: 1000
}, {
  id: 2,
  salario: 1500
}];

var getEmpleado = function getEmpleado(id) {
  return new Promise(function (resolve, reject) {
    var empleado = empleados.find(function (e) {
      return e.id === id;
    });

    if (empleado) {
      resolve(empleado.nombre);
    } else {
      reject("No existe empleado con id ".concat(id));
    }
  });
};

var getSalario = function getSalario(id) {
  return new Promise(function (resolve, reject) {
    var salario = salarios.find(function (e) {
      return e.id === id;
    });

    if (salario) {
      resolve(salario.salario);
    } else {
      reject("No existe salario con id ".concat(id));
    }
  });
};
/*getEmpleado(3)
    .then(empleado => console.log(empleado))
    .catch(err => console.log(err));

getSalario(2)
    .then(salario => console.log(salario))
    .catch(err => console.log(err));*/
// PROMESAS EN CADENAS


var id = 3;
var nombre;
getEmpleado(id).then(function (empleado) {
  nombre = empleado;
  return getSalario(id);
}).then(function (salario) {
  console.log("El empleado: ".concat(nombre, " tiene un salario de: ").concat(salario));
})["catch"](function (err) {
  return console.log(err);
});