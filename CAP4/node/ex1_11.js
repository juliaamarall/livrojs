const prompt = require("prompt-sync")(); 

const lado1 = Number(prompt("LADO 01: "));
const lado2 = Number(prompt("LADO 02: "));
const lado3 = Number(prompt("LADO 03: "));

// Verifica se é possível formar um triângulo
if (lado1 + lado2 <= lado3 || lado2 + lado3 <= lado1 || lado3 + lado1 <= lado2) {
    console.log("SEU TRIÂNGULO NÃO PODE SER FORMADO");
} 
// Verifica se é equilátero (todos os lados iguais)
else if (lado1 === lado2 && lado2 === lado3) {
    console.log("SEU TRIÂNGULO É EQUILÁTERO");
} 
// Verifica se é isósceles (dois lados iguais)
else if (lado1 === lado2 || lado2 === lado3 || lado1 === lado3) {
    console.log("SEU TRIÂNGULO É ISÓSCELES");
} 
// Se não for nenhum dos anteriores, é escaleno (todos os lados diferentes)
else {
    console.log("SEU TRIÂNGULO É ESCALENO");
}
