
const precoCombustivel = 4.70;
const kmPorLitros = 5;
const distanciaEmKm = 90;

const litrosConsumidos = distanciaEmKm / kmPorLitros;
const valorGasto = litrosConsumidos * precoCombustivel;
console.log(valorGasto.toFixed(2));
