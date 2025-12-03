// Uma função, principalmente no JS, ela é utilizado para reutilizar uma determinada ação no nosso código. A ideia é criar a função a fim de evitar frepetições desnecessárias.

/*

sintaxe:

function nomeDaFuncao(){
// bloco de código que será executado
}

*/

function banana(){
    console.log("Função da banana!");
}

// Para a função funcionar, precisamos "invocar". Para invocar a função basta passar o nome da função seguida de um par de parenteses.
banana();

let login = true
// Trabalhando com parametros em funções
function saudacao(nomeUsuario) {
    console.log(`Olá, seja bem-vindo(a) ${nomeUsuario}`);
}

//const nome = prompt("Digite seu nome: ");
const nome = "Amands";

saudacao(nome);


// Trabalhando com mais de um parâmetro
// somar(undefined, undefined);
function somar(numeroA, numeroB) {
    let resultadoSoma = numeroA + numeroB;
    console.log(resultadoSoma)
}

somar(5, 10);

// trabalhando com o return
function multiplicacao(a, b){
    return `A multiplicação entre ${a} * ${b} é igual a: ${a * b}`;
   // O return ignora todo o restante do código
   // É o ponto de parada da função

   // return `A multiplicação entre ${a} * ${b} é igual a: ${a * b}`;
   console.log("Depois do return");
}

let resultadoMultiplicacao = multiplicacao(10, 5);
console.log(resultadoMultiplicacao);

// Tipos de funções
// 1 - Funções declaradas
function falar() {
    console.log("Olá");
}
falar();

// 2 - Função expressão/anônima
let latir = function(){
console.log("Au au!");
};

latir()

// 3 - Arrow function/ função da seta

let subtrair = (a, b)=>{
    return a - b;
};

subtrair(10, 5);

// HOISTING = IÇAR