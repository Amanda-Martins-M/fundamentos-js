// Sobre o laço do...while (faça enquanto)
//do...while = executa e verifica depois
//while = verifica antes e executa depois

/*
 sintaxe:
   let variavelDeControle
   do{
   //bloco de código que será executado
   } while(condição)

   while(condição){
   //bloco de código que será executado
   }
*/

let senha;

do{
    senha = prompt("Digite sua senha:");
} while (senha !== "1234");


let opcao;
do {
    opcao = prompt(`
        1 - Comprar
        2 - Vender
        0 - Encerrar atendimento
        `)

        console.log(opcao);
} while (opcao !== "0");