const prompt = require("prompt-sync")()
const pessoas = Number(prompt("N° PESSOAS"));
const peixes = Number(prompt('N° PEIXES'));

let pagar

if(peixes <= pessoas){
    pagar = pessoas * 20
} else{
    pagar = (pessoas * 20) + ((peixes - pessoas) * 12)
}

console.log(`Pagar r$ ${pagar.toFixed(2)}`)