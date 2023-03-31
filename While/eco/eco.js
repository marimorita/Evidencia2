let letra = prompt("Ingresa una letra");
let num = parseInt(prompt("Ingresa un numero"));
let contador =0;
let acumulador = "";

while (contador <= num) {
    acumulador += letra;
    contador++
}
console.log(acumulador);



for (let contador = 1; contador <= num; contador++) {
    acumulador += letra;
    
}
