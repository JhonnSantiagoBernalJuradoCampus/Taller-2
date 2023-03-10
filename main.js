let num = prompt("Ingrese un numero");
function par() {
    return (num%2) == 0
}
if (par() == true) {
    if (num > 10) {
        alert(`Su numero ${num} es par y mayor que 10`)
    }
    else {
        alert(`Su numero ${num} es par y menor a 10`)
    }
}
else {
    alert(`Su numero ${num} es impar`)
}