const { crearArchivo, listarTabla } = require('./multiplicar/multiplicar');
const argv = require('./config/yargs').argv;
const colors = require('colors');


// let parametro = argv[2];
// let base = para¿metro.split('=')[1];
let comando = argv._[0]
console.log(argv);

switch (comando) {
    case 'listar':

        listarTabla(argv.base, argv.limite);
        break;
    case 'crear':

        crearArchivo(argv.base, argv.limite).then(archivo => {
            console.log('Archivo creado:'.blue + ` ${archivo}`.green);
        }).catch(err => {
            console.log(err);
        });
        break;
    default:
        console.log('comando no reconocido');
}