// requires
//const fs = require('fs'); // Proyecto propio de node.
//const fs = require('express'); // No existe en la decumentacion de node.
//const fs = require('./path'); // Los que generamos en el proyecto.
const {crearArchivo} = require('./multiplicar/multiplicar');
//let base = '5';

let argv = process.argv;
let parametro = argv[2];
let base = parametro.split('=')[1];

/*let data = '';

for(let i = 1 ; i <= 10 ; i++){
	data += `${base} * ${i} = ${base*i}\n`;
}


fs.writeFile(`tablas/tabla-${base}.txt`, data, (err) => {
  if (err) throw err;
  console.log(`El archivo tabla-${base}.txt ha sido creado.`);
});*/

crearArchivo(base)
	.then(archivo => console.log(`Archivo creado: ${archivo}`))
	.catch(e => console.log(e));
