const prompt = require("prompt-sync")()
const numero = Number(prompt("Digite um número: "));

const valor = numero % 2 === 0 ? console.log('Seu número é PAR') : console.log('Seu número é IMPAR');
// if(numero % 2 === 0){
//     console.log('Seu número é PAR')
// } else{
//     console.log('Seu número é IMPAR')
// }