// Pida un número por prompt, acto seguido irá restando ese número hasta llegar a 0 (usando un bucle), 
// cada uno de los números que devuelva la resta en el bucle, hay que decir por console.log si ese número es par.

// Prompt para pedir numero 
let num = parseInt(prompt("Dime un numero"));


// Ejemplo con FOR
for(let i = num; i > 0; i--){

    if(i % 2 === 0){
        console.log(i);
    }

};

// Ejemplo con WHILE 
while(num >= 1){

    if(num % 2 === 0){
        console.log("es par", num);
    }
    num--;
};

// ternaria = forma simplificada de un if (por ejemplo)

// "?" = condicion verdadera | ":" = condicion falsa
// let result = (num1 < 100) ? "el num1 menor" : "El num1 es mayor";
//     console.log(result)

// Como ampliación al ejercicio anterior, ahora hará una suma de todos los pares y lo mostrará mediante console.log una vez haya salido del bucle, 
// además de ello, para sufrimiento del alumnado, no sólo nos dirá si un número es par, también nos dirá si es impar, en vez de un if else , usareis una ternaria.
// let num = parseInt(prompt("Dime un numero"));

let result = 0;

while(num >= 1){
    if(num % 2 === 0){
        console.log("es par", num);
        result+=num;
        //resultado = resultado + num;
    } else{
        console.log("es impar", num);
    }
    num--;
};

console.log(result);

//Ahora con la ternaria

// let number = parseInt(prompt("Introduce un número:"));
// let totalParNumbers = 0;

while (number > 0) {

    number%2 != 0 ? (
        console.log(number + " es un número impar")
    ) : (
        console.log(number + " es un número par"),
        totalParNumbers += number
    );
    number--;
}
console.log ("La suma total de los números páres es: " + totalParNumbers)
