const fs = require('fs');
const colors = require('colors');

const crearArchivo =  async ( table =5 , l = false, hasta = 10)=>{

    // return new Promise( ( resolve, reject) =>{
    //     let output = '';
    //     output +='=============================\n';
    //     output +=` Tabla del ${table}\n`;
    //     output +='============================= \n';

    //     for (let index = 1; index <= 10; index++) {
            
    //         output +=`${table} x ${index}= ${table*index} \n`;
    //     } 

    //     console.log(output);
    //     fs.writeFileSync(`Tabla-${table}.txt`,output);
    //     resolve(`Tabla-${table}.txt creada`);
    // });
    try {
        
        let output = '';
        let consola = '';
        console.log('=============================\n'.green);
        console.log(` Tabla del ${colors.blue(table)}\n`.green);
        console.log('============================= \n'.green);

        for (let index = 1; index <= hasta; index++) {
            
            output +=`${table} ${'x'} ${index} ${'='} ${table*index} \n`;
            consola +=`${table} ${'x'.red} ${index} ${'='.blue} ${table*index} \n`;
        } 

       if (l) {
        console.log(consola);
       }
        fs.writeFileSync(`./Output/Tabla-${table}.txt`,output);
        return `Tabla-${table}.txt creada`;
    } catch (error) {
        throw error;
    }



}

module.exports = {
    crearArchivo
}