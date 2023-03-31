//Cree un programa que calcule el promedio de 10 números.

let n =0;
let acumulador =0;
let promedio =0;

for (let conta = 0; conta <= 10; conta++) {
    num = parseInt(prompt("Ingresa un digito"));
    acumulador = acumulador + num;
    promedio = acumulador / num;
}
console.log("El promedio es: " , promedio);
