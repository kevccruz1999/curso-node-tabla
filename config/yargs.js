const { demandOption } = require('yargs');

const argv = require('yargs')
        .option('b',{
            alias:'base',
            type: 'number',
            demandOption: true,
            describe:'Es la base de la tabla de multiplicar'
        })
        .option('l',{
            alias:'listar',
            type:'boolean',
            default:false,
            describe:'Permite Listar la tabla creada'
        })
        .option('h',{
            alias:'hasta',
            type:'number',
            default: 10,
            demandOption:false,
            describe: 'Allows to set a limit to the multiplication table'
        }

        )
        .check((argv, options)=>{
            if (isNaN(argv.b) || isNaN(argv.h)) {
                throw 'La base y el hasta deben ser un numero';
            }
            
            return true;
        })
        .argv;


module.exports = argv;