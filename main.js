let nombre = prompt("Ingrese el nombre del articulo");
let precio = Number(prompt("Ingrese el valor del producto"))
let cantidad = Number(prompt("Ingrese la cantidad que desea comprar"))
alert(` - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -\n
\tArticulo:\t\t${nombre}\n
\tPrecio c/u:\t\t${precio} $\n
\tCantidad:\t\t${cantidad}\n
\tPrecio total:\t${(precio*cantidad)} $\n
\tMuchas gracias por su compra\n
- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -`)