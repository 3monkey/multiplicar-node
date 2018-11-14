// requires
/*const argv = require('yargs')
		.command('listar','Imprime en consola la tabla de multiplicar.',{
			base: {
				demand: true,
				alias: 'b'
			},
			limite: {
				alias: 'l',
				default: 10
			}
		})
		.command('crear','Crear un fichero de texto con la tabla de multiplicar.',{
			base: {
				demand: true,
				alias: 'b'
			},
			limite: {
				alias: 'l',
				default: 10
			}
		})
		.help()
		.argv;*/
const argv = require('./config/yargs').argv;
const colors = require('colors');
const {crearArchivo,listarTabla} = require('./multiplicar/multiplicar');

let comando = argv._[0];

switch(comando){
	case 'listar':
		listarTabla(argv.base, argv.limite)
		.then(message => {
			console.log('========================'.green);
			console.log(`====Tabla de ${argv.base}====`.green);
			console.log('========================'.green);
			console.log(message)
		})
		.catch(e => console.log(e));
		break;
	case 'crear':
		crearArchivo(argv.base, argv.limite)
		.then(archivo => console.log(`Archivo creado: ${colors.green(archivo)}`))
		.catch(e => console.log(e));
		break;
	default:
		console.log('Comando no reconocido.');
		break;
}
//let argv2 = process.argv;



