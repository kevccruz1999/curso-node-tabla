const {crearArchivo} = require('./helpers/multiplicar')
require('colors');
const argv = require('./config/yargs');
//
console.clear();
// const table = 5;

//Es una manera de obtener los valores de consola, como parametro
// const [ , ,arg3= 'base=5'] = process.argv;
// const [, table =5] = arg3.split('=');
// console.log(table);

// console.log('base: yargs', argv.b);


crearArchivo( argv.b, argv.l, argv.h )
    .then(nombreArchivo => console.log(nombreArchivo.rainbow))
    .catch(err => console.log(err))