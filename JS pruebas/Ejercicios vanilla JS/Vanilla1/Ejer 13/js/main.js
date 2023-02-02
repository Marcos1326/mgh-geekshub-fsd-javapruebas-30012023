//CALCULADORA INVERSA

let num1 = parseInt((prompt("Introduce el primer valor")));
let num2 = parseInt((prompt("Introduce el segundo valor")));

let signo = prompt("Dime el signo de la operación").toLowerCase();

// .toLowerCase lo convierte todo en minusculas 

switch(signo){

    case '+':
    case 'suma':

        console.log(num1 + num2);

    break;

    case '-':
    case 'resta':

        console.log(num1 - num2);

    break;

    case '/':
    case 'division':

        console.log(num1 / num2);   

    break;

    case '*':
    case 'multiplicacion':

        console.log(num1 * num2);

    break;

    default:
        console.log("Nooooooo! no has dicho nada coherente");

}