let operador = prompt("Escolha um operador aritmético: +, -, * ou /.");

switch(operador){
    case "+":
    console.log("Você selecionou a adição!");
    let resultado = numero1 + numero2
    console.log("Você selecionou a adição!");
    console.log(resultado);
    break;

    case "-":
    console.log("Você selecionou a subtração!");
    break;

    case "*":
    console.log("Você selecionou a multiplicação!");
    break;

    case "/":
    console.log("Você selecionou a divisão!");
    break;

    default: 
    console.log("Operador inválido!");
    break;
}