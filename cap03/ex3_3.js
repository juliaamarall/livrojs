const prompt = require("prompt-sync")();
const salario = Number(prompt("Digite seu salário: "));
const tempoEmpresa = Number(prompt("Digite seu tempo de empresa: "));

const aumento = Math.floor(tempoEmpresa / 4);
const salarioAumentado = (salario * aumento) / 100
const novoValor = (salario + salarioAumentado).toFixed(2);
console.log(`AUMENTO: ${aumento}`);
console.log(`Salario Final R$: ${novoValor}`)