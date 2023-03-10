const { describe } = require('yargs');

const argv = require('yargs')
           .option('b',{
            alias:'base',
            type:'number',
            demandOption:true,
            describe:'Es la base de la tabla de multiplicar'
           })
           .option('l',{
            alias:'listar',
            type:'boolean',
            default:false,
            describe:'Muestra la tabla de multiplicar en consola'
            
           })
           .option('h',{
            alias:'hasta',
            type:'number',
            default:false,
            describe:'Muestra la tabla de multiplicar hasta el valor que desees'
            
           })
           .check((argv,options)=>{
            if(isNaN(argv.base)){
                throw 'la base tiene que ser un numero'
            }
            return true;
           })
           
            .argv;

            module.exports=argv;