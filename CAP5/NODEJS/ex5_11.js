const prompt = require("prompt-sync")();
const fruta = prompt("Digite o NOME DA FRUTA: ");
const numVezes = Number(prompt("Número: "));

let resultado = "";
for (let i = 0; i < numVezes; i++) {
    resultado += `${fruta} * `;
}

console.log(resultado.trim()); // TRIM SERVE PARA REMOVER ESPAÇO ENTRE STRINGS, POR EXEMPLO ( " OLÁ, MUNDO!") PARA ("OLÁ,MUNDO")
