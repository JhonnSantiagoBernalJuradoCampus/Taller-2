let cantidad = Number(prompt("Ingrese la cantidad de estudiantes que desea ingresar"));
let nombres = [];
let masculino = [];
let femenino = [];
let notaFinal = [];
for (let i = 0; i < cantidad; i++) {
    nombres.push(prompt("Ingrese el nombre"));
    decision = prompt("Ingrese el sexo\n\t1.Masculino\n\t2.Femenino");
    if (decision == 1) {
        masculino.push(decision);
    }
    else {
        femenino.push(decision);
    }
    notaFinal.push(Number(prompt("Ingrese la nota final")));
}

let indiceMayor = notaFinal.indexOf(Math.max(...notaFinal));
let indiceMenor = notaFinal.indexOf(Math.min(...notaFinal));
let cantidadM = masculino.length;
let cantidadF = femenino.length;
alert(`La persona con la nota mayor es ${nombres[indiceMayor]}\n\tCon una nota final de ${notaFinal[indiceMayor]}\nLa persona con la nota menor es ${nombres[indiceMenor]}\n\tCon una nota final de ${notaFinal[indiceMenor]}\nLa cantidad de personas con sexo masculino es ${cantidadM}\nLa cantadidad de personas con sexo femenino es ${cantidadF}`);