let num = parseFloat(prompt("introduce el precio del producto"));

const IVA = 0.21;

let ivaProducto = precio * IVA;
let precioFinal = precio * ivaProducto;

console.log("El precio final con iva es:", precioFinal);
