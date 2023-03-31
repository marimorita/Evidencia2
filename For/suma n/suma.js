//Cree un programa que calcula la suma de los primeros n numeros naturales.

let num = parseInt(prompt("Ingresa el digito"));
let acumulador =0;

for (let i = 0; i <= num; i++) {
    acumulador = acumulador + i;
}
alert("La suma de los primeros "+num+" digitos es: "+acumulador);
