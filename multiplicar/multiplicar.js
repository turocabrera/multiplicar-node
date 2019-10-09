const fs = require('fs');
const colors = require('colors');
// const fs = require('fs');
// const fs = require('fs');
/**
 * 
 * @param {*} base 
 * @param {*} limite 
 */
let listarTabla = (base, limite) => {

        console.log('======================'.green);
        console.log(`==Tabla de ${base}`.green);
        console.log('======================'.blue);
        for (i = 1; i <= limite; i++) {
            console.log(` ${base} * ${i} = ${base*i} `);
        }
    }
    /**
     * 
     * @param {*} base 
     */
let crearArchivo = (base, limite) => {
    return new Promise((resolve, reject) => {

        if (!Number(base)) {
            reject(`la base ${base} no es un numero`);
            return;
        }
        let data = '';
        for (let i = 1; i <= limite; i++) {

            data += ` ${base} * ${i} = ${base*i} \n`;
        }

        fs.writeFile(`tablas/tabla-${base}-al-${limite}.txt`, data, (err) => {
            if (err) {
                reject(err);
            } else {
                resolve(`tablas/tabla-${base}-al-${limite}.txt`);
            }
        });

    })
}

module.exports = {
    crearArchivo,
    listarTabla
}