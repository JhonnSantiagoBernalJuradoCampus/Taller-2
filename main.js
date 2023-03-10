let corriente = parseFloat(prompt("Ingrese la intensidad de la corriente Amperio (A)"));
let resistencia = parseFloat(prompt("Ingrese la resistencia Ohmio (Ω)"))
let voltaje = (corriente*resistencia)
alert(`El voltaje es ${voltaje} Voltios (V)`)