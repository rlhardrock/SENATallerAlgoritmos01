function calcularPago(nombre, autosVendidos) {
  const pagoBase = 350;
  const comisionPorAuto = 15;
  const bonoExtra = autosVendidos > 15 ? 40 : 0;

  const sueldoBruto = pagoBase + (autosVendidos * comisionPorAuto) + bonoExtra;
  const impuesto = sueldoBruto * 0.25;
  const sueldoNeto = sueldoBruto - impuesto;

  console.log(" Resumen de pago del vendedor:");
  console.log("Nombre:       ", nombre);
  console.log("Autos vendidos:", autosVendidos);
  console.log("Sueldo bruto:  $", sueldoBruto.toFixed(2));
  console.log("Impuesto (25%):$", impuesto.toFixed(2));
  console.log("Sueldo neto:   $", sueldoNeto.toFixed(2));
}


const nombreVendedor = "Carlos Gómez";
const autosVendidos = 18;
calcularPago(nombreVendedor, autosVendidos);
