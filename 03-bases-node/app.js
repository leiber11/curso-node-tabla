

const { crearArchivo} = require('./helpers/multiplicar');
const colors=require('colors');
const argv=require('./config/yargs');

console.clear();

//console.log(process.argv);
console.log(argv);
//console.log('base: yargs', argv.base);

crearArchivo(argv.base, argv.listar, argv.hasta)
.then(nombreArchivo =>console.log(nombreArchivo.rainbow, 'Creado') )
.catch(err => console.log(err)); 

