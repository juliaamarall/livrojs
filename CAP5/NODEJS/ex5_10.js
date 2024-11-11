const prompt = require("prompt-sync")()
const valor = Number(prompt("Digite o valor: "))
const parcelas = Number(prompt("Digite as parcelas: "))
const numParcelas = Math.floor(valor / parcelas)
const valorTotal = numParcelas + (valor % parcelas)

for(let i = 1; i < parcelas; i++){
    console.log(`${i} parcela: R$ ${numParcelas.toFixed(2)}`)
}
console.log(`${parcelas} parcela: R$ ${valorTotal.toFixed(2)}`)