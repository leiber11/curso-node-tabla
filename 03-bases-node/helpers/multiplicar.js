const fs = require('fs');
const colors=require('colors');
const crearArchivo = async(base = 5, listar=false,hasta=20) => {
    try {
        let salida = '';
        let consola='';
        
            for (i = 1; i <= hasta; i++) {
            salida += (`${base} * ${i} = ${base*i}\n`);
            consola += (colors.rainbow(`${base} * ${i} = ${base*i}\n`));
        }
   
        
        if(listar===true){
            console.log(colors.green('===================================='));
            console.log(colors.yellow(`tabla del:${base}`));
            console.log(colors.green('===================================='));
            console.log(consola);
        }
        
        fs.writeFileSync(`./03-bases-node/salida/tabla-${base}.txt`, salida);

        return (`tabla-${base}.txt creado!!!`);

    } catch (err) {
        throw err;
    }






}
module.exports = {
    crearArchivo
}