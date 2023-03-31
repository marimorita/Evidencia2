//Cree un programa que pregunte al usuario si desea salir, si o no “S/N”, si el usuario teclea la letra S el
//programa se detendra, de lo contrario continuara ejecutandose

let confi = prompt("Ingresea S si desea salir o N si no desea salir");

while (confi != ("S" || "s")) {
    confi = confi = prompt("Ingresa S para salir");
}

