//Escriba un algoritmo que calcule la potencia de a b
//potencial = a * a * a * ... * a (b veces) USE MULTIPLICACIONES. NO USE POTENCIACIÓN. USE CICLOS

let num1 = parseInt(prompt("Ingresa un numero"));
let num2 = parseInt(prompt("Ingresa el numero de la potencia"));
let contador = 1;
let acumuladora = 1;

while (contador <= num2) {
    acumuladora = acumuladora * num1;
    contador++
}

console.log("El total es: " , acumuladora);
