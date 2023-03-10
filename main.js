let num = Number(prompt("Ingrese el primer numero"));
let num2 = Number(prompt("Ingrese el segundo numero"));
if (num > num2) {
    let suma = num + num2;
    let diferencia = num - num2;
    alert(`La suma de los numeros ${num} y ${num2} = ${suma}\nY su diferencia es de ${diferencia}`);
}
else {
    let producto = num * num2;
    let division = num2 / num;
    alert(`El producto de los numeros ${num} y ${num2} = ${producto}\nY su division es ${division}`);
}