let nombre = [];
let edad = [];

for (let i = 1; i < 4; i++) {
    nombre.unshift((prompt(`Ingrese el nombre ${i}`)))
    edad.unshift(Number(prompt(`Ingrese la edad ${i}`)))
}
posicion = edad.indexOf(Math.max(...edad))
alert(`La persona con mayor edad es ${nombre[posicion]} con una edad de ${edad[posicion]} años`)