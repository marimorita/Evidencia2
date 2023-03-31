let num1 = parseInt(prompt("Ingresa un numero"));
let num2 = parseInt(prompt("Ingresa una potencia"));
let contador = 1;
let acumuladora = 0;

while (contador <= num2) {
    acumuladora = acumuladora + num1;
    contador++
}

console.log("La suma total es: " , acumuladora)
