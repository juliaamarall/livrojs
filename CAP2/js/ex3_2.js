const frm = document.querySelector("form");
const res1 = document.querySelector("#resp1");
const res2 = document.querySelector("#resp2");
const res3 = document.querySelector("#resp3");

frm.addEventListener("submit", (e) =>{
    const nomeCarro = frm.nomeVeiculo.value;
    const precoCarro = Number(frm.precoVeiculo.value);

    const precoReal = precoCarro * 0.50 ;
    const saldoCarro = (precoCarro * 0.50) / 12;

    res1.innerText = `PROMOÇÃO: ${nomeCarro}`;
    res2.innerText = `ENTRADA: ${precoReal.toFixed(2)}`;
    res3.innerText = `+12X: ${saldoCarro.toFixed(2)}`;

    e.preventDefault()
})