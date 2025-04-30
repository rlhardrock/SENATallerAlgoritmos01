function uno() {
    document.getElementById("enunciado").innerHTML = `
    <p>Ejercicio 1</p>
    <h2>Algoritmo que imprime el nombre de un producto, clave, precio 
    original y su total con descuento. El descuento lo hace en base a la clave, 
    Si la clave es 01 el descuento es del 10% y si la clave es 02 el descuento 
    en del 20% (sólo existen dos claves).</h2>
    <input type="button" value="Descontar" onclick="descuento()">
    `;
}
function descuento() {
    const nombreProducto = prompt("Ingrese el nombre del producto:");
    const claveProducto = prompt("Ingrese la clave del producto: 01 ó 02):");
    const precioOriginal = parseFloat(prompt("Ingrese el precio original del producto:"));

    if (isNaN(precioOriginal) || precioOriginal <= 0) {
        document.getElementById("resultado").innerHTML = "<p style='color:red;'>Precio inválido. Por favor recargue e intente de nuevo.</p>";
    } else {
        let descuento = 0;
        if (claveProducto === "01") {
            descuento = 0.10;
        } else if (claveProducto === "02") {
            descuento = 0.20;
        } else {
            document.getElementById("resultado").innerHTML = "<p style='color:red;'>Clave inválida. Solo se acepta 01 o 02.</p>";
        }

        if (descuento > 0) {
            const cantidadDescuento = precioOriginal * descuento;
            const precioFinal = precioOriginal - cantidadDescuento;

            document.getElementById("resultado").innerHTML = `
            <h2>Resultado:</h2>
            <ul>
                <li><strong>Producto:</strong> ${nombreProducto}</li>
                <li><strong>Clave:</strong> ${claveProducto}</li>
                <li><strong>Precio Original:</strong> $${precioOriginal.toFixed(2)}</li>
                <li><strong>Descuento:</strong> $${cantidadDescuento.toFixed(2)} (${descuento * 100}%)</li>
                <li><strong>Total con Descuento:</strong> $${precioFinal.toFixed(2)}</li>
            </ul>
            `;
        }
    }
}
/*==========================================================================================================*/
function dos() {
    document.getElementById("enunciado").innerHTML = `
    <p>Ejercicio 2</p>
    <h2>Algoritmo para calcular el total a pagar por la compra de camisas, 
    precio de las camisas 25000. Si se compran tres camisas o más se aplica 
    un descuento del 20% sobre el total de la compra y si son menos de tres 
    camisas un descuento del 10%.</h2>
    <input type="button" value="Comprar" onclick="comprarCamisas()">
    `;
}
function comprarCamisas() {
    let camisasCompradas = parseFloat(prompt("Cantidad de camisas compradas"));
    const valorCamisa = 25000;
    const descuentoMaximo = 0.2;
    const descuentoMinimo = 0.1;

    const valorCompraTotal = camisasCompradas * valorCamisa;
    let valorTodaslasCamisas;

    if (camisasCompradas >= 3) {
        valorTodaslasCamisas = valorCompraTotal - (valorCompraTotal * descuentoMaximo);
    } else {
        valorTodaslasCamisas = valorCompraTotal - (valorCompraTotal * descuentoMinimo);
    }

    document.getElementById("resultado").innerHTML = `
    <h2>El valor de la compra de ${camisasCompradas} camisas es: $${valorTodaslasCamisas.toLocaleString('es-CO')}</h2>
   `;
}
/*==========================================================================================================*/
function tres() {
    document.getElementById("enunciado").innerHTML = `
    <p>Ejercicio 3</p>
    <h2>En un supermercado se hace una promoción, mediante la cual el cliente 
    obtiene un descuento dependiendo de un número que se escoge al azar los 
    numeros deben de estar entre 1 y 10. Si el número escogido es menor que 
    10 el descuento es del 15% sobre el total de la compra, si es menor o igual 
    a 5 el descuento es del 20%. Obtener cuánto dinero se le descuenta.</h2>
    <input type="button" value="Descontar" onclick="supermercar()">
    `;
}
function supermercar() {
    let  totalCompra = parseFloat(prompt("Valor de la compra:"))
    let numero = parseFloat(prompt("Elige un número entre 1 y 10"));
    const descuentoMayor = 0.15;
    const descuentoMenor = 0.2;

    let valorConDescuento;

    if ( numero <= 5){
        valorConDescuento = totalCompra - (totalCompra * descuentoMenor)
    }else{
        valorConDescuento = totalCompra - (totalCompra * descuentoMayor)
    }

    document.getElementById("resultado").innerHTML = `
    <h2>Numero al azar es ${numero}; El valor de la compra es de ${totalCompra} y con descuento es ${valorConDescuento}</h2>
   `;
}
/*==========================================================================================================*/
function kuatro() {
    document.getElementById("enunciado").innerHTML = `
    <p>Ejercicio 4</p>
    <h2>Calculadora del número de pulsaciones que debe tener una persona por cada 10 
    segundos de ejercicio aeróbico:</h2><br>
    <h3>Pulsaciones: (220 - edad)/10 y si es sexo M | (210 - edad)/10 y si es sexo F</h3>
    <input type="button" value="Cambiar" onclick="pulsaciones()">
    `;
}
function pulsaciones() {
    let edad = parseFloat(prompt("Ingresar  Edad"));
    let sexo = prompt("Ingresar sexo F ó M").trim().toUpperCase();
    let pulsaciones;

    if (sexo === "M" ){
        pulsaciones = ((210 - edad) / 10);
    } else {
        pulsaciones = ((220 - edad) / 10);
    }
    document.getElementById("resultado").innerHTML = `
    <h2>Para el sexo ${sexo}; La cantidad de pulsaciones en 10 segundos de ejercicio aeróbico es: ${pulsaciones}</h2>
    `;
}
/*==========================================================================================================*/
function sinko(){
    document.getElementById("enunciado").innerHTML = `
    <p>Ejercicio 5</p>
    <h2>Algoritmo que lee un número negativo e imprime el número y el positivo del mismo.</h2>
    <input type="button" value="Cambiar" onclick="positivo()">
    `;
}
function positivo() {
    var numero = parseFloat(prompt("Ingresar Número negativo"));
    var positivo;

    if (numero < 0){
        positivo = numero * (-1);
        document.getElementById("resultado").innerHTML = '<h2>el número negativo es ['+ numero +'] y el número positivo es ['+ positivo+']</h2>';
    }else{
        document.getElementById("resultado").innerHTML = '<h2>Número no es negativo</h2>';
    }
}
/*==========================================================================================================*/
function seis(){
    document.getElementById("enunciado").innerHTML = `
    <p>Ejercicio </p>
    <h2>Algoritmo que permite pasar de kilogramos a gramos y toneladas.</h2>
    <input type="button" value="Cambiar" onclick="pesar()">
    `;
}
function pesar() {
    let kilogramo =  parseFloat(prompt("Ingresar los kilogramos"));
    const tonelada = 1000;
    const gramo = 1000;

    let tonelaje = kilogramo / tonelada;
    let gramaje = kilogramo * gramo;

    document.getElementById("resultado").innerHTML = `
    <h2> ${kilogramo} kg; son ${gramaje} grs ó ${tonelaje} Ton</h2>
    `;
}
/*==========================================================================================================*/
function siete(){
    document.getElementById("enunciado").innerHTML = `
    <p>Ejercicio 7</p>
    <h2>Un paquete de galletas cuesta $3.500 y contiene 15 galletas, cuánto 
    cuestan X cantidad de galletas de ellas?</h2>
    <input type="button" value="Cambiar" onclick="kostearGayetas()">
    `;
}
function kostearGayetas() {
    let galletas = parseFloat(prompt("Cantidad de galletas compradas"));
    const valorPaquete = 3500;
    const valorPorGalleta = valorPaquete / 15 ;

    let  valorGalletas = (galletas * valorPorGalleta).toFixed(0);

    document.getElementById("resultado").innerHTML = `
    <h2> ${galletas} galletas; tienen un valor de $${valorGalletas.toLocaleString('es-CO')}</h2>
    `;
}
/*==========================================================================================================*/
function ocho() {
    document.getElementById("enunciado").innerHTML = `
    <p>Ejercicio 8</p>
    <h2>Si 15 cuadernos cuestan $75000, cuánto cuestan X cantidad de 
    cuadernos?</h2>
    <input type="button" value="Cambiar" onclick="kostearKuadernos()">
    `;
}
function kostearKuadernos() {
    let cuadernos = parseFloat(prompt("Cantidad de cuadernos comprados"));
    const valorPaquete = 75000;
    const valorPorCuaderno = valorPaquete / 15 ;

    let  valorCuadernos = (cuadernos * valorPorCuaderno).toFixed(0);

    document.getElementById("resultado").innerHTML = `
    <h2> ${cuadernos} cuadernos; tienen un valor de $${valorCuadernos.toLocaleString('es-CO')}</h2>
    `;
}
/*==========================================================================================================*/
function nueve() {
    document.getElementById("enunciado").innerHTML = `
    <p>Ejercicio 9</p>
    <h2>Programa que cuente de 1 a 200 e imprima en pantalla los 
    números divisibles por 6, y cuando llegue a 200 cuente de forma regresiva 
    hasta 20 e imprima los divisibles por 8</h2>
    <input type="button" value="Cambiar" onclick="divisibles()">
    `;
}
function divisibles() {
    // Del 1 al 200, divisibles por 6
    resultado.innerHTML += "</p><h3>Divisibles por 6 (200 a 20):</h3><p>";
    for (let divPorSeis = 1; divPorSeis <= 200; divPorSeis++) {
        if (divPorSeis % 6 === 0) {
            resultado.innerHTML += divPorSeis + " ";
        }
    }
    // Del 200 al 20, divisibles por 8
    resultado.innerHTML += "</p><h3>Divisibles por 8 (200 a 20):</h3><p>";
    for (let divPorOcho = 200; divPorOcho >= 20; divPorOcho--) {
        if (divPorOcho % 8 === 0) {
            resultado.innerHTML += divPorOcho + " ";
        }
    }
    resultado.innerHTML += "</p>";
}
/*==========================================================================================================*/
function diez() {
    document.getElementById("enunciado").innerHTML = `
        <p>Ejercicio 10</p>
        <h2>Programa que capture el nombre de dos personas y las fechas 
        de nacimiento con cada campo por separado día, mes y año y calcule la 
        edad de dos personas diferentes y diga cuál de ellos es mayor</h2>
        <input type="button" value="Calcular" onclick="fechas()">
    `;
}
function calcularEdad(dia, mes, anio) {
    const hoy = new Date();
    let edad = hoy.getFullYear() - anio;
    // Verificar si aún no ha cumplido años este año
    if (hoy.getMonth() + 1 < mes || (hoy.getMonth() + 1 === mes && hoy.getDate() < dia)) {
        edad--;
    }
    return edad;
}
function fechas() {
    const nombre1 = prompt("Ingresar Nombre 1:");
    const dia1 = parseInt(prompt("Día de nacimiento de " + nombre1));
    const mes1 = parseInt(prompt("Mes de nacimiento de " + nombre1 + " (1-12)"));
    const anio1 = parseInt(prompt("Año de nacimiento de " + nombre1));

    const nombre2 = prompt("Ingresar Nombre 2:");
    const dia2 = parseInt(prompt("Día de nacimiento de " + nombre2));
    const mes2 = parseInt(prompt("Mes de nacimiento de " + nombre2 + " (1-12)"));
    const anio2 = parseInt(prompt("Año de nacimiento de " + nombre2));

    const edad1 = calcularEdad(dia1, mes1, anio1);
    const edad2 = calcularEdad(dia2, mes2, anio2);

    let mayor;
    if (anio1 < anio2 || (anio1 === anio2 && mes1 < mes2) || (anio1 === anio2 && mes1 === mes2 && dia1 < dia2)) {
        mayor = nombre1 + " es mayor que " + nombre2;
    } else if (anio1 > anio2 || (anio1 === anio2 && mes1 > mes2) || (anio1 === anio2 && mes1 === mes2 && dia1 > dia2)) {
        mayor = nombre2 + " es mayor que " + nombre1;
    } else {
        mayor = nombre1 + " y " + nombre2 + " tienen la misma edad";
    }

    document.getElementById("resultado").innerHTML = `
        <h2>La edad actual de ${nombre1} es ${edad1} años</h2>
        <h2>La edad actual de ${nombre2} es ${edad2} años</h2>
        <h3>${mayor}</h3>
    `;
}
/*==========================================================================================================*/
function diezyuno() {
    document.getElementById("enunciado").innerHTML = `
        <p>Ejercicio 11</p>
        <h2>Capturar el salario de un empleado y realizar el descuento de pensión y salud, pero si el salario es superior a $1.200.000 no le 
        debe descontar.</h2>
        <input type="button" value="Cambiar" onclick="impuestos()">
    `;
}
function impuestos() {
    let salario = parseFloat(prompt("Ingresar salario neto"));
    const descuentoSaludPension = 0.08;

    let salarioNeto = salario;
    let descuentoTotal = 0;

    if (salario >= 1200000){
        salarioNeto = salario;
    } else {
        descuentoTotal = (salario * descuentoSaludPension).toFixed(0);
        salarioNeto = (salario - descuentoTotal).toFixed(0);
    }
    document.getElementById("resultado").innerHTML = `
        <h2>El salario es de $${salarioNeto.toLocaleString('es-CO')}</h2>
        <h2>El descuento es de $${descuentoTotal.toLocaleString('es-CO')}</h2>
    `;
}
/*==========================================================================================================*/
function diezydos() {
    document.getElementById("enunciado").innerHTML = `
        <p>Ejercicio 12</p>
        <h2>Capturar el salario de un empleado y lo divida por 30 
        dias del mes, también debe capturar los días trabajados y debe 
        mostrar el total ganado.</h2>
        <input type="button" value="Calcular" onclick="ganancias()">
    `;
}
function ganancias() {
    let salario = parseFloat(prompt("Ingresar salario neto"));
    let diasTrabajados = parseFloat(prompt("Dias trabajados?"));
    const diasMes = 30;

    let valorDia = (salario / diasMes).toFixed(0);
    let ganancias = valorDia * diasTrabajados;
    let pagoHonorario = salario - ganancias;

    document.getElementById("resultado").innerHTML = `
        <h2>Para los ${diasTrabajados} dias trabajados, El salario por dias laborales es de $${ganancias.toLocaleString('es-CO')}</h2>
        <h2>El pago de ajuste al contrato es de $${pagoHonorario.toLocaleString('es-CO')}</h2>
    `;
}
/*==========================================================================================================*/
function diezytres() {
    document.getElementById("enunciado").innerHTML = `
        <p>Ejercicio 13</p>
        <h2>Mientras a<=1500; contar hasta 1500 e imprimir los números divisibles por 
        4 y 5; decir si son pares o impares.</h2>
        <input type="button" value="Contar" onclick="contar()">
    `;
}
function contar() {
    const limite = 1500;

    resultado.innerHTML += "</p><h3>Divisibles por 4 y 5 (para a de 0 a 1500):</h3><p>";
    for (let a = 1; a <= limite; a++) {
        if (a % 4 === 0 || a % 5 === 0) {
            let tipo = (a % 2 === 0) ? "par" : "impar";
            resultado.innerHTML += `${a} (${tipo})<br>`;
        }
    }

    resultado.innerHTML += "</p>";
}
/*==========================================================================================================*/
function diezykuatro() {
    document.getElementById("enunciado").innerHTML = `
        <p>Ejercicio 14</p>
        <h2>Ingresar una cantidad de números enteros. El programa debe 
        sumar todos los números que sean múltiplos de 3.</h2>
        <input type="button" value="Contar" onclick="numerosEnteros()">
    `;
}
function numerosEnteros() {
    let cantidadEnteros = parseInt(prompt("Ingresar cantidad de números"));;
    const numeros = [];
    const multi3 = [];

    for (let i = 0; i < cantidadEnteros; i++) {
        const numero = parseInt(prompt(`Ingresa el número ${i + 1}:`));
        numeros.push(numero);
        if (numero % 3 === 0) {
            multi3.push(numero);
        }
    }

    /*const sumaMultiplos = multi3.reduce((a, b)=> a + b, 0);*/
    let sumaMultiplos = 0;
    for (let i = 0; i < numeros.length; i++) {
        if (numeros[i] % 3 === 0) {
            sumaMultiplos += numeros[i];
        }
    }
    document.getElementById("resultado").innerHTML = `
        <p><strong>Cantidad de números ingresados:</strong>[${cantidadEnteros}]</p>
        <p><strong>Arreglo ingresado:</strong> [${numeros.join(', ')}]</p>
        <p><strong>Los números múltiplos de 3 son:</strong> [${multi3.join(', ')}]</p>
        <h2>La suma de los multiplos de 3 es: ${sumaMultiplos}</h2>
    `;
}
/*==========================================================================================================*/
function diezysinko() {
    document.getElementById("enunciado").innerHTML = `
        <p>Ejercicio 15</p>
        <h2>Mostrar las 30 primeras potencias de 3 y la suma de ellos.</h2>
        <input type="button" value="Contar" onclick="numerosPotencia()">
    `;
}
function numerosPotencia() {
    let cantidadEnteros = 30;
    const potencias = [];
    let suma = 0;

    for (let i = 0; i < cantidadEnteros; i++) {
        const potencia = Math.pow(3, i);
        potencias.push(potencia);
        suma += potencia;
    }

    document.getElementById("resultado").innerHTML = `
        <p><strong>Potencias de 3:</strong></p>
        <p>${potencias.join(', ')}</p>
        <h3>Suma total: ${suma}</h3>
    `;
}
/*==========================================================================================================*/
function diezyseis() {
    document.getElementById("enunciado").innerHTML = `
        <p>Ejercicio 16</p>
        <h2>Programa con 5 alumnos cada uno con 5 notas, calcular el promedio de 
        sus notas por alumnos y solo muestra los que ganaron.</h2>
        <input type="button" value="Contar" onclick="alumnos()">
    `;
}
function alumnos() {


}

