function obtenerClase(puntos) {
     if (puntos > 2000) {
     return "Ejecutiva";
     } else if (puntos >= 1000) {
     return "Normal";
     } else {
     return "Económica";
     }
}

const readline = require('readline');

const rl = readline.createInterface({
     input: process.stdin,
     output: process.stdout
});

rl.question("Ingrese la cantidad de puntos del viajero: ", function(puntos) {
     const puntosNum = parseInt(puntos);

     if (isNaN(puntosNum)) {
     console.log("Por favor ingrese un número válido.");
     } else {
     const clase = obtenerClase(puntosNum);
     console.log(`El viajero puede viajar en clase: ${clase}`);
     }

     rl.close();
});

// node alg04.js