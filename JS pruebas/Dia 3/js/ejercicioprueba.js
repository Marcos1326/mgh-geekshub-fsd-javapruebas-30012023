// decla variables
let nombre; 
let nombres=[];

//bucle para pedir nomre y llenar la array
for(let i = 0; i < 10; i++){
    nombre = prompt("dame un nombre");
    nombres.push(nombre);
}

console.log(nombres);