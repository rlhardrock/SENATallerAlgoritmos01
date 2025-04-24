const readline = require('readline');

const rl = readline.createInterface({
     input: process.stdin,
     output: process.stdout
});

// Función para pedir una nota
function pedirNota(pregunta) {
     return new Promise((resolve) => {
     rl.question(pregunta, (respuesta) => {
          resolve(parseFloat(respuesta));
     });
     });
}

async function calcularNotaFinal() {
     const nota1 = await pedirNota('Ingresar calificación del primer parcial: ');
     const nota2 = await pedirNota('Ingresar calificación del segundo parcial: ');
     const notaFinal = await pedirNota('Ingrese calificación del examen final: ');

     const promedio = (nota1 * 0.30) + (nota2 * 0.30) + (notaFinal * 0.40);
     console.log(`\nNota final: ${promedio.toFixed(2)}`);

     if (promedio >= 3.2) {
     console.log('Asignatura Aprobada');
     } else {
     console.log('Asignatura Reprobada');
     }

     rl.close();
}

calcularNotaFinal();
