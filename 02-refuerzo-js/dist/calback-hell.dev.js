"use strict";

function _templateObject() {
  var data = _taggedTemplateLiteral(["el empleado con id ", " no exixte"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

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

var getEmpleado = function getEmpleado(id, callback) {
  var empleado = empleados.find(function (e) {
    return e.id === id;
  });

  if (empleado) {
    callback(null, empleado);
  } else {
    callback(_templateObject(), id);
  }
};

var getSalario = function getSalario(id, callback) {
  var salario = salarios.find(function (e) {
    return e.id === id;
  });

  if (salario) {
    callback(null, salario);
  } else {
    callback("el salario con id ".concat(id, " o existe"));
  }
};

var id = 2;
getEmpleado(id, function (err, empleado) {
  if (err) {
    console.log('ERROR');
    return console.log(err);
  }

  console.log('empleado existe! ');
  console.log(empleado);
});
getSalario(id, function (err, salario) {
  console.log(salario.salario);
});