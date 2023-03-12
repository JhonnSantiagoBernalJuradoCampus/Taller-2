let valores = [];
let respuesta = Number;
let indice = 0;
let sumatoria = 0;

do {
    valores.push(Number(prompt("Ingrese un dato numerico")));
    respuesta = Number(prompt("Ingrese 0 para parar de ingresar numeros"));
    sumatoria += valores[indice];
    indice++;
} while (respuesta != 0);

let promedio = (sumatoria / indice);
let totalDeDatos = indice;
let mayorDato = Math.max(...valores);
let menorDato = Math.min(...valores);

alert(`La sumatoria de los datos es de ${sumatoria}\n
El promedio de los datos es de ${promedio}\n
En total se ingresaron ${totalDeDatos} datos\n
El dato con mayor valor ingresado es ${mayorDato}\n
El dato con menor valor ingresado es ${menorDato}`);