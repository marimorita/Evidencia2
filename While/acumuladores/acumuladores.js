//*Crear un programa que muestre la multiplicación de dos cantidades. 

let numero = 0;
let contador = 1;
let acumuladora = 0;

while (contador <= 2) {
    numero = parseInt(prompt("Ingresa el numero"));
    acumuladora = numero * numero;
    contador++
    
}
console.log(numero, " x ", numero, " = :" , acumuladora);

