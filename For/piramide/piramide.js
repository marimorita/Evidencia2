//Realizar el ejercicio anterior propuesto (triangulo de asteriscos)

let num = parseInt(prompt("Ingresa el numero de asteriscos"));
let index;
let indexx;

for (index=1; index <= num; index++){
    let total = "";

    for (chist = 1; chist<= index; chist++) {
        total += "*";
    }

console.log(total);

}

for (index = num; index > 1; index --){
      let total = ""

    for (chist = index; chist >1; chist--) {
      total += "*"
}
    
console.log(total); 

}
    

    