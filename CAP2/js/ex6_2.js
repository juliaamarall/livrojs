const frm = document.querySelector("form");
const valorPagar = document.querySelector("h3");

frm.addEventListener("submit", (e) =>{
    const valorMin = frm.min.value;
    const tempoUso = frm.tempo.value;

    const tempoTotalUso = Math.ceil(tempoUso / 15);

    const pagarTotal = (valorMin * tempoTotalUso).toFixed(2)

    valorPagar.innerText = `Valor a Pagar R$: ${pagarTotal}`

    e.preventDefault()
})