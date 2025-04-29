function uno() {
    document.getElementById("enunciado").innerHTML = `
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