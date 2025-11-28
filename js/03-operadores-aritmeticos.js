// Operadores aritméticos  em JavaScript
// Servem para ealizar operações matemáticas básicas

// Os mais comuns são:

// Adição (+)
let x = Number(prompt("Digite um número:"));
let y = Number(prompt("Digite outro número:"));

let soma = x + y;

alert(`O resultado da soma entre ${x} e ${y} é igual a: ${soma}`);
console.log(soma);

// Subtração (-)
let subtracao = x - y;
console.log(subtracao);
alert(`O resultado da subtração é: ${subtracao}`);

// Multiplicação (*)
let multiplicacao = x * y;
console.log("O resultado da multiplicação é:" + multiplicacao);
alert(`O resultado da multiplicação é: ${multiplicacao}`);

// Exponenciação (**)
let exponenciacao = x ** y;
console.log(`O resultado da exponenciação é:" ${ exponenciacao}`);
alert(`O resultado da exponenciação é: ${exponenciacao}`);

// Divisão (/)
let divisao = x / y;
console.log(divisao);
alert(`O resultado da divisão é: ${divisao}`);

// Resto da divisão (%) - Conhecido como operador de módulo. Geralmente retorna o resto de uma divisão dentre dois números
let restoDivisao = x % y;
console.log(restoDivisao);