/*==========================================================================================================*/
function diezysiete() {
    document.getElementById("enunciado").innerHTML = `
        <p>Ejercicio 17</p>
        <h2>Algoritmo, con el dividendo y el divisor, que luego me calcule el 
        residuo y el cociente de dicha división.</h2>
        <input type="button" value="Calcular" onclick="division()">
    `;
}
function division() {
    let dividendo = parseInt(prompt("Ingresar dividendo"));
    let divisor = parseInt(prompt("Ingresar dividendo"));

    let cociente = (dividendo / divisor).toFixed(0);
    let residuo = dividendo - (cociente * divisor)

    document.getElementById("resultado").innerHTML = `
        <p><strong>Dividendo: ${dividendo}</strong></p>
        <p><strong>Divisor:   ${divisor}</strong></p>
        <p><strong>Cociente:  ${cociente}</strong></p>
        <p><strong>Residuo:   ${residuo}</strong></p>
   `;
}
/*==========================================================================================================*/
function diezyocho() {
    document.getElementById("enunciado").innerHTML = `
        <p>Ejercicio 18</p>
        <h2>Algoritmo que intercambie los valores de dos variables 
        numéricas.</h2>
        <input type="button" value="Intercambiar" onclick="intercambiarValores()">
    `;
}
function intercambiarValores() {
    let a = parseFloat(prompt("Ingresa el valor de A:"));
    let b = parseFloat(prompt("Ingresa el valor de B:"));

    let resultado = `<p><strong>Antes del intercambio:</strong> A = ${a}, B = ${b}</p>`;

    let temp = a;
    a = b;
    b = temp;

    resultado += `<p><strong>Después del intercambio:</strong> A = ${a}, B = ${b}</p>`;

    document.getElementById("resultado").innerHTML = resultado;
}
/*==========================================================================================================*/
function diezynueve() {
    document.getElementById("enunciado").innerHTML = `
        <p>Ejercicio 19</p>
        <h2>Algoritmo que me permita ingresar un valor inicial y luego un 
        valor final, para luego calcular el valor central de los números.</h2>
        <input type="button" value="Calcular" onclick="valorCentral()">
    `;
}
function valorCentral() {
    let valorInicial = parseFloat(prompt("Ingresa el valor Inicial:"));
    let valorFinal = parseFloat(prompt("Ingresa el valor Final:"));

    let promedio = ((valorInicial + valorFinal) / 2).toFixed(2);

    let resultado = `
        <p><strong>Valor Inicial:</strong> ${valorInicial}, 
        <strong>Valor Final:</strong> ${valorFinal}</p>
        <p><strong>Valor Central:</strong> ${promedio}</p>
    `;

    document.getElementById("resultado").innerHTML = resultado;
}
/*==========================================================================================================*/
function veinte() {
    document.getElementById("enunciado").innerHTML = `
        <p>Ejercicio 20</p>
        <h2>Calcular independientemente la suma de los números pares e 
        impares comprendidos entre 1 y 50.</h2>
        <input type="button" value="Calcular" onclick="paresImpares()">
    `;
}
function paresImpares() {
    let sumaPares = 0;
    let sumaImpares = 0;
    let pares = [];
    let impares = [];

    for (let i = 1; i <= 50; i++) {
        if (i % 2 === 0) {
            sumaPares += i;
            pares.push(i);
        } else {
            sumaImpares += i;
            impares.push(i);
        }
    }

    document.getElementById("resultado").innerHTML = `
        <p><strong>Números pares:</strong> ${pares.join(', ')}</p>
        <p><strong>Suma de pares:</strong> ${sumaPares}</p>
        <p><strong>Números impares:</strong> ${impares.join(', ')}</p>
        <p><strong>Suma de impares:</strong> ${sumaImpares}</p>
    `;
}
/*==========================================================================================================*/
function veinteyuno() {
    document.getElementById("enunciado").innerHTML = `
        <p>Ejercicio 21</p>
        <h2>Determinar el promedio de una lista de N números positivos.</h2>
        <input type="button" value="Contar" onclick="promedioPositivos()">
    `;
}
function promedioPositivos() {
    let cantidadEnteros = parseInt(prompt("Ingresar cantidad de números"));
    const numeros = [];
    let sumaNumeros = 0;

    for (let i = 0; i < cantidadEnteros; i++) {
        const numero = parseInt(prompt(`Ingresa el número ${i + 1}:`));
        if (numero > 0) {
            numeros.push(numero);
            sumaNumeros += numero;
        }
    }

    if (numeros.length > 0) {
        const promedio = sumaNumeros / numeros.length;

        document.getElementById("resultado").innerHTML = `
            <p><strong>Cantidad de números ingresados:</strong> ${cantidadEnteros}</p>
            <p><strong>Arreglo ingresado:</strong> [${numeros.join(', ')}]</p>
            <h2>El promedio de los números positivos es: ${promedio}</h2>
        `;
    } else {
        document.getElementById("resultado").innerHTML = `
            <p>No se ingresaron números positivos.</p>
        `;
    }
}
/*==========================================================================================================*/
function veinteydos() {
    document.getElementById("enunciado").innerHTML = `
        <p>Ejercicio 22</p>
        <h2>Algoritmo que calcula los 5 primeros números impares que 
        preceden a un numero N.</h2>
        <input type="button" value="Contar" onclick="numerosPrecedentes()">
    `;
}
function numerosPrecedentes() {
    let numero = parseInt(prompt("Ingresar número"));
    const limite = 5;
    const impares = [];
    let suma = 0;

    let contador = 0;
    let actual = numero - 1;

    while (contador < limite && actual > 0) {
        if (actual % 2 !== 0) {
            impares.push(actual);
            suma += actual;
            contador++;
        }
        actual--;
    }

    document.getElementById("resultado").innerHTML = `
        <p><strong>Número ingresado:</strong> ${numero}</p>
        <p><strong>5 impares anteriores:</strong> ${impares.join(', ')}</p>
        <p><strong>Suma:</strong> ${suma}</p>
    `;
}
/*==========================================================================================================*/
function veinteytres() {
    document.getElementById("enunciado").innerHTML = `
        <p>Ejercicio 23</p>
        <h2>Programa que muestre si los primeros 5 (o otro) numeros impares
        son múltiples de 3 (o otro) arrancando de 10 u otro numero.</h2>
        <input type="button" value="Contar" onclick="numerosMultiples10()">
    `;
}
function numerosMultiples10() {
    const impares = [];
    let primeros = parseInt(prompt("Ingrese los primeros X numeros"));
    let numero = parseInt(prompt("Ingrese el numero de arranque"));
    let multiplo = parseInt(prompt("Ingrese el multiplo"));

    while (impares.length < primeros) {
        if (numero % 2 !== 0) {
            impares.push(numero);
        }
        numero++;
    }

    const resultados = impares.map(n => {
        return `${n} ${n % multiplo === 0 ? ` --- SI es múltiplo de ${multiplo}` : ` --- NO es múltiplo de ${multiplo}`}`;
    });

    document.getElementById("resultado").innerHTML = `
        <p><strong>${primeros} primeros impares desde ${numero}:</strong></p>
        <ul>
            ${resultados.map(r => `<li>${r}</li>`).join('')}
        </ul>
    `;
}

