const kakaroto = {
    nombre: 'Goku',
    poder: 'camejamejaaaa',
    edad: 50,
    getNombre() {
        return `${this.nombre}  ${this.poder}`
    }
}
console.log(kakaroto.getNombre());

//const nombre = kakaroto.nombre;
//const poder = kakaroto.poder;
const { nombre, poder, edad = 0 } = kakaroto;
console.log(nombre, poder, edad)

// function imprimirHeroe({ nombre, poder, edad = 0 }) {
//     nombre = 'leiber';
//     console.log(nombre, poder, edad);
// }
// //imprimirHeroe(kakaroto);

// const heroes = ['batman', 'superman', 'optimus'];
// const h1 = heroes[0];
// console.log(h1);