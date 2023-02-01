"use strict";

// async await
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

var id = 5;

var getUsuario = function getUsuario(id) {
  var empleado, salario;
  return regeneratorRuntime.async(function getUsuario$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          _context.next = 3;
          return regeneratorRuntime.awrap(getEmpleado(id));

        case 3:
          empleado = _context.sent;
          _context.next = 6;
          return regeneratorRuntime.awrap(getSalario(id));

        case 6:
          salario = _context.sent;
          return _context.abrupt("return", "el salario del empleado: ".concat(empleado, " es de: ").concat(salario));

        case 10:
          _context.prev = 10;
          _context.t0 = _context["catch"](0);
          throw _context.t0;

        case 13:
        case "end":
          return _context.stop();
      }
    }
  }, null, null, [[0, 10]]);
};

getUsuario(id).then(function (msg) {
  return console.log(msg);
})["catch"](function (err) {
  return console.log(err);
});