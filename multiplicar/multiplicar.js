const fs = require('fs');
const colors = require('colors');

let crearArchivo = ( base, limite = 10 ) => {
	return new Promise((resolve, reject) => {
		if(!Number(base) || !Number(limite)){ 
			reject(`El valor introducido, ${base} ${limite} no es un número`);
			return;
		}
		let data = '';

		for(let i = 1 ; i <= limite ; i++){
			data += `${base} * ${i} = ${base*i}\n`;
		}


		fs.writeFile(`tablas/tabla-${base}-${limite}.txt`, data, (err) => {
		  if (err) {
		  	reject(err);
		  }else{
		  	resolve(`tabla-${base}-${limite}.txt`);
		  }
		});
	});
}

let listarTabla = (base, limite = 10) => {
	return new Promise((resolve, reject) => {
		if(!Number(base) || !Number(limite)){
			reject(`Los argumentos introducidos, ${base} ${limite}, tienen que se numéricos.`);
			return;
		}
		let data = '';

		for(let i = 1 ; i <= limite ; i++){
			data += `${base} * ${i} = ${base*i}\n`;
		}

		resolve(data);
	})
}

module.exports = {
	crearArchivo,
	listarTabla
}

