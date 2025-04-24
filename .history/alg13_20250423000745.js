// Función para verificar si el estudiante puede optar a ser monitor
function puedeSerMonitor(promedio, tieneAntecedentes) {
    if (promedio > 4.0 && !tieneAntecedentes) {
        return "¡Felicidades! Puedes optar por ser monitor de la institución.";
    } else if (promedio <= 4.0) {
        return "No puedes ser monitor. Necesitas un promedio superior a 4.0.";
    } else if (tieneAntecedentes) {
        return "No puedes ser monitor debido a antecedentes disciplinarios.";
    }
}

// Ejemplo de uso de la función:
let promedioEstudiante = 4.5;  // Cambia este valor para probar diferentes promedios
let tieneAntecedentes = false; // Cambia esto a 'true' si el estudiante tiene antecedentes disciplinarios

console.log(puedeSerMonitor(promedioEstudiante, tieneAntecedentes));
