console.log("Olá, mundo!")

// As variáveis são "caixinhas" onde você guarda valores/informações para usar depois no seu código.

//No javascript, temos 3 formas principais de declarar variáveis.
// 1 - var (usado em aplicações mais antigas)
//var nome = "Uai";

// 2 - let
let nome = "Uaai";
console.log(nome);

// pode sofrer redeclaração.
nome = "Iau";
console.log(nome);

// 3 - const (não sofre alteração, continua o memsmo valor).
const sobrenome = "Babababa";
console.log(sobrenome);

sobrenome = 'teste';
console.log(sobrenome);

// Convenção de nome de variáveis
//camelCase - onde a primeira palavra começa com letra minúscula e as próximas com maiúscula
const macaVermelha = 'Fruta';
let idadeAluno = 30;