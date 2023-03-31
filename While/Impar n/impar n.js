//Cree un programa que muestre los numeros impares entre 1 y n.

let num = parseInt(prompt("Ingresa el numero"));

let contador =0;

while (contador <= num) {
    if (contador % 2 != 0){
        console.log("impar", contador);
      }
    contador++
}
