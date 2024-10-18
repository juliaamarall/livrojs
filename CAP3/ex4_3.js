const prompt = require("prompt-sync")();
const racaoKg = Number(prompt("Peso da ração: "));
const consumoGato = Number(prompt("Consumo diário: "));
const kiloGrama = (racaoKg * 1000);
const consumoRacao = (Math.floor(kiloGrama / consumoGato));
 const sobra = kiloGrama % consumoGato;
 console.log(`Duração: ${consumoRacao} dias`);
 console.log(`Sobra: ${sobra}gr`)
