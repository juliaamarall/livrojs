const prompt = require("prompt-sync")();
const numChinchilas = Number(prompt("Número de CHINCHILAS: "));
const anos = Number(prompt("ANOS: "));
let resultado = "";
let totalChinchilas = numChinchilas; // Inicializando com o número de chinchilas

for (let i = 1; i <= anos; i++) {
    resultado += `${i} ANO ${totalChinchilas} \n `;
    totalChinchilas *= 3; // Triplica a quantidade de chinchilas a cada ano
}

console.log(resultado);
