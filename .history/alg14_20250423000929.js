function determinarNivel(sueldo, aniosEnEmpresa) {
    if (aniosEnEmpresa > 10) {
        return 3; // Nivel 3 si lleva más de 10 años en la empresa
    } else if (sueldo < 500 && aniosEnEmpresa < 4) {
        return 1; // Nivel 1 si el sueldo es menor a 500 y lleva menos de 4 años
    } else if (sueldo >= 501 && sueldo <= 1000 && aniosEnEmpresa < 4) {
        return 2; // Nivel 2 si el sueldo está entre 501 y 1000 y lleva menos de 4 años
    } else if (sueldo < 2000 && aniosEnEmpresa >= 5 && aniosEnEmpresa <= 9) {
        return 4; // Nivel 4 si lleva entre 5 y 9 años en la empresa y gana menos de 2000
    } else {
        return 0; // Nivel 0 para los demás casos
    }
}

// Ejemplo de uso
const sueldo = 1200;  // Ejemplo de sueldo
const aniosEnEmpresa = 6;  // Ejemplo de años en la empresa

const nivel = determinarNivel(sueldo, aniosEnEmpresa);
console.log("El nivel del empleado es:", nivel);
