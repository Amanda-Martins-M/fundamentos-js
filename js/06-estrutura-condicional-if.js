// Estruturas condicionais são recursos de programação que permitem executar diferentes blocos de código com base em condições específicas, ou seja, serve basicamente para tomar decisões no código.

let idade = prompt("Digite a sua idade!");

/* if (se) - 

if(condição){bloco de código que será executado se a condição for verdadeira} 
    }

*/

// if simples
if(idade >= 18){
    alert("Você é maior de idade!");
} else{
    alert("Você ainda é pitico!");
}

// if composto - if/else (se/se não) - else bloco de código que será executado se a condição NÃO for verdadeira

let emailEsperado = "pipipi@gmail.com";
let email = prompt("digite o seu e-mail:");

if (email === emailEsperado){
    alert(`Seja bem-vindo ${email}`);
} else {
        alert("E-mail inválido!");
}

let hora = 18;
if(hora <= 17){
    console.log("Bom dia!");
} else{
    console.log("Boa noite!");
}


// if encadeado - if/else if/else
    // Usamos quando precisamos testar várias condições diferentes

let nota = 0;
if(nota >= 9){
    console.log("Excelente!");
} else if (nota >= 7){
    console.log("Boa nota!");
} else if (nota >= 5) {
    console.log("Você passou raspando!");
} else if (nota >= 3) {
    console.log("Em recuperação!");
}else {
    console.log("Você reprovou!");
}
