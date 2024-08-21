
const frm = document.querySelector("form");
const resp = document.querySelector("h3");

frm.addEventListener("submit", (e) => {  // Adicionada a vírgula aqui
    const quilo = Number(frm.kilo.value);
    const consumo = Number(frm.grama.value);

    const valorPagar = (quilo / 1000) * consumo;

    resp.innerText = `Valor a pagar R$: ${valorPagar.toFixed(2)}`;  // Corrigido para toFixed

    e.preventDefault();
});
