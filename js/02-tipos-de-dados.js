// O JavaScript possui 8 tipo de dados, sendo 7 deles, os chamados de tipos primitivos.

// 1 - Tipo NUMBER - usado para números inteiros ou decimais/ Para números inteiros aproximadamente 9 QUATRILHOES de números
let idade = 25;
console.log(idade);

let preco = 379.90
console.log(preco);
console.log(typeof preco)
console.log('---------------------------------');

// 2 - Tipo STRING - usado para textos
let nome = "-Amands-";
console.log(nome);

let sobrenome = "-pipipi-";
console.log(sobrenome);

let frase = 'Apenas um teste de aspas simples'
console.log(frase);

let frase2 = `Exemplo de string com crase ${nome} ${sobrenome}`
console.log(frase2);
console.log(typeof frase2);


let nomeCompleto = `${nome} ${sobrenome}`
console.log(nomeCompleto);
console.log('---------------------------------');

// 3 - Tipo BOOLEAN - usado para valores lógicos e que se pode ter duas respostas possíveis
// Verdadeiro (true)
// Falseo (false) 

let maiorDeIdade = true;
let aprovado = false;
console.log(typeof maiorDeIdade);
console.log('---------------------------------');

// 4 - Tipo UNDEFINED (INDEFINIDA/O) - usado para variáveis que não foram inicializadas, ou seja, não receberam nenhum valor.
let x;
console.log(x);

x = 5
console.log(x);
console.log('---------------------------------');

// 5 - Tipo NULL - nulo,0
let resposta = null;
let user = null;
console.log('---------------------------------');

// 6 - Tipo SYMBOL (SÍMBOLO) - Usado para criar identificadores únicos para objetos

const id = Symbol("senha");
console.log(id);
console.log(typeof id);

const id2 = Symbol("senha");
console.log(id);
console.log('---------------------------------');

// 7 - Tipo BIGINT - É usado para representar números inteiros ENORMES, maiores que o limite do tipo NUMBER

const numeroGrande = BigInt(1234567890123456789012345678901234567890n);
console.log(numeroGrande);
console.log(typeof numeroGrande);







