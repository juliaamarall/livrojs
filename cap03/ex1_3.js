const prompt = require("prompt-sync")(); // Inicializa o prompt-sync
const num1 = Number(prompt("1° número: "));
const num2 = Number(prompt("2° número: "));
const soma = num1 + num2;
console.log(`A soma é ${soma}`);
