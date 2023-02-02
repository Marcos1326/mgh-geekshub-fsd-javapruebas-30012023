// //Vamos a crear una función que valide que un
// número de DNI y una letra son compatibles para
// ello, necesitamos el siguiente algoritmo.

//pedir dni y letra
//dividir numero entre %23

let DNI = parseInt(prompt("dime los dijitos de tu DNI"));
let letra = prompt("dime la letra de tu DNI").toUpperCase();
//declaramos las variables

let letras = ["T","R","W","A","G","M","Y","F","P","D","X","B","N","J","Z","S","Q","V","H","L","C","K","E","T"];
//array letras dni

let operacion = DNI % 23;
let comprobante = (letras[operacion]);

if(comprobante===letra){
    console.log("el dni es correcto")
} else{
    console.log("el dni es incorrecto")
}

//forma ternaria

let resultado = (letra === letras[operacion])
    ? "El dni es correcto"
    : "El dni es incorrecto";

    console.log(resultado);