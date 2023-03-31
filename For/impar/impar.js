//Cree un programa que muestre los números impares entre 1 y n. 


let num = parseInt(prompt("Ingrese un numero"));

for (let conta = 1; conta <= num; conta++) {
    if (conta % 2 != 0) {
        console.log ("numero impar " + conta); 
    }
} 
