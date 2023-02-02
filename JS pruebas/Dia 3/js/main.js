// ARRAY (son como un tren donde puedes poner y quitar vagones)

// Array alumnos 
// [] son para indicar las array (cabeza y cola del tren)
let alumnos = ["Alvaro","Alex","Paula","Fernando","Felipe"];
//                 0       1       2        3         4

// la longitud es de 5 (5 nombres)
// la posicion es de 4 porque empieza desde 0

console.log(alumnos[2]);
//mostrara la posicion 2 de la array (Paula)
//primero la variable creada y luego la posicion de la array

for(let i = 0; i < alumnos.length; i++){
//alumnos.length te muestra la longitud de la array alumnos

    console.log(alumnos[i]);
//declaramos alumnos para que muestre la array alumnos y [i] 
//para que te muestre la posicion dentro del bucle
};

let nombre = prompt("Dame un nombre");

let nombres = [];

nombres.push(nombre);

// .push es para meter la variable que pides dentro de la array 
//en la ultima posicion

let bebidas = ["agua","zumo de naranja","vozca","monster","bitter kas"];

let comidas = ["paella","cocido","queso","pizza","hamburguesa"];

let despensa = bebeidas.concat(comidas);
console.log(despensa)

//.concat para juntar dos array en una sola

let deportes=["tenis","baloncesto","petanca","e-sports"];
console.log(deportes);

let resultado = deportes.join("* *")
console.log(resultado);
//join te muestra los elementos de la array en una sola linea
//separada por un caracter opcional

deportes.reverse();
//reverse es una funcion que no necesita argumento 
//e invierte el orden de la array
console.log(deportes);

deportes.unshift("ajedrez");
//mete un elemento a la posicion 0 del array
console.log(deportes);

console.log(deportes.slice(0,3));
// .slice("valor") te corta la array desde la posicion 
//inicial que quieras hasta la final deseada (1,3)

console.log(deportes.short());
// .short() te ordena alfabeticamente la array 

