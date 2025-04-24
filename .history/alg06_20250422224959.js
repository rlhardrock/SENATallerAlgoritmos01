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

async function calcularNotaFinal() {
     const calif1 = await calificacion('Ingresar calificación del primer parcial: ');
     const calif2 = await calificacion('Ingresar calificación del segundo parcial: ');
     const califFinal = await calificacion('Ingrese calificación del examen final: ');

     const promedio = (calif1 * 0.30) + (calif2 * 0.30) + (califFinal * 0.40);
     console.log(`\nNota final: ${promedio.toFixed(2)}`);

     if (promedio >= 3.2) {
     console.log('Asignatura Aprobada');
     } else {
     console.log('Asignatura Reprobada');
     }

     rl.close();
}

calcularNotaFinal();
