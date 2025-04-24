const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let estudiantes = [];
let index = 0;

function pedirNotas(estudiante) {
  rl.question(`Ingrese las 3 notas parciales del estudiante ${estudiante} separadas por espacios: `, (input) => {
    const notas = input.split(" ").map(parseFloat);

    if (notas.length !== 3 || notas.some(n => isNaN(n) || n < 0 || n > 5)) {
      console.log("⚠️ Entrada inválida. Asegúrate de ingresar 3 números válidos entre 0 y 5.");
      pedirNotas(estudiante);
      return;
    }

    const definitiva = (notas[0] + notas[1] + notas[2]) / 3;
    estudiantes.push({ nombre: `Estudiante ${estudiante}`, notas, definitiva });

    index++;
    if (index < 3) {
      pedirNotas(index + 1);
    } else {
      mostrarResultados();
      rl.close();
    }
  });
}

function mostrarResultados() {
  console.log("\n📊 Resultados:");

  estudiantes.forEach((e, i) => {
    console.log(`${e.nombre}: Notas = [${e.notas.join(", ")}] → Definitiva = ${e.definitiva.toFixed(2)}`);
  });

  const mejor = estudiantes.reduce((prev, current) => (current.definitiva > prev.definitiva) ? current : prev);
  const peor = estudiantes.reduce((prev, current) => (current.definitiva < prev.definitiva) ? current : prev);

  console.log(`\n Mejor rendimiento: ${mejor.nombre} con ${mejor.definitiva.toFixed(2)}`);
  console.log(`Peor rendimiento: ${peor.nombre} con ${peor.definitiva.toFixed(2)}`);
}

console.log("📥 Ingrese las notas de los 3 estudiantes.");
pedirNotas(1);
