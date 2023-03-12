let finalistas = 3;
let nombres = [];
let marcas = [];

for (let i = 0; i < finalistas; i++) {
    nombres.push(prompt(`Ingrese el nombre del finalista ${i+1}`));
    marcas.push(Number(prompt(`Ingrese la marca del finalista ${i+1} en metros`)));
}
let mayorMarca = Math.max(...marcas);
let indexMayor = marcas.indexOf(mayorMarca);
const record = 15.5;
if (mayorMarca > record) {
    alert(`!El finalista ganador de la medalla de oro es ${nombres[indexMayor]} y ademas rompió el record de 15,5 metros con una marca de ${marcas[indexMayor]} metros por lo cual se le realizará un pago de 500 millones!`);
}
else {
    alert(`El finalista ganador de la medalla de oro es ${nombres[indexMayor]} con una marca de ${mayorMarca} metros`);
}