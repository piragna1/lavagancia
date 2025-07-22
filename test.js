const cantidad = BigInt("777777777");

console.time("Tiempo de impresión");

for (let i = 0n; i < cantidad; i++) {
  console.log("7");
}

console.timeEnd("Tiempo de impresión");
