
// se crean los arreglos
const empleados = [{
        id: 1,
        nombre: 'eileen'
    },
    {
        id: 2,
        nombre: 'gema'
    },
    {
        id: 3,
        nombre: 'leiber'
    }
];

const salarios = [{
        id: 1,
        salario: 1000
    },
    {
        id: 2,
        salario: 1500
    }

];

// se obtiene la  calback 

const getEmpleado = (id, callback) => {
    const empleado = empleados.find(e =>e.id === id);//se valida si existe el id si existe lo llamma con .empleado
    
    if (empleado) {
        callback(null, empleado);
    } else {
        callback (`el empleado con id ${id} no exixte`);
    }
}



const getSalario = (id, callback) => {
    const salario = salarios.find(s => s.id === id)?.salario;//se valida si existe el id si existe lo llamma con .salario
    if (salario) {
        callback(null, salario);
    } else {
        callback(`el salario con id ${id} no existe`)
    }
}

// se llaman las funciones con el calback 
const id = 3
getEmpleado(id, (err, empleado) => {
    if (err) {
        console.log('ERROR');
        return console.log(err);
    }
    console.log('empleado existe! ');
    console.log(empleado.nombre);
});

getSalario(id, (err, salario) => {
if(err){
    console.log('ERROR');
    return console.log(err);
}

    console.log(salario);
});