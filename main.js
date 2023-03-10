function notas() {
    let nota = parseFloat(prompt("Ingrese la nota 1"));
    let nota2 = parseFloat(prompt("Ingrese la nota 2"));
    let nota3 = parseFloat(prompt("Ingrese la nota 3"));
    let promedio = ((nota + nota2 + nota3) / 3);
    if (promedio >= 3.9, promedio <= 5) {
        alert("Becado")
    }
    else if (promedio >= 0, promedio < 3.9){
        alert("Estudie")
    }
    else{
        alert("Ingrese datos que correspondan")
        notas()
    }
    let decision = prompt("Desea seguir digitando notas?\n\t1.Si\n\t2.No")
    if (decision == 1) {
        notas()
    }
}
notas()