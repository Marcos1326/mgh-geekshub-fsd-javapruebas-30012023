//Proposicion de Ejercicio: Genera una aplicación que te pida la edad y 
//el pais donde vives, en base a eso te responderá si es legal 
//por tu parte adquirir cerveza, además también te dirá si eres 
//o no mayor de edad. 
//Toma como referencias Estados Unidos (21) y Europa (18)

let edad = parseInt(prompt("dime tu edad"));
let pais = prompt("dime el pais donde vives (Estados unidos, Europa)");

if (edad > 21) {
    console.log('Puedes beber cerveza');
} else if ((edad < 18) && (pais === "Europa")){
    console.log ("No puedes beber cerveza")
} else if ((edad < 21) && (pais === "Estados Unidos")){
    console.log("No puedes beber cerveza")
}