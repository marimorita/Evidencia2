//Cree un programa que calcula la suma de los primeros n numeros naturales.

let num = parseInt(prompt("Ingresa un numero"));

let contador =1;
let acumulador =0;

while (contador <= num) {
    console.log(acumulador)
    acumulador = acumulador + contador;
    contador++
}



