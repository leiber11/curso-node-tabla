// async await

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

const getEmpleado = (id) => {

    return new Promise((resolve, reject) => {
        const empleado = empleados.find(e => e.id === id)
        if (empleado) {
            resolve(empleado.nombre);
        } else {
            reject(`No existe empleado con id ${id}`);
        }

    });


}
const getSalario = (id) => {

    return new Promise((resolve, reject) => {
        const salario = salarios.find(e => e.id === id)
        if (salario) {
            resolve(salario.salario);
        } else {
            reject(`No existe salario con id ${id}`);
        }

    });


}

const id = 5;
const getUsuario = async(id) => {
    try {
        const empleado = await getEmpleado(id);
        const salario = await getSalario(id);
        return `el salario del empleado: ${empleado} es de: ${salario}`;

    } catch (error) {
        throw error;
    }

}

getUsuario(id)
    .then(msg => console.log(msg))
    .catch(err => console.log(err));