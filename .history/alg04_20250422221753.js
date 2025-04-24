function determinarClase(puntos: number): string {
  if (puntos > 2000) {
    return 'Ejecutiva';
  } else if (puntos >= 1000) {
    return 'Normal';
  } else {
    return 'Económica';
  }
}

// Ejemplo de uso (con valor fijo):
const puntos = 1350;
const clase = determinarClase(puntos);
console.log(`Con ${puntos} puntos puedes viajar en clase: ${clase}`);
