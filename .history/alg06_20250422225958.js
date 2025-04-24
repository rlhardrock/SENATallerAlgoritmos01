const readline = require('readline');

const rl = readline.createInterface({
     input: process.stdin,
     output: process.stdout
});

// Función para pedir una nota
function calificacion(pregunta) {
     return new Promise((resolve) => {
     rl.question(pregunta, (respuesta) => {
          resolve(parseFloat(respuesta));
     });
     });
}

async function calcularCalificacionFinal() {
     const calificacion1= await calificacion('Ingresar calificación del primer parcial: ');
     const calificacion2 = await calificacion('Ingresar calificación del segundo parcial: ');
     const calificacionFinal = await calificacion('Ingrese calificación del examen final: ');

     const promedio = Math.ceil(((calificacion1 * 0.30) + (calificacion2 * 0.30) + (calificacionFinal * 0.40)) * 10) / 10;
     console.log(`\nNota final: ${promedio.toFixed(2)}`);

     if (promedio >= 3.2) {
     console.log('Asignatura Aprobada');
     } else {
     console.log('Asignatura Reprobada');
     }

     rl.close();
}

calcularCalificacionFinal();